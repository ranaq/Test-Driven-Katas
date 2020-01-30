const {expect}=require('chai')
const wrap=require('./wraps')

describe(' test 1 wrap',()=>{
  it ('Returns empty string if empty string was provided',()=>{
    expect (wrap("",10)).to.equal("")
  })
})

describe(' test 2 hello',()=>{
  it ('Returns a short string',()=>{
    expect (wrap("A short string",20)).to.equal("A short string")
  })
})


describe('test 3 adding columns',()=>{
  it ('Returns a short string',()=>{
    expect (wrap("A short string",1)).to.equal("A\nshort string")
  })
})

describe(' test 4 adding columns',()=>{
  it ('Col length does not land on a space',()=>{
    expect (wrap("A short string",10)).to.equal("A short\nstring")
  })
})

