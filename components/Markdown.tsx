import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

type MarkdownProps = {
  markdown: string;
  baseUrl?: string;
  articleUrl?: string;
};

const Markdown: React.FC<MarkdownProps> = ({
  markdown,
  baseUrl,
  articleUrl,
}) => {

  return (
    <div
      style={{
        color: "white",
        lineHeight: '1.75',
        display: 'inline-block',
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, children }) => {
            const {
              properties: { href, title },
            } = node as any;

            const isAnchor = Boolean(title);

            const finalHref = (() => {
              if ((href ?? '').includes('http')) return href;

              if (isAnchor) {
                return articleUrl + href;
              }

              try {
                return new URL(baseUrl ?? '').origin + href;
              } catch (e) {
                return '';
              }
            })();

            return (
              <a
                target="_blank"
                href={finalHref}
                rel="noreferrer"
              >
                {title ? '  #' : children}
              </a>
            );
          },
          code({ inline, className, children, ...props }) {
            if (inline) {
              return (
                <code
                  className={className}
                  {...props}
                  style={{
                    backgroundColor: '#2d3239',
                    borderRadius: '4px',
                    padding: '1px 4px',
                  }}
                >
                  {children}
                </code>
              );
            }

            const match = /language-(\w+)/.exec(className || '');
            return (
              <div style={{ marginBottom: '16px' }}>
                <SyntaxHighlighter
                  style={dark as any}
                  language={match?.[1] ?? 'bash'}
                  // PreTag="pre"
                  wrapLines={true}
                  wrapLongLines={true}
                // {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            );
          },
          h1: ({ children, ...props }) => (
            <h1>
              {children}
            </h1>

          ),
          h2: ({ children, ...props }) => (
            <h2>
              {children}
            </h2>

          ),
          h3: ({ children, ...props }) => (
            <h3>
              {children}
            </h3>

          ),
          h4: ({ children, ...props }) => (
            <h4>
              {children}
            </h4>

          ),
          h5: ({ children, ...props }) => (
            <h5>
              {children}
            </h5>

          ),
          h6: ({ children, ...props }) => (
            <h6>
              {children}
            </h6>
          ),
          p: ({ children, ...props }) => (
            <p {...props} style={{ marginBottom: '24px' }}>
              {children}
            </p>
          ),
          img: ({ src, ...props }) => {
            return (
              <img
                {...props}
                style={{ marginBottom: '16px' }}
                src={(() => {
                  const url = new URL(baseUrl ?? '');
                  if ((src ?? '').includes('http')) return src;
                  else return `${url.origin}${src}`;
                })()}
              />
            );
          },
          ul: ({ children, ...props }) => (
            <ul {...props} style={{ marginLeft: '24px', marginBottom: '24px' }}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol {...props} style={{ marginLeft: '24px', marginBottom: '24px' }}>
              {children}
            </ol>
          ),
          table: ({ children, ...props }) => (
            <table
              {...props}
              style={{
                ...(props.style ?? {}),
                fontSize: '16px',
                fontWeight: '400',
                margin: '0 0 16px',
              }}
            >
              {children}
            </table>
          ),
          tr: ({ children, ...props }) => (
            <tr
              {...props}
              style={{
                ...(props.style ?? {}),
                fontSize: '16px',
                fontWeight: '400',
                margin: '0 0 16px',
              }}
            >
              {children}
            </tr>
          ),
          td: ({ children, ...props }) => (
            <td
              {...props}
              style={{
                ...(props.style ?? {}),
                fontSize: '16px',
                fontWeight: '400',
                margin: '0 0 16px',
              }}
            >
              {children}
            </td>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
