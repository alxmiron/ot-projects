const devProxy: { [key: string]: {} } = {
    "/api": {
        target: "http://ot-routing.vovnenko.name/",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
    },
};

export default devProxy;
