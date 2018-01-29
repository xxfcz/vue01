var utils = require('../../../src/utils/index')

describe('utils.js', ()=>{
    it('goodTime', ()=>{
        var s = utils.default.goodTime("2018/1/19 17:40")
        console.log(s)
    })
})