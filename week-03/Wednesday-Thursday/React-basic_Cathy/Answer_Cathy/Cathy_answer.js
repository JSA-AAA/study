// 1.虚拟 DOM；
// 组件化；
// 声明式代码；
// 单向数据流；
// 纯粹的 JavaScript 语法；
// 2.
class Hello extends React.Component {
 
  constructor(props) {
      super(props);
      this.state = {opacity: 1.0};
  }
 
  componentDidMount() {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  }
 
  render () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}
 
ReactDOM.render(
  <Hello name="world"/>,
  document.body
);

//3. 3
// willmount中的setState会合并成一次执行，count只会保留最后一次的设置，前面的放弃，所以willmount之后是1，并不是3；并且在render之前执行，不会引起新的render
// render之后执行didMount，setState做同样的处理，这是count是2，并且引起新的render
// 点击按钮，setState做同样处理，count是3，引起新的render.

//4. 2
//每次setState都会引发新的render，需要深入了解的可以查查setState的原理，简单理解是定时器中的setState没走react的事物机制，执行时批量更新没被设置true，所以每次都直接render了。

//5.虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。
// 具体实现步骤如下：
// 1用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
// 2当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
// 3把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。

//
//6.把树形结构按照层级分解，只比较同级元素。
// 给列表结构的每个单元添加唯一的key属性，方便比较。
// React 只会匹配相同 class 的 component（这里面的class指的是组件的名字）
// 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
// 选择性子树渲染。开发人员可以重写shouldComponentUpdate提高diff的性能。

//7.react-router主要是用于Url跳转，其核心概念即为Router和Route。
// Router相当于一个容器，用于包裹Route，一个Route即为一个Url。Route里面会包裹一个组件。当在浏览器里输入Url时，就会跳转到相应的Route并显示相关组件。

//8.调用useState() Hook 来启用函数组件中的状态。
// useState(initialValue)的第一个参数initialValue是状态的初始值。
// [state, setState] = useState(initialValue)返回一个包含2个元素的数组:状态值和状态更新函数。
// 使用新值调用状态更新器函数setState(newState)更新状态。或者，可以使用一个回调setState(prev => next)来调用状态更新器，该回调将返回基于先前状态的新状态。
// 调用状态更新器后，React 确保重新渲染组件，以使新状态变为当前状态。

// 函数组件中没有生命周期，那么可以使用 useEffect 来替代。如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
// 默认情况下，它在第一次渲染之后和每次更新之后都会执行。

// 9. x x
// 在条件中调用useState()是不正确的：
// 在嵌套函数中调用useState()也是不对的