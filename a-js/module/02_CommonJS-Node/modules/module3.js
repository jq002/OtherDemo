/**
 * 使用exports.xxx = value向外暴露一个对象
 */
"use strict"
exports.foo = function () {
  console.log('module3 foo()')
}

exports.bar = function () {
  console.log('module3 bar()')
}

let counter=1;

exports.counter=counter;

exports.incCounter=function(){
  counter++;
}

exports.getCounter=function(){
  return counter;
}
let obj={
  counter:counter,
  name:'name',
  subObj:{
    name:'sub'
  },
  getName:getName
}
function getName(){
  return this.name;
}
exports.obj=obj
exports.setNewObj=function(){
  let newObj={
    name:'newObj',
    subObj:{
      name:'newsub'
    },
  }
  obj=newObj
}
exports.setObjName=function(){
  obj.name="updateName",
  obj.subObj.name="updatesubname"
}

exports.getObj=function(){
  return obj;
}