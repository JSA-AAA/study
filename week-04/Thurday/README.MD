# **Browser & JS performance**

## **Required Topics**

> \*Note: important topics are in **bold\***

- browser render flow
  - reflow
  - repaint
  - [Suggest Reading material](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
  - [阮一峰解释](https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)
- Js performance optimization（常用的优化策略和方法）
- DocumentFragment
- 事件委托(event delegation)
  - localStorage
  - sessionStorage
- 垃圾回收机制(GC)
  - memory leak

> **Suggested study order**:
>
> - Browser render flow
> - DocumentFragment
> - 事件委托(event delegation)
> - Js performance optimization（常用的优化策略和方法）
> - 垃圾回收机制(GC)

## **Goal**

- [ ] What can cause reflow and repaint
- [ ] Relationship between reflow and repaint
- [ ] What is DocumentFragment
- [ ] What is event delegation
- [ ] Base on above, list some performance optimization way
- [ ] what is memory leak
- [ ] how JavaScript does garbage collection(GC)

## **Question need to solve**

1. 可以用自己的语言解释reflow/repaint。 如果可以解释浏览器渲染的流程则更好。
2. 可以用自己的语言解释JS的GC流程
3. 用documentFragment有什么好处？
4. 用事件委托有什么好处？如何实现？举个简单例子
5. 为什么建议把css引用放在head，而script标签放在body底部？
6. 除了减少重绘重排，还有什么性能优化方法？（如首屏加载性能）
7. 有什么属性只要访问就会造成重绘或重排？ 
8. 实现一个会造成内存泄漏的例子，并解释原因
9. What will cause memory leak

## **Key Concepts**

- reflow
- repaint
- DocumentFragment
- event delegation
- JS memory leak
- 垃圾回收机制(GC)

## **Materials / Study Note**

- [Browser render flow](https://juejin.im/post/5a8e242c5188257a6b060000)
- [DocumentFragment文档](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment)
- [Why documentFragment can improve performance](https://blog.csdn.net/aitangyong/article/details/50351400)
- [Document Fragment使用方法](https://blog.csdn.net/Allenyhy/article/details/82903121)
- [MDN: DocumentFragement Usage & Example](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment#Usage_notes)
- [Basic event delegation(Can skip jquery part)](https://zhuanlan.zhihu.com/p/26536815)
- [Event Delegation example](https://javascript.info/event-delegation#delegation-example-actions-in-markup)
  - can also try the [tasks](https://javascript.info/event-delegation#tasks) provided in the blog

- [JS Memory Leak and how to avoid](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)

- 内存泄漏的识别方法
  - 如果连续五次垃圾回收之后,内存占用一次比一次大,就有内存泄漏.这就要求实时查看内存占用.
- [GC 详解](https://juejin.im/post/5b684f30f265da0f9f4e87cf)
- WeakSet 和 WeakMap 在GC中的应用
  - 最好能有一种方法,在新建引用的时候就声明,哪些引用必须手动清除,哪些引用可以忽略不计,当其他引用消失以后,垃圾回收机制就可以释放内存.这样就能大大减轻程序员的负担,你只要清除主要引用就可以了.ES6 考虑到了这一点,推出了两种新的数据结构:WeakSet和 WeakMap.它们对于值的引用都是不计入垃圾回收机制的,表示这是弱引用.
- [JS性能优化的一些建议](https://www.jianshu.com/p/903f081176bf)

## **Question Encountered**

> _Note: check after resolved by yourself or during discussion_

- [ ] 什么是垃圾?
  - answer: 一般来说没有被引用的对象就是垃圾,就是要被清除,有个例外如果几个对象引用形成一个环,互相引用,但根访问不到它们,这几个对象也是垃圾,也要被清除.

- [ ] 什么是内存泄漏?
  - answer: 程序的运行需要内存,只要程序提出要求,操作系统或者运行是就必须供给内存.对于持续运行的服务进程,必须及时释放内存,否则,内存占用越来越高,轻则影响系统性能,重则导致进程崩溃.不再用到的内存,没有及时释放,就叫做内存泄漏.
- [ ] Can we explicitly or programmatically trigger garbage collection in JavaScript?
- [ ] CSS 和内部JS script放置问题:
  - answer: 内部的js也叫本页面的JS脚本,内部的js一般放到body内,这样做的目的有很多,不阻塞页面的加载(事实上js会被缓存).可以直接在js里操作dom,这时候dom是准备好的,即保证js运行时dom是存在的.有的人建议的方式是放在页面底部，监听window.onload 或 readystate 来触发js.head 内的 JavaScript 需要执行结束才开始渲染 body,所以尽量不要将 JS 文件放在 head 内.可以选择在 document 完成时,或者特定区块后引入和执行 JavaScript.

- [ ] 改变元素内部文字font size会重排吗?
- [ ] 如果放在head里JS script 要给一个元素添加监听器, 可能存在元素还没有加载出来，进而导致监听器添加失败吗？

## **Discussion**

- reflow/repaint in our language:
  - reflow: 重新排列box在页面中的位置,如element顺序变动,box集合变化等.会导致重排.
  - repaint：重新绘制element,但不会更改位置.
  - 重排一定会导致重绘,但是重绘不一定导致重排.
- JS GC process in our language:
  - 有两种算法。mark & sweep, references-counts. 
- 用documentFragment有什么好处？
  - 压缩多次dom操作为一次。减少重排重绘次数。
- 用事件委托有什么好处？如何实现？举个简单例子
  - 减少代码量
  - 可以通过父元素定义子元素事件监听器
- 为什么建议把css引用放在head，而script标签放在body底部？
- 除了减少重绘重排，还有什么性能优化方法？（如首屏加载性能）
  - 使用DocumentFragment
  - 尽量分离对dom的读写操作
- 有什么属性只要访问就会造成重绘或重排？
  - [offset等]()
- 实现一个会造成内存泄漏的例子，并解释原因
- What will cause memory leak

## **Exercises** ( Optional )
