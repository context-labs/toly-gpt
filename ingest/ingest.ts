import { HNSWLib } from "langchain/vectorstores";
import { Embeddings, OpenAIEmbeddings } from "langchain/embeddings";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from "fs";
import { Document } from "langchain/document";
import { BaseDocumentLoader } from "langchain/document_loaders";
import path from "path";
import { load } from "cheerio";
import { InMemoryDocstore } from "langchain/dist/docstore";
import { SpaceName } from "hnswlib-node";

async function processFile(filePath: string): Promise<Document> {
  return await new Promise<Document>((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, fileContents) => {
      if (err) {
        reject(err);
      } else {
        const text = load(fileContents).text();
        const metadata = { source: filePath };
        const doc = new Document({ pageContent: text, metadata: metadata });
        resolve(doc);
      }
    });
  });
}

async function processDirectory(directoryPath: string): Promise<Document[]> {
  const docs: Document[] = [];
  let files: string[];
  try {
    files = fs.readdirSync(directoryPath);
  } catch (err) {
    console.error(err);
    throw new Error(
      `Could not read directory: ${directoryPath}. Did you run \`sh download.sh\`?`
    );
  }
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      const newDocs = processDirectory(filePath);
      const nestedDocs = await newDocs;
      docs.push(...nestedDocs);
    } else {
      const newDoc = processFile(filePath);
      const doc = await newDoc;
      docs.push(doc);
    }
  }
  return docs;
}

class RepoLoader extends BaseDocumentLoader {
  constructor(public filePath: string) {
    super();
  }
  async load(): Promise<Document[]> {
    return await processDirectory(this.filePath);
  }
}

async function fromDocuments(
  docs: Document[],
  embeddings: Embeddings,
  dbConfig ?: {
    docstore?: InMemoryDocstore;
  }
): Promise <HNSWLib> {
  const args = {
    docstore: dbConfig?.docstore,
    space: "ip" as SpaceName,
  };
  const instance = new HNSWLib(embeddings, args);
  await instance.addDocuments(docs);
  return instance;
}

const directoryPath = "markdown/solana";
const loader = new RepoLoader(directoryPath);

export const run = async () => {
  const rawDocs = await loader.load();
  console.log("Loader created.");
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 8000,
    chunkOverlap: 100,
  });
  const docs = await textSplitter.splitDocuments(rawDocs);
  console.log("Docs splitted.");

  console.log("Creating vector store...");
  /* Create the vectorstore */
  const vectorStore = await fromDocuments(docs, new OpenAIEmbeddings());
  await vectorStore.save("data");
};

(async () => {
  await run();
  console.log("done");
})();
