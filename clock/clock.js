
window.onload=function(){
    var ctx=document.getElementById('canvas').getContext('2d');
    var radius=200;

    ctx.beginPath();
    ctx.arc(radius,radius,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(radius,radius,7,0,Math.PI*2);
    ctx.fill();
    var angle=Math.PI*2/60;
    var h=1;
    for(var i=0;i<60;i++){

        var endAngle=i*angle-Math.PI/3;
        var x=Math.cos(endAngle)*(radius-20);
        var y=Math.sin(endAngle)*(radius-20);
        if(i%5==0){
            ctx.beginPath();
            ctx.fillStyle='#ff0000';

            ctx.font="16px serif"
            ctx.textAlign="center";
            ctx.fillText(h,radius+x,radius+y);
            h++;
        }else{
            ctx.fillStyle='#000000';

            ctx.beginPath();
            ctx.arc(radius+x,radius+y,1.5,0,Math.PI*2);
            ctx.fill();
        }


    }
};

