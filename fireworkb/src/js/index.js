
const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    canvases: ['bg', 'firework', 'txt', 'fall'],
    skyColor: 'hsla({hue}, 60%, {lightness}%, 0.2)',
    // skyColor: 'hsla(210, 60%, 5%, 0.3)',
    fireworkTime: { min: 30, max: 60 },
    fireworkOpt: {
        x: undefined,
        y: undefined,
        xEnd: undefined,
        yEnd: undefined,
        count: 100,//炸裂后粒子数
        wait: undefined
    },
    snowInterval: 60,
    snow: {
        x: undefined,
        y: undefined,
        minSize: 5,
        maxSize: 10,
        size: undefined,
        speed: 0.5,
        opacity: 0.8
    },
    // 阶段一
    dialogueOpt: {
        interval: 2500,  //两句话的间隔时间
        speed: 100,   //语速
        color1: '#ff00ff',
        font1: '14px Arial',
        color2: '#f97afb',
        color3: 'red',
        color4: '#ffff00',
        color5: '#00ff00',
        color6: '#00ffff',
        color7: '#00bfff',
    },
    // type对应上面的color与font  若没有对应的 则默认为color1或font1
    dialogue: [
        { type: 6, txt: '戊戌年 正月十五' },
        { type: 2, txt: '元宵节快乐' },
        { type: 2, txt: '请你看一场不一样的烟火' },
        { type: 6, txt: '虽然已经零点过去' },
        { type: 6, txt: '相识即缘分。' },
        { type: 7, txt: '来自 jiangqin' }
    ],
}
// if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
//     config.width = window.innerWidth;
//     config.height = window.innerHeight;
// }
console.log(navigator.userAgent);
resize(config.width, config.height, config.canvases);
function resize(width, height, canvases) {

    if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        const body = document.querySelectorAll('body')[0];
        body.style.width = width + 'px';
        body.style.height = height + 'px';
    }

    canvases.forEach(canvasId => {
        const el = document.querySelector(`#${canvasId}`);
        el.setAttribute('width', width);
        el.setAttribute('height', height);
    });
}
class Snowflate {
    constructor({ x, y, minSize = 5, maxSize = 7.5, size, speed = 0.5, opacity = 0.8 } = {}) {
        this.x = x || config.width / 8 + Math.random() * config.width * 3 / 4;
        this.y = y || 0;
        this.size = size ? size : minSize + (maxSize - minSize) * Math.random();
        this.opacity = 0.8 + 0.2 * Math.random();
        this.speed = speed * (1 + Math.random());
        this.direction = Math.random() > 0.5 ? 0.5 : -0.5;
    }

    fall() {
        this.x += Math.random() * this.direction;
        this.y += this.speed;
    }
    outOfBounds(height = config.height, width = config.width) {
        if (this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size) return false;

        return true;
    }
    render(ctx) {
        this.fall();

        if (this.outOfBounds()) return false;

        this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        this.g.addColorStop(0, `hsla(255,255%,255%,${this.opacity})`);
        this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
        ctx.beginPath();
        ctx.fillStyle = this.g;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        ctx.fill();
        return true;
    }
}
class Particle {
    //默认值写法 
    constructor({ x, y, size = 1, radius = 1.3, shape = 1 } = {}) {
        this.x = x;
        this.y = y;
        this.size = 0.5 + Math.random() * 1;

        this.rate = Math.random(); //每个微粒移动的速度都是随机不同的
        this.angle = Math.PI * 2 * Math.random(); //每个微粒的偏移角度
        this.shape = shape;//微粒的生成形状（限制角度和位置）
        switch (this.shape) {
            case 1:
                this.angle = Math.PI * 2 * Math.random();
                break;
            case 2:

                this.angle = Math.PI / 2 * Math.random() + Math.PI;
                this.x = x + 50 * Math.cos(this.angle);
                this.y = y + 50 * Math.sin(this.angle);
                break;
            case 3:
                this.angle = Math.PI * 2 / 3 * Math.random() + Math.PI * 7 / 6;
                break;

            default:
                this.angle = Math.PI * 2 * Math.random();
                break;
        }

        //每次微粒移动速度分解为横纵坐标的移动。
        this.vx = radius * Math.cos(this.angle) * this.rate;
        this.vy = radius * Math.sin(this.angle) * this.rate;
    }

