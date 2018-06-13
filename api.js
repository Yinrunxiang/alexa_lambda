'use strict';

var http = require('http');
var querystring = require('querystring');
var host = '39.108.129.244/thinkphp/public/';
// let path = '/application/node/post.php';
const api = {
    post(path,data,func) {
        var contents = querystring.stringify(data);
        var options = {
            host: host,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': contents.length
            }
        }

        var req = http.request(options, function (res) {
            if(res.code == '200'){
                func(data)
            }else{
                func(data)
            }
        });
    }
}
module.exports = api