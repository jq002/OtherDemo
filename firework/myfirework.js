var bg = document.getElementById('bg').getContext('2d'),
    fireworkCtx = document.getElementById('firework').getContext('2d'),
    w = bg.width = fireworkCtx.width = window.innerWidth,
    h = bg.height = fireworkCtx.height = window.innerHeight;
    const config = {
        width: w,
        height: h,
        canvases: ['bg', 'firework'],
        skyColor: '210,60%,5%,0.2',
        fireworkTime: { min: 30, max: 60 },
        fireworkOpt: {
            x: undefined,
            y: undefined,
            xEnd: undefined,
            yEnd: undefined,
            count: 300,//炸裂后粒子数
            wait: undefined
        }
    }
class Particle {
    //默认值写法 
    constructor({ x, y, size = 1, radius = 1.2 } = {}) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.rate = Math.random(); //每个微粒移动的速度都是随机不同的
        this.angle = Math.PI * 2 * Math.random(); //每个微粒的偏移角度

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
        this.yEnd = yEnd || config.height / 8 + Math.random() * config.height * 3 / 4;
        this.size = 2;
        this.velocity = -3;

        this.opacity = 0.8;
        this.color = `hsla(${360 * Math.random() | 0},80%,60%,1)`;
        this.wait = wait || 0 + Math.random() * 30;
        //微粒个数等
        this.count = count;
        this.particles = [];
        this.createParticles();

        this.status = 1;
    }
    //创建微粒
    createParticles() {
        for (let i = 0; i < this.count; ++i) {
            this.particles.push(new Particle({ x: this.xEnd, y: this.yEnd }));
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

    //渲染烟花  烟花所有动作完成之后返回false
    render(ctx) {
        switch (this.status) {
            case 1: //升空
                ctx.save();
                ctx.beginPath();
                ctx.globalCompositeOperation = 'lighter';
                ctx.globalAlpha = this.opacity;
                // ctx.translate(this.x, this.y);
                // ctx.scale(0.8, 2.3);
                // ctx.translate(-this.x, -this.y);
                ctx.fillStyle = this.color;
                ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random()) / 1.2, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.restore();

                this.rise();
                return true;
                break;
            case 2: //烟花消失阶段，等待炸裂
                if (--this.wait <= 0) {
                    this.opacity = 1;
                    this.status = 3;
                }
                return true;
                break;
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
                break;
            default:
                return false;
        }
    }
}

bg.fillRect(0, 0, w, h);
fireworkCtx.clearRect(0, 0, w, h);
var firework=new Firework(config.fireworkOpt);
setInterval(function(){
    firework.render(fireworkCtx);
    
},60)
// requestAnimationFrame(firework.render(fireworkCtx));
