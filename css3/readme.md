# css3 3D属性

### transform
```
transform: rotateX(45deg);//一个垂直于z轴的平面，绕x轴旋转，从z轴方向投影到xy平面：宽度不变，高度变小
transform: rotateY(45deg);//一个垂直于z轴的平面，绕y轴旋转，从z轴方向投影：高度不变，宽度变小
transform: rotateZ(45deg);//一个垂直于z轴的平面，绕z轴旋转，从z轴方向投影：高度不变，宽度不变，旋转45
```

### 骰子
将3、4平面放在左右的方法
```
//错误
transform:  rotateY(90deg)  translateX(50px);//translateX是在平面上的位移；
//应该使用一下方法，将平面放在左右
transform: rotateY(90deg) translateZ(50px);（z轴始终指垂直于平面/旋转后的平面）

```
```
perspective: 100px;//相当于离得很近观察，靠近观察
```

### box-shadow
```
box-shadow: inset(内阴影) 0（阴影水平偏移） 0（垂直偏移） 15px（阴影模糊值）第四个（外延值） rgba(0, 0, 0, .2)（颜色）;
```

### rem
- 默认的浏览器字体大小16px；
- google要求最小字体12px;所以设置为625%，100px
```
html{
    font-size:62.5%;//0.625*16=10;(在google，会变成12px)
}
```

### vertical-align
middle:指的是中线往上1/2 x-height;就是x的交叉点

### ex
相对单位，指的是小写字母x的高度，x-height