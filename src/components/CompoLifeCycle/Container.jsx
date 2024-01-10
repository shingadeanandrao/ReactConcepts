import React from "react";

class Container extends React.Component {
    constructor(props) {
        console.log('Inside Constructor')
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      console.log('Inside delHeader')
      this.setState({show: false});
    }
    render() {
      console.log('Inside render')
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
        console.log('Inside componentWillUnmount')
      alert("The component named Header is about to be unmounted.");
    }
    render() {
        console.log('Inside render in child')
      return (
        <h1>Hello World!</h1>
      );
    }
  }

  export default Container;