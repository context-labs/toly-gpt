[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/sidebars)

The `sidebars` folder in the Solana project contains a single file, `api.js`, which is responsible for defining the sidebar navigation structure for the Solana API documentation. This file exports three arrays: `apiSidebar`, `apiHttpMethodsSidebar`, and `apiWebsocketMethodsSidebar`. These arrays are used to create a clear and organized navigation structure, making it easy for developers to find the information they need about specific API methods and features.

The `apiSidebar` array contains links to the main JSON RPC API page, the HTTP Methods page, and the Websocket Methods page. This serves as the top-level navigation for the API documentation.

The `apiHttpMethodsSidebar` array contains a link to the JSON RPC API page, the Websocket Methods page, and a category for HTTP Methods. The HTTP Methods category has a `collapsed: false` property, meaning it will be expanded by default when viewing the documentation. This category contains links to various API methods, such as `getAccountInfo`, `getBalance`, `getBlockHeight`, and many others.

```javascript
const apiHttpMethodsSidebar = [
  'api/jsonrpc',
  'api/websocket',
  {
    type: 'category',
    label: 'HTTP Methods',
    collapsed: false,
    items: [
      'api/http/getAccountInfo',
      'api/http/getBalance',
      'api/http/getBlockHeight',
      // ...
    ],
  },
];
```

The `apiWebsocketMethodsSidebar` array contains a link to the JSON RPC API page, the HTTP Methods page, and a category for Websocket Methods. Similar to the HTTP Methods category, the Websocket Methods category has a `collapsed: false` property and contains links to various API methods, such as `accountSubscribe`, `accountUnsubscribe`, `logsSubscribe`, and others.

```javascript
const apiWebsocketMethodsSidebar = [
  'api/jsonrpc',
  'api/http',
  {
    type: 'category',
    label: 'Websocket Methods',
    collapsed: false,
    items: [
      'api/websocket/accountSubscribe',
      'api/websocket/accountUnsubscribe',
      'api/websocket/logsSubscribe',
      // ...
    ],
  },
];
```

Additionally, there are categories for Unstable Methods and Deprecated Methods. The Unstable Methods category contains links to API methods that are not yet stable and may change in the future, while the Deprecated Methods category contains links to API methods that are no longer recommended for use.

This code is essential for providing a user-friendly navigation experience in the Solana API documentation. By organizing the API methods into categories and providing clear links to each method, developers can easily find the information they need to work with the Solana API effectively.
