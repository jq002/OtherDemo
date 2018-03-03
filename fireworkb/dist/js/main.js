!function(t){function i(s){if(e[s])return e[s].exports;var h=e[s]={i:s,l:!1,exports:{}};return t[s].call(h.exports,h,h.exports,i),h.l=!0,h.exports}var e={};i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i,e){"use strict";function s(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var h=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),o={width:window.innerWidth,height:window.innerHeight,canvases:["bg","firework","txt","fall"],skyColor:"hsla({hue}, 60%, {lightness}%, 0.2)",fireworkTime:{min:30,max:60},fireworkOpt:{x:void 0,y:void 0,xEnd:void 0,yEnd:void 0,count:100,wait:void 0},snowInterval:60,snow:{x:void 0,y:void 0,minSize:5,maxSize:10,size:void 0,speed:.5,opacity:.8},dialogueOpt:{interval:2500,speed:100,color1:"#ff00ff",font1:"14px Arial",color2:"#f97afb",color3:"red",color4:"#ffff00",color5:"#00ff00",color6:"#00ffff",color7:"#00bfff"},dialogue:[{type:6,txt:"戊戌年 正月十五"},{type:2,txt:"元宵节快乐"},{type:2,txt:"请你看一场不一样的烟火"},{type:6,txt:"虽然已经零点过去"},{type:6,txt:"相识即缘分。"},{type:7,txt:"来自 jiangqin"}]};console.log(navigator.userAgent),function(t,i,e){if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){var s=document.querySelectorAll("body")[0];s.style.width=t+"px",s.style.height=i+"px"}e.forEach(function(e){var s=document.querySelector("#"+e);s.setAttribute("width",t),s.setAttribute("height",i)})}(o.width,o.height,o.canvases);var r=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,h=i.y,r=i.minSize,n=void 0===r?5:r,a=i.maxSize,l=void 0===a?7.5:a,u=i.size,d=i.speed,c=void 0===d?.5:d;i.opacity;s(this,t),this.x=e||o.width/8+Math.random()*o.width*3/4,this.y=h||0,this.size=u||n+(l-n)*Math.random(),this.opacity=.8+.2*Math.random(),this.speed=c*(1+Math.random()),this.direction=Math.random()>.5?.5:-.5}return h(t,[{key:"fall",value:function(){this.x+=Math.random()*this.direction,this.y+=this.speed}},{key:"outOfBounds",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.height,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.width;return!(this.x>=-this.size&&this.x<=i&&this.y<=t&&this.y>=-this.size)}},{key:"render",value:function(t){return this.fall(),!this.outOfBounds()&&(this.g=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size),this.g.addColorStop(0,"hsla(255,255%,255%,"+this.opacity+")"),this.g.addColorStop(1,"hsla(255,255%,255%,0)"),t.beginPath(),t.fillStyle=this.g,t.arc(this.x,this.y,this.size,0,2*Math.PI,!1),t.fill(),!0)}}]),t}(),n=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,h=i.y,o=(i.size,i.radius),r=void 0===o?1.3:o,n=i.shape,a=void 0===n?1:n;switch(s(this,t),this.x=e,this.y=h,this.size=.5+1*Math.random(),this.rate=Math.random(),this.angle=2*Math.PI*Math.random(),this.shape=a,this.shape){case 1:this.angle=2*Math.PI*Math.random();break;case 2:this.angle=Math.PI/2*Math.random()+Math.PI,this.x=e+50*Math.cos(this.angle),this.y=h+50*Math.sin(this.angle);break;case 3:this.angle=2*Math.PI/3*Math.random()+7*Math.PI/6;break;default:this.angle=2*Math.PI*Math.random()}this.vx=r*Math.cos(this.angle)*this.rate,this.vy=r*Math.sin(this.angle)*this.rate}return h(t,[{key:"go",value:function(){this.x+=this.vx,this.y+=this.vy,this.vy+=.02,this.vx*=.98,this.vy*=.98}},{key:"render",value:function(t){this.go(),t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI,!1),t.fill()}}]),t}(),a=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.x,h=i.y,r=void 0===h?o.height:h,n=i.xEnd,a=i.yEnd,l=i.count,u=void 0===l?300:l,d=i.wait;s(this,t),this.x=e||o.width/8+Math.random()*o.width*3/4,this.y=r,this.xEnd=n||this.x,this.yEnd=a||o.height/6+Math.random()*o.height/6,this.size=2,this.velocity=-3,this.opacity=.8,this.hue=360*Math.random()|0,this.color="hsla("+this.hue+",80%,60%,1)",this.wait=d||30+30*Math.random(),this.count=u,this.particles=[],this.createParticles(),this.status=1}return h(t,[{key:"createParticles",value:function(){for(var t=Math.ceil(3*Math.random()),i=0;i<this.count;++i)this.particles.push(new n({x:this.xEnd,y:this.yEnd,shape:t}))}},{key:"rise",value:function(){this.y+=1*this.velocity,this.velocity+=.005,this.y-this.yEnd<=50&&(this.opacity=(this.y-this.yEnd)/50),this.y<=this.yEnd&&(this.status=2)}},{key:"getSkyColor",value:function(){return{lightness:3==this.status?this.opacity:0,hue:this.hue}}},{key:"render",value:function(t){switch(this.status){case 1:return t.save(),t.beginPath(),t.globalCompositeOperation="lighter",t.globalAlpha=this.opacity,t.translate(this.x,this.y),t.scale(.8,2.3),t.translate(-this.x,-this.y),t.fillStyle=this.color,t.arc(this.x+Math.sin(2*Math.PI*Math.random())/1.2,this.y,this.size,0,2*Math.PI,!1),t.fill(),t.restore(),this.rise(),!0;case 2:return this.opacity=1,this.status=3,!0;case 3:t.save(),t.globalCompositeOperation="lighter",t.globalAlpha=this.opacity,t.fillStyle=this.color;for(var i=0;i<this.particles.length;++i)this.particles[i].render(t);return t.restore(),this.opacity-=.01,this.opacity>0;default:return!1}}}]),t}();e(1),e(2);({init:function(){this.setProperty(),this.renderBg(),this.initAudio(),this.loop()},initAudio:function(){var t=new Audio;t.src=e(3),t.loop=!0,t.play(),t.volume=.5;var i=document.querySelector("#music");document.addEventListener("WeixinJSBridgeReady",function(){t.play()},!1),i.onclick=function(){"on"==this.getAttribute("class")?(this.setAttribute("class","off"),t.pause()):(this.setAttribute("class","on"),t.play())}},setProperty:function(){this.fireworks=[],this.fallDots=[],this.width=o.width,this.height=o.height,this.fireworkTime=o.fireworkTime.min+(o.fireworkTime.max-o.fireworkTime.min)*Math.random()|0,this.bgCtx=document.getElementById("bg").getContext("2d"),this.fireworkCtx=document.getElementById("firework").getContext("2d"),this.txtCtx=document.getElementById("txt").getContext("2d"),this.fallCtx=document.getElementById("fall").getContext("2d"),this.skyColor={lightness:0,hue:210},o.dialogueOpt.interval=this.transTime(o.dialogueOpt.interval,120),o.dialogueOpt.speed=this.transTime(o.dialogueOpt.speed,18),this.dialogueOpt=this.extend({},o.dialogueOpt),this.dialogue=o.dialogue.shift(),this.snowInterval=o.snowInterval,this.status="txt"},renderBg:function(){this.bgCtx.fillStyle="hsla(210, 60%, 5%, 1)",this.bgCtx.fillRect(0,0,this.width,this.height)},extend:function(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];return e.forEach(function(i){for(var e in i)t[e]=i[e]}),t},transTime:function(t,i){return+t/1e3*60|0||i},renderFall:function(){this.fallCtx.clearRect(0,0,this.width,this.height),--this.snowInterval<=0&&this.fallDots.length<20&&(this.fallDots.push(new r(o.snow)),this.snowInterval=o.snowInterval);for(var t=this.fallDots.length-1;t>=0;--t)!this.fallDots[t].render(this.fallCtx)&&this.fallDots.splice(t,1)},renderFirework:function(){this.fireworkCtx.fillStyle=o.skyColor.replace("{lightness}",5+15*this.skyColor.lightness).replace("{hue}",this.skyColor.hue),this.skyColor={lightness:0,hue:210},this.fireworkCtx.fillRect(0,0,this.width,this.height),--this.fireworkTime<=0&&this.fireworks.length<8&&(this.fireworks.push(new a(o.fireworkOpt)),this.fireworkTime=o.fireworkTime.min+(o.fireworkTime.max-o.fireworkTime.min)*Math.random()|0);for(var t=this.fireworks.length-1;t>=0;--t)this.skyColor=this.skyColor.lightness>=this.fireworks[t].getSkyColor().lightness?this.skyColor:this.fireworks[t].getSkyColor(),!this.fireworks[t].render(this.fireworkCtx)&&this.fireworks.splice(t,1)},renderTxt:function(){if(this.txtCtx.clearRect(0,0,o.width,o.height),this.txtCtx.fillStyle=this.dialogueOpt["color"+this.dialogue.type]||this.dialogueOpt.color1,this.txtCtx.font=this.dialogueOpt["font"+this.dialogue.type]||this.dialogueOpt.font1,this.dialogue.current=this.dialogue.current||0,--this.dialogueOpt.speed<=0&&(this.dialogueOpt.speed=o.dialogueOpt.speed,++this.dialogue.current),this.txtCtx.fillText(""+this.dialogue.txt.slice(0,this.dialogue.current),20,50),this.dialogue.current>=this.dialogue.txt.length&&--this.dialogueOpt.interval<=0){if(0==o.dialogue.length)return this.txtCtx.clearRect(0,0,o.width,o.height),void(this.status="firework");this.dialogue=o.dialogue.shift(),this.dialogueOpt.interval=o.dialogueOpt.interval}},loop:function(){switch(requestAnimationFrame(this.loop.bind(this)),this.status){case"txt":this.renderFall(),this.renderTxt();break;case"firework":this.renderFirework(),this.renderFall()}}}).init()},function(t,i,e){t.exports=e.p+"img/musicon.png"},function(t,i,e){t.exports=e.p+"img/musicoff.png"},function(t,i,e){t.exports=e.p+"sky.mp3"}]);