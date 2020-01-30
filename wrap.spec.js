const {expect}=require('chai')
const wrap=require('./wraps')

describe('wrap',()=>{
  it ('Returns empty string if empty string was provided',()=>{
    expect (wrap("",10)).to.equal("")
  })
})

describe('hello',()=>{
  it ('Returns a short string',()=>{
    expect (wrap("A short string",20)).to.equal("A short string")
  })
})


describe('adding columns',()=>{
  it ('Returns a short string',()=>{
    expect (wrap("A short string",1)).to.equal("A\nshort string")
  })
})

