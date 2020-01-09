
#### 在media query中使用相对单位：
- 一般而言，rem是相对于HTML的字体大小的。但是，由于媒体查询的级别非常高，它并不是HTML的子元素，不是相对于HTML，而是相对于浏览器的，而浏览器的默认字体大小是16px。如果HTML设置字体大小为12px，设置如下媒体查询
    
    media="only screen and (max-width:1rem)"
　　
- 实际上，max-width等于16px，而不是12px。而正是由于媒体查询是相对于浏览器的， 所以使用rem就没有必要，完全可以使用em来替代。

    media="only screen and (max-width:1em)"

#### media query的初始设置：
- 在<head>中插入：
    
    <\meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">(去掉“\”)

#### 使用media query目的：
    使用CSS3中媒体查询的大致思路就是判断网页在不同设备中所处的宽度范围，这样的范围可能有三种（PC、平板、手机），也可能有四种（PC、平板、中大屏手机、小屏手机），当然也可能只需要两种（平板、手机，PC端单独开发一版时可不作为CSS3媒体查询的使用对象），并为各种宽度范围情况下的所需页面元素套用不同的CSS样式，从而适配各种设备。

#### box-model：
margin -> border -> padding -> content

#### display和visibility区别：
    visibility:hidden可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。
    display:none可以隐藏某个元素，且隐藏的元素不会占用任何空间。

#### Selector Type

    css selector 分为 4 种 type: a, b, c, d. 他们的数目计算规则为:
    a: 如果 css 属性声明是写在 style=“” 中的, 则数目为 1, 否则为 0
    b: id 选择器的数目
    c: class 选择器, 属性选择器(如 type=“text”), 伪类选择器(如: ::hover) 的数目
    d: 标签名(如: p, div), 伪类 (如: :before)的数目
    在比较不同 css selector 的权重时, 按照 a => b => c => d 的顺序进行比较.

#### 伪类和伪元素定义
    伪类用于在页面中的元素处于某个状态时，为其添加指定的样式。
    伪元素会创建一个抽象的伪元素，这个元素不是DOM中的真实元素，但是会存在于最终的渲染树中，我们可以为其添加样式。
    最常规的区分伪类和伪元素的方法是：实现伪类的效果可以通过添加类来实现，但是想要实现伪元素的等价效果只能创建实际的DOM节点。
    伪类使用单冒号 “:” ; 伪元素使用双冒号 “::”

#### position
- absolute
> 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
- fixed
> 生成绝对定位的元素，相对于浏览器窗口进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
- relative
> 生成相对定位的元素，相对于其正常位置进行定位。
因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
- static
> 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
- inherit
> 规定应该从父元素继承 position 属性的值。


#### block, inline-block, inline 区别
    block
    块级元素特点：
    1、每个块级元素都从新的一行开始，并且其后的元素也另起一行。
    2、元素的高度、宽度、行高以及顶和底边距都可设置。
    3、元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。
    
    inline
    内联元素特点：
    1、和其他元素都在一行上；
    2、元素的高度、宽度及顶部和底部边距不可设置；
    3、元素的宽度就是它包含的文字或图片的宽度，不可改变。
    
    inline-block
    内联块状元素（inline-block）就是同时具备内联元素、块状元素的特点。
    inline-block 元素特点：
    1、和其他元素都在一行上；
    2、元素的高度、宽度、行高以及顶和底边距都可设置。


