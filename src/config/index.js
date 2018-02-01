'use strict'

var  devConfig =  {
        apiHost: ''
}
    
    var     productionConfig= {
        apiHost: 'http://cnodejs.org'
    }


var config = process.env.NODE_ENV === 'production' ? productionConfig : devConfig;

module.exports = config;