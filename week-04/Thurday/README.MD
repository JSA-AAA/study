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
- [ ] GC flow

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
- 垃圾回收机制(GC)

## **Materials / Study Note**

- [Browser render flow](https://juejin.im/post/5a8e242c5188257a6b060000)
- [DocumentFragment文档](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment)
- [Why documentFragment can improve performance](https://blog.csdn.net/aitangyong/article/details/50351400)
- [Basic event delegation(Can skip jquery part)](https://zhuanlan.zhihu.com/p/26536815)
- [GC 详解](https://juejin.im/post/5b684f30f265da0f9f4e87cf)

## **Question Encountered**

> _Note: check after resolved by yourself or during discussion_
 

## **Discussion**

## **Exercises** ( Optional )
