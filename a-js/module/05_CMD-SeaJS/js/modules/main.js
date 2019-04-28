define(function (require) {


  document.getElementById('btn').addEventListener('click',function(){
    var m1 = require('./module1')
    var m4 = require('./module4')
    m1.show()
    m4.show()
  })
})