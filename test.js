// node test.js 魔女の宅急便
const http = require('http')
const query = process.argv[2] || 'きゃりーぱみゅぱみゅ'
const req = http.request('http://localhost:8088/parse?q=' + encodeURIComponent(query), (res) => {
  let body = ''
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    body += chunk
  })
  res.on('end', () => {
    const json = JSON.parse(body)
    console.log(json, json.result)
  })
})
req.end();
