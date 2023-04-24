const Logger = require('./logger');

const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url==='/'){
        res.write('Hello world');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
 
server.listen(3000);

console.log('Listening on port 3000...');

// const path = require('path')
// const os = require('os')
// const fs = require('fs')

// log(path.parse(__filename));

// log(`Total Memory ${os.totalmem()}`)
// log(`Free Memory ${os.freemem()}`)
// log(`File Access ${fs.readdirSync('./')}`)
// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// })

// const logger = new Logger();

// logger.on('messageLogged', function(arg){
//     console.log('Event fired', arg);
// });

// logger.log('message');