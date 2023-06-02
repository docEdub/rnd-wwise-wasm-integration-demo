const path = require("path");

module.exports = {
    devServer: {
        headers: {
            // These are needed to get SharedArrayBuffer working, which is required for Wwise.
            "Cross-Origin-Embedder-Policy": "require-corp",
            "Cross-Origin-Opener-Policy": "same-origin",
        },
        host: '0.0.0.0',
        port: 80,
        server: "http",
        static: path.resolve(__dirname, ".")
    },
    mode: "development"
};
