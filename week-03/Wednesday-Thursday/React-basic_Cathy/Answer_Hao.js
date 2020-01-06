//1.why use React?
em, magic

//2.请在_______处填上适合的生命周期函数名。
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
    // if onClick not triggered, count equals 3

//4.写出执行以后的结果：
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

//5.为什么虚拟dom会提高性能? \
  // it will not update all state changes to real DOM immediately, but locate changes and find optimal way to update DOM, 
  // batch update

//6.diff运作原理
https://reactjs.org/docs/reconciliation.html

//7.Router和Route区别
  // Router contain Route

//8.useState, useEffect的作用
  // are both hooks, used in stateless functional component as state and lifecycle methods

//9.以下两个函数是否正确：（F）（F）


function Switch({ isSwitchEnabled }) {
  if (isSwitchEnabled) {
    // Bad
    const [on, setOn] = useState(false);
  }
  // ...
}


function Switch() {
  let on = false;
  let setOn = () => {};

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

