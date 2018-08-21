# TronWeb


A jssdk that encapsulates the TRON HTTP request

# Install
* npm: npm install tronWeb
* bower: bower install tronWeb


# Example Usage
```
const TronWeb = require('tronWeb')
const solidityNode = TronWeb.getSolidityNode({apiUrl:''})  
const fullNode = TronWeb.getFullNode({apiUrl:''})  
const address = 'TYrWfWFGwrWLwNvE4T12aQGeur9UdjQJom'

// ES7
 async getAccountInfo(){
    const data = await solidityNode.getAccountInfo(address);
    console.log(data);
 }
// or promise

getAccountInfo(){
 solidityNode.getAccountInfo(address).then(res=>{
   console.log(res);
 })
}    
```

# GitHub

# docs
[document](http://doc.tron.network/)
[官方文档](http://doc.tron.network/)

