var http = require('http')

var url = require("url");
http.createServer((req, res) => {
var pathname = url.parse(req.url).query
var iid;
if (pathname) {
  iid= pathname.split('iid=')[1]
}
var options = {
  hostname: "m.meilishuo.com",
  port: 80,
  path: `/detail/mls/v1/h5?iid=${iid}&_ajax=1&cparam=`,
  methods:"GET"
}
var str = "";
const reqData = http.request(options, (myData) =>{
  res.setHeader("Access-Control-Allow-Origin","*")//让别人可以访问数据
  res.writeHead(200, { "Content-Type" : "text/html;charset=utf-8" });
  myData.on("data", (data) => {
    str += data
  })
myData.on("error", () =>{
      res.end(str)
})
reqData.on("error", () => {})
  myData.on("end", () => {
      res.end(str)
  })
})
reqData.end();
}).listen(3000);
console.log("your server is  running at http://localhost:3000")
