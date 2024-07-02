//Core modules
const fs = require('fs');
const http = require('http');
const url = require('url');
const findProductByName = require('./modules/findProductByName');
const findProductByVendor = require('./modules/findProductByVendor');
/*fs.readFile(`${__dirname}/txt/input.txt`,'utf-8',(err, data)=>{
    console.log(data);
}); */
let data = fs.readFileSync(`${__dirname}/products/products.json`,'utf-8');
products = JSON.parse(data);
//Server

const hostname  = 'localhost';
const port = '8888';

const server = http.createServer((req, res)=>{
    const {query, pathname} = url.parse(req.url, true);
    console.log('path',pathname);
    console.log('query', query);
    switch(pathname){
        case '/':
            res.writeHead(200,{
                'Content-Type': 'text/html',
            })
            res.end("<h1>Something went wrong</h1>");
            break;
       case '/api/products':
            res.writeHead(200,{
                'Content-Type': 'application/json',
            })
            res.end(data);
            break;
        case '/api/product':
                res.writeHead(200,{
                    'Content-Type': 'application/json',
                })
                res.end(JSON.stringify(products[query.id]));
                break;
        case '/api/search/name':
                    const result = findProductByName(products,query.name);
                    res.writeHead(200,{
                        'Content-Type': 'application/json',
                    })
                    res.end(JSON.stringify(result));
                    break;
        case '/api/search/vendor':
                        res.writeHead(200,{
                            'Content-Type': 'application/json',
                        })
                        res.end(JSON.stringify(findProductByVendor(products,query.vendor)));
                        break;
        default:
            res.writeHead(404,{
                'Content-Type': 'text/html',
                'my-header':'I like Node'
            })
            res.end("<h1>Page not found</h1>");

    }
})

server.listen(port,hostname, ()=>{
    console.log(`Server is listening on port ${port}`)
})