    go() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.02; //重力影响 y越大实际越偏下

        //空气阻力
        this.vx *= 0.98;
        this.vy *= 0.98;
    }

    //画出微粒的位置
    render(ctx) {
        this.go();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
    }
}
class Firework {
    constructor({ x, y = config.height, xEnd, yEnd, count = 300, wait } = {}) {
        //烟花自身属性
        this.x = x || config.width / 8 + Math.random() * config.width * 3 / 4;
        this.y = y;
        this.xEnd = xEnd || this.x;
        this.yEnd = yEnd || config.height / 6 + Math.random() * config.height / 6;
        this.size = 2;
        this.velocity = -3;

        this.opacity = 0.8;
        // this.color = `hsla(${360 * Math.random() | 0},80%,60%,1)`;
        this.hue = 360 * Math.random() | 0;
        this.color = `hsla(${this.hue},80%,60%,1)`;
        this.wait = wait || 30 + Math.random() * 30;
        //微粒个数等
        this.count = count;
        this.particles = [];
        this.createParticles();

        this.status = 1;
    }
    //创建微粒
    createParticles() {
        var shape = Math.ceil(Math.random() * 3);//随机生成烟花形状

        for (let i = 0; i < this.count; ++i) {
            this.particles.push(new Particle({ x: this.xEnd, y: this.yEnd, shape: shape }));
        }
    }
    //升空
    rise() {
        this.y += this.velocity * 1;
        this.velocity += 0.005; //升空时产生的阻力
        //烟花升空到目标位置开始渐隐
        if (this.y - this.yEnd <= 50) {
            this.opacity = (this.y - this.yEnd) / 50;
        }
        //如果到了目标位置 就开始第二个状态
        if (this.y <= this.yEnd) {
            this.status = 2;
        }
    }
    getSkyColor() {
        const skyColor = {
            //只有炸裂阶段才返回亮度
            lightness: this.status == 3 ? this.opacity : 0,
            hue: this.hue
        };
        return skyColor;
    }
    //渲染烟花  烟花所有动作完成之后返回false
    render(ctx) {
        switch (this.status) {
            case 1: //升空
                ctx.save();
                ctx.beginPath();
                ctx.globalCompositeOperation = 'lighter';
                ctx.globalAlpha = this.opacity;
                ctx.translate(this.x, this.y);
                ctx.scale(0.8, 2.3);
                ctx.translate(-this.x, -this.y);
                ctx.fillStyle = this.color;
                ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random()) / 1.2, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.restore();

                this.rise();
                return true;
            case 2: //烟花消失阶段，等待炸裂
                // if (--this.wait <= 0) {
                this.opacity = 1;
                this.status = 3;
                // }
                return true;
            case 3: //炸裂之后 渲染烟花微粒
                ctx.save();
                ctx.globalCompositeOperation = 'lighter';
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                for (let i = 0; i < this.particles.length; ++i) {
                    this.particles[i].render(ctx);
                }
                ctx.restore();
                this.opacity -= 0.01;
                return this.opacity > 0;
            default:
                return false;
        }
    }
}
const imgList = {
    // bg:require('../img/bg2.jpg'),
    musicon: require('../img/musicon.png'),
    musicoff: require('../img/musicoff.png'),
}
const canvas = {
    init: function () {
        //一些属性的设定 可以不用管
        this.setProperty();
        this.renderBg();
        this.initAudio();

        //循环体 **主要
        this.loop();
        // this.loopTxt();
        // this.renderFall();
    },
    initAudio() {
        const audio = new Audio();
        audio.src = require('../audio/sky.mp3');
        audio.loop = true;
        audio.play();
        audio.volume = 0.5;
        const music = document.querySelector('#music');

        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);


        music.onclick = function () {
            const cla = this.getAttribute('class');
            if (cla == 'on') {
                this.setAttribute('class', 'off');
                audio.pause();
            } else {
                this.setAttribute('class', 'on');
                audio.play();
            }
        }
    },
    setProperty: function () {
        this.fireworks = [];
        this.fallDots = [];
        this.width = config.width;
        this.height = config.height;
        this.fireworkTime = (config.fireworkTime.min + (config.fireworkTime.max - config.fireworkTime.min) * Math.random()) | 0;

        this.bgCtx = document.getElementById('bg').getContext('2d');
        this.fireworkCtx = document.getElementById('firework').getContext('2d');
        this.txtCtx = document.getElementById('txt').getContext('2d');
        this.fallCtx = document.getElementById('fall').getContext('2d');

        this.skyColor = { //新增
            lightness: 0,
            hue: 210
        };
        //ms => 帧
        config.dialogueOpt.interval = this.transTime(config.dialogueOpt.interval, 120);
        config.dialogueOpt.speed = this.transTime(config.dialogueOpt.speed, 18);
        // 对话的参数
        this.dialogueOpt = this.extend({}, config.dialogueOpt);
        // 话的文字
        this.dialogue = config.dialogue.shift();

        this.snowInterval = config.snowInterval;

        this.status = 'txt';

    },
    renderBg() {
        this.bgCtx.fillStyle = 'hsla(210, 60%, 5%, 1)'
        this.bgCtx.fillRect(0, 0, this.width, this.height);
    },
    extend(origin, ...arg) {
        arg.forEach(item => {
            for (let key in item) {
                origin[key] = item[key];
            }
        });
        return origin;
    },
    //ms => 帧
    transTime(time, defult) {
        return +time / 1000 * 60 | 0 || defult;
    },
    renderFall() {
        this.fallCtx.clearRect(0, 0, this.width, this.height);
        if (--this.snowInterval <= 0 && this.fallDots.length < 20) {
            this.fallDots.push(new Snowflate(config.snow));
            this.snowInterval = config.snowInterval;
        }
        for (let i = this.fallDots.length - 1; i >= 0; --i) {
            !this.fallDots[i].render(this.fallCtx) && this.fallDots.splice(i, 1);
        }
    },
    renderFirework() {
        //每次替换色调与亮度值。
        this.fireworkCtx.fillStyle = config.skyColor.replace('{lightness}', 5 + this.skyColor.lightness * 15).replace('{hue}', this.skyColor.hue);
        this.skyColor = { //新增
            lightness: 0,
            hue: 210
        };
        this.fireworkCtx.fillRect(0, 0, this.width, this.height);
        // //随机创建烟花
        if (--this.fireworkTime <= 0 && this.fireworks.length < 8) {//限制烟花数量，否则重绘导致卡顿
            this.fireworks.push(new Firework(config.fireworkOpt));
            //每次到点之后重新设置烟花产生时间 （|0转化为整数）
            this.fireworkTime = (config.fireworkTime.min + (config.fireworkTime.max - config.fireworkTime.min) * Math.random()) | 0;
        }

        for (let i = this.fireworks.length - 1; i >= 0; --i) {
            //渲染烟花 （若返回值为false则移除烟花）
            this.skyColor = this.skyColor.lightness >= this.fireworks[i].getSkyColor().lightness ? this.skyColor : this.fireworks[i].getSkyColor();

            !this.fireworks[i].render(this.fireworkCtx) && this.fireworks.splice(i, 1);
        }
    },
    renderTxt() {
        this.txtCtx.clearRect(0, 0, config.width, config.height);
        this.txtCtx.fillStyle = this.dialogueOpt['color' + this.dialogue.type] || this.dialogueOpt.color1;
        this.txtCtx.font = this.dialogueOpt['font' + this.dialogue.type] || this.dialogueOpt.font1;

        //说话
        this.dialogue.current = this.dialogue.current || 0;
        if (--this.dialogueOpt.speed <= 0) {
            this.dialogueOpt.speed = config.dialogueOpt.speed;
            ++this.dialogue.current;
        }

        this.txtCtx.fillText(`${this.dialogue.txt.slice(0, this.dialogue.current)}`, 20, 50);

        //下一句
        if (this.dialogue.current >= this.dialogue.txt.length && --this.dialogueOpt.interval <= 0) {
            if (config.dialogue.length == 0) {
                this.txtCtx.clearRect(0, 0, config.width, config.height);
                this.status = 'firework';
                return;
            }
            this.dialogue = config.dialogue.shift();
            this.dialogueOpt.interval = config.dialogueOpt.interval;
        }
    },

    loop() {
        requestAnimationFrame(this.loop.bind(this));
        switch (this.status) {
            case 'txt':  //文字
                this.renderFall();
                this.renderTxt();
                break;
            case 'firework': //烟花
                this.renderFirework();
                this.renderFall();
                break;
        }


    }
}
canvas.init();