
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports=function(app){
     app.use(
        createProxyMiddleware("/api",{
            target:"https://outpost.mapmyindia.com",
            changeOrigin:true,
        })
    )
    app.use(
        createProxyMiddleware("/api/places",{
            target:"https://atlas.mapmyindia.com",
            changeOrigin:true,
        })
    )
    app.use(
        createProxyMiddleware("/v2",{
            target:"https://api.foursquare.com",
            changeOrigin:true,
        })
    )
};