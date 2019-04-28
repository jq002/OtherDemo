// 定义没有依赖的模块
define(function() {
  console.log('dataService----')
  let msg = 'www.baidu.com'
  function getMsg() {
    return msg.toUpperCase()
  }
  return { getMsg } // 暴露模块
})
