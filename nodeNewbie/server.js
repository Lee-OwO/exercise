const fs = require('fs')
const pug = require('pug')
const querystring = require('querystring')
const prom = require('util').promisify
const http = require('http')

const readFile = prom(fs.readFile)
// const page = fs.readFileSync()
var msg = [
  {
    username: 'foo',
    content: 'bar',
    time: Date.now()
  }
]



http.createServer(async (req, res) => {
  if (req.url === '/') {
    var tpl = await readFile('./bbs.pug')
    var template = pug.compile(tpl, {
      pretty: true
    })
    if (req.method === 'GET') {
      res.end(template({
        message: msg.slice().reverse()
      }))
    } else if(req.method === 'POST') {
      var body = ''
      req.on('data', data => {
        body += data.toString()
      })
      req.on('end', () => {
        var nmsg = querystring.parse(body)
        nmsg.time = Date.now()
        msg.push(nmsg)
        res.end(template({
          message: msg.slice().reverse()
        }))
      })
    }
  } else {
    res.writeHead(404)
    res.end('404 not found')
  }
}).listen(8989, () => {
  console.log('listen 8989')
})