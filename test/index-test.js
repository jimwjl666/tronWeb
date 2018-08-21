import TronWeb from '../src/index.js'
const to_address = 'TGhepyLuyML5n5jQBTykKqh9od8hQrBDkS'
const from_address = 'TJCnKsPa7y5okkXvQAidZBzqx3QyQ6sxMW'
const pk = 'D95611A9AF2A2A45359106222ED1AFED48853D9A44DEFF8DC7913F5CBA727366'
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const tronWeb = new TronWeb('http://127.0.0.1:8090')

describe('tool function', ()=>{
  describe('tronWeb.toHex(str)', ()=>{
    it('should return hex string', ()=>{
      	assert.equal(tronWeb.toHex('TGhepyLuyML5n5jQBTykKqh9od8hQrBDkS'), '4149D7C89C24AB0DE2830C7FDBAF0D8AB08BF28049');
    });
  });
  describe('tronWeb.fromHex(hexString)', ()=>{
    it('should return normal string',()=>{
      assert.equal(tronWeb.fromHex('4149D7C89C24AB0DE2830C7FDBAF0D8AB08BF28049',), 'TGhepyLuyML5n5jQBTykKqh9od8hQrBDkS');
    })
  })
})

describe('tests for main tronweb', () => {

	describe('获取某个地址的余额：tronWeb.getBalance(address)', ()=>{
    	it('should return a object of account balance', async ()=>{
    		const balance = await tronWeb.getBalance(to_address)
    		expect(balance).to.have.property('balance')
    	})
  	})

  	describe('获取最新块：tronWeb.blockNumber()', ()=>{
    	it('should return a object of block', async ()=>{
    		const block = await tronWeb.blockNumber()
    		expect(block).to.have.property('blockID')
    	})
  	})



})
