// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Proxy for the main API base URL
  app.use(
    ['/auth', '/api'], // Proxy all requests starting with /auth or /api
    createProxyMiddleware({
      target: 'https://nittappdev.spider-nitt.org', // Dev base URL
      changeOrigin: true, // Modifies the origin of the host header to the target URL
      secure: false, // Disable SSL verification for development
      pathRewrite: {
        '^/api': '', // Remove /api prefix before forwarding
        '^/auth': '', // Remove /auth prefix before forwarding
      },
      onProxyReq: (proxyReq, req, res) => {
        // You can modify request headers if needed
      },
      onProxyRes: (proxyRes, req, res) => {
        // Add CORS headers to the response
        proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'; // Allow requests from your React app
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
      },
      onError: (err, req, res) => {
        console.error('Proxy error:', err);
        res.status(500).send('Proxy error occurred');
      },
    })
  );

  // Proxy for the LCA API base URL
  app.use(
    '/lca', // Proxy all requests starting with /lca
    createProxyMiddleware({
      target: 'https://restapis.lcas.spider-nitt.org', // LCA API base URL
      changeOrigin: true, // Modifies the origin of the host header to the target URL
      secure: false, // Disable SSL verification for development
      pathRewrite: {
        '^/lca': '', // Remove /lca prefix before forwarding
      },
      onProxyReq: (proxyReq, req, res) => {
        // You can modify request headers if needed
      },
      onProxyRes: (proxyRes, req, res) => {
        // Add CORS headers to the response
        proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'; // Allow requests from your React app
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
      },
      onError: (err, req, res) => {
        console.error('Proxy error:', err);
        res.status(500).send('Proxy error occurred');
      },
    })
  );
};
