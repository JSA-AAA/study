//1.why use React?
//The main purpose of React is to be fast, scalable, and simple.

//2.请在_______处填上适合的生命周期函数名。
class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.state = { opacity: 1.0 };
  }

  _____componentDidMount_______() {
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

  render() {
    return (
      <div style={{ opacity: this.state.opacity }}>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <Hello name="world" />,
  document.body
);

//3. 写出代码执行之后count的数值：

import React from 'react';

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0

    };
  }
  componentWillMount() {
    let me = this;
    me.setState({
      count: me.state.count + 2
    });
    me.setState({
      count: me.state.count + 1
    });
  }
  componentDidMount() {
    let me = this;
    me.setState({
      count: me.state.count + 2
    });
    me.setState({
      count: me.state.count + 1
    });
  }

  onClick() {
    let me = this;
    me.setState({
      count: me.state.count + 1
    });
    me.setState({
      count: me.state.count + 1
    });
  }

  render() {
    console.log(this.state.count);
    return (
      <div>
        <h1>{this.state.count}</h1>
        <input type="button" value="点击我" onClick={this.onClick.bind(this)} /><br />
        <br />
      </div>
    )
  }
//Did we suppose click the button, if not then we only can say 2

//4.写出执行以后的结果： 2
export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0

    };
  }
  componentWillMount() {
    let me = this;
    setTimeout(() => {
      me.setState({
        count: me.state.count + 1
      });
      me.setState({
        count: me.state.count + 1
      });
    }, 0);
  }
  render() {
    console.log(this.state.count);
    return (
      <div>
        <h1>{this.state.count}</h1>
        <input type="button" value="点击我" onClick={this.onClick.bind(this)} /><br />
        <br />
      </div>
    )
  }
}

//5.为什么虚拟dom会提高性能?
// 将页面变化先缓存在虚拟dom然后与真实dom比较，最后只渲染变化部分，而非全局重新渲染

//6.diff运作原理
// Tree Diff 层级的比较

// Component Diff 组件比较
// 同类型组件（即：两节点是同一个组件类的两个不同实例）
// 若组件相同，则继续按照层级比较其 Virtual DOM 的结构。
// 若组件 A 转变为组件 B，但是组件 A 和组件 B 渲染出来的 Virtual DOM 没有任何变化(即，子节点的顺序、状态state等，都未发生变化)，如果开发者能够提前知道这一点，那么可以省下大量 Diff 的时间。React 中，允许用户通过shouldComponentUpdate()来判断该组件是否需要进行diff算法分析。

// 不同类型组件
// 直接判断为 dirty component，继而替换整个组件的所有内容。

// Element Diff 元素的比较（同一层级同一父元素下的节点集合，进行比较）
// 当 DOM 处于同一层级时，Diff 提供三个节点操作，即 删除（REMOVE_NODE）、插入（INSERT_MARKUP）、移动（MOVE_EXISTING）。

//7.Router和Route区别
// Router包裹route,route用来定向走向

//8.useState, useEffect的作用
// function component中state的替代者，管理component的状态变化
// useEffect 当component需要在某个阶段实现render，useeffect可以做到。
// 生命周期的替代者

//9.以下两个函数是否正确：（ x）（ x）

//setState并不会立刻改变状态值，无法保证对setState的调用进行同步操作
function Switch({ isSwitchEnabled }) {
  if (isSwitchEnabled) {
    // Bad
    const [on, setOn] = useState(false);
  }
  // ...
}


//same reason as above, better use function as parameter
function Switch() {
  let on = false;
  let setOn = () => { };

  function enableSwitch() {
    // Bad
    [on, setOn] = useState(false);
  }

  return (
    <button onClick={enableSwitch}>
      Enable light switch state
    </button>
  );
}
