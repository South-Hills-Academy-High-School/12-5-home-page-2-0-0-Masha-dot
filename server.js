const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  var url = req.url;
  if(url ==='/') {
    fs.createReadStream('index.html').pipe(res)
  } else if(url ==='/arizona.html')  {
    fs.createReadStream('arizona.html').pipe(res)
  } else if (url ==='/dinosaur.html') {
    fs.createReadStream('dinosaur.html').pipe(res)
  } else if (url ==='/dinosaur2.html') {
    fs.createReadStream('dinosaur2.html').pipe(res)
  } else if (url ==='/dinosaur3.html') {
    fs.createReadStream('dinosaur3.html').pipe(res)
  } else if (url ==='/dinosaur4.html') {
    fs.createReadStream('dinosaur4.html').pipe(res)
  } else if (url ==='/dinosaur5.html') {
    fs.createReadStream('dinosaur5.html').pipe(res)
  } else if (url ==='/dinosaureat.html') {
    fs.createReadStream('dinosaureat.html').pipe(res)
  } else {
    res.write('Doesn\'t exist'); 
    res.end(); 
  }
  console.log("connected")
})

server.listen(process.env.PORT || 80)