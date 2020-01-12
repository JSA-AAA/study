# **CSS**

## **Required Topics**

> \*Note: important topics are in **bold\***

- float and clear float
- Position
- Display
- 伪类和伪元素(web component 可以先不看）
- Box model
- Flex
- Css selector specificity
- Important
- 长度单位：px, vw, vh, em, rem
- 实现居中的方法

> **Suggested study order**:
>
> - Box Model
> - display, flex, position
> - float, clear float
> - css selector, 伪类伪元素
> - important
> - 长度单位
> - 实现居中的方法
> - 看媒体查询（media query）

## **Goal**

- [X] how css works in webpage?
- [X] effect/usage of each sub-topic
- [X] what is box model
- [X] position values and usage
- [X] the differences between inline and block
- [X] what attributes (minum 2) are useless for inline
- [X] 父级是 flex，子级可以是 block 或者 inline 吗
- [X] 用 flex 实现横向和纵向居中
- [X] 怎么样只 clear 左边的浮动(例子)
- [X] 伪类和伪元素的区别是什么
- [X] css 选择器的优先级的规则
- [X] 长度单位 vw，vh，em，rem 是什么，什么时候可以用 rem（calc 是什么）
- [X] 媒体查询
  - [X] 可以用于区分设备吗
  - [X] 写个例子，横屏显示红色文字，竖屏显示绿色文字
  - [X] 写个例子，浏览器宽度大于 1000 像素时显示红色文字，小于 1000 显示绿色文字

## **Question need to solve**

## **Key Concepts**

- Box model
- flexBox
- display
- center (horizontal, vertical, both)
- selector specificity(优先级)
- position

## **Materials / Study Note**

- [Float](https://www.jianshu.com/p/07eb19957991)
- [Display](https://segmentfault.com/a/1190000000654770)
- [Flex](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Position](https://www.ruanyifeng.com/blog/2019/11/css-position.html)
- [List of CSS selector](https://www.w3school.com.cn/cssref/css_selectors.asp)
- [伪类，伪元素](https://www.jianshu.com/p/51764a54c5ae)
- [CSS 选择器](https://juejin.im/post/5be3d07be51d457d4932b043) 内联 > ID选择器 > 类选择器 > 标签选择器。
- [长度单位](https://www.jianshu.com/p/5d1f811082f2)
- [清除浮动详解](https://www.cnblogs.com/yuer20180726/p/11006553.html)

1. [**How CSS works**](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)

![how css works](assets/how_css_works.svg)

2. **Selector and specificity**
   - [Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
   - CSS selector specificity [scoring]: !important > inline style > id > class > element

3. **position**
   - static
     > 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
   - relative
     > 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20px" 会向元素的 LEFT 位置添加 20 像素。
   - absolute
      > 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
   - fixed
     > 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
   - inherit
     > 规定应该从父元素继承 position 属性的值。

4. **[CSS realtive length units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#Relative_length_units)**

    ![css relative length units](assets\css-units.PNG)

1. **Media**

   1. **在media query中使用相对单位**：
      1.  一般而言，rem是相对于HTML的字体大小的。但是，由于媒体查询的级别非常高，它并不是HTML的子元素，不是相对于HTML，而是相对于浏览器的，而浏览器的默认字体大小是16px。如果HTML设置字体大小为12px，设置如下媒体查询
      
          > `media="only screen and (max-width:1rem)"`
  　　
      2. 实际上，max-width等于16px，而不是12px。而正是由于媒体查询是相对于浏览器的， 所以使用rem就没有必要，完全可以使用em来替代。

          > `media="only screen and (max-width:1em)"`

   2. **media query的初始设置**：
      1. 在<head>中插入：
      
          > `<\meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">(去掉“\”)`

   3. 使用media query目的
      
      >使用CSS3中媒体查询的大致思路就是判断网页在不同设备中所处的宽度范围，这样的范围可能有三种（PC、平板、手机），也可能有四种（PC、平板、中大屏手机、小屏手机），当然也可能只需要两种（平板、手机，PC端单独开发一版时可不作为CSS3媒体查询的使用对象），并为各种宽度范围情况下的所需页面元素套用不同的CSS样式，从而适配各种设备。

2. **block, inline-block, inline 区别**
   1.  block
       1. 块级元素特点：
          1. 每个块级元素都从新的一行开始，并且其后的元素也另起一行。
          2. 元素的高度、宽度、行高以及顶和底边距都可设置。
          3. 元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。
      
   2. inline
      1. 内联元素特点：
         1. 和其他元素都在一行上；
         2. 元素的高度、宽度及顶部和底部边距不可设置；
         3. 元素的宽度就是它包含的文字或图片的宽度，不可改变。
      
   3. inline-block
      1. 内联块状元素（inline-block）就是同时具备内联元素、块状元素的特点。
         1. 和其他元素都在一行上；
         2. 元素的高度、宽度、行高以及顶和底边距都可设置。

3. 伪类和伪元素定义与区别
    1. 伪类用于在页面中的元素处于某个状态时，为其添加指定的样式。
    2. 伪元素会创建一个抽象的伪元素，这个元素不是DOM中的真实元素，但是会存在于最终的渲染树中，我们可以为其添加样式。
    3. 最常规的区分伪类和伪元素的方法是：实现伪类的效果可以通过添加类来实现，但是想要实现伪元素的等价效果只能创建实际的DOM节点。
    4. 伪类使用单冒号 “:” ; 伪元素使用双冒号 “::”

## **Question Encountered**

> _Note: check after resolved by yourself or during discussion_

- [ ] Display inline doest not have effect on any tag inside?
- [ ] Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效?
- [ ] What happens if a browser encounters CSS it doesn't understand?
- [ ] what does root mean in rem? can we rebind rem?
- [ ] display和visibility区别：
  > answer: 
  > - visibility:hidden可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。
  > - display:none可以隐藏某个元素，且隐藏的元素不会占用任何空间。
- [ ] Display inline doest have effect on any tag inside?
- [x] Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效? - 经测试，是的

## **Discussion**

- [ ] Is there css tree? 
- [ ] Which happened first? Parse CSS or render DOM tree 
- [ ] Is margin included in width calculation for Box model? -> no
- [ ] What are included in width/height calculation 
- [ ] How to move multiple blocks into a line? -> float blocks, add display:flex in parent element.
- [ ] Can we set margin for flex child elements? -> yes
- [ ] Are block/inline added for flex child working? ->all children elements will be block, how they positioned inside a flex box depends how flex displays children 
- [ ] Where to use clear, what does clear do?(question raised for Goal: how to clear only left flow?)
- [ ] Float and normal flow
- [ ] Is clear float only affecting immediate neighbor, or n-th neighbors?
- [ ] Use scenario of rem? -> for example: use with media to have different style for different screenSize, etc..
- [ ] Box model（再看一些）：border-box， content-box只算到各自（border，content）的的为止。
- [ ] position添加z-index等属性内容。 

## **Exercises** ( Optional )
