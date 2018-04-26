# css3 卡片翻转

- 实现正反两张div
- index设置哪张为正面，初始设置背面旋转180
- transform-style旋转的子元素定位在3维空间内
- perspective设置观察者距离3维变换图像的位置

### backface-visibility
```
.front{
    backface-visibility: hidden;//自己在背面的时候，前面看不到；自己在前面，还是能看到背面（背面没有设置此属性）
}
```

### perspective近大远小的效果；有待考究
指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。
### transform-style 设置其子元素是否3D显示
```
 transform-style: preserve-3d;
```