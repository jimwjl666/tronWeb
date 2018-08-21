# TronWeb


A jssdk that encapsulates the TRON HTTP request

# Install
* npm: npm install tronWeb
* bower: bower install tronWeb


# Example Usage
```
let tronWeb = new TronWeb('http://52.44.75.99:8090');
tronWeb.setEventServer('http://52.44.75.99:18889');
tronWeb.defaultAccount = 'TPL66VK2gCXNCD7EJg9pgJRfqcRazjhUZY';
tronWeb.defaultPk='da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'; 

async getBalance(){
        const res = await tronWeb.getBalance(this.account.value);
        this.setState({
            data:res
        })
    }  

```

# GitHub
https://github.com/gitwujiaolong/tronWeb.git
# docs
[document](http://doc.tron.network/)
[官方文档](http://doc.tron.network/)

