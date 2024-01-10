
import React, { Component } from 'react'
import myContext from './MyContext'

export default class ClassComponent extends Component {

    static contextType = myContext;
  render() {
    const {message,name} = this.context;
    return (
      <>
        <br/><h3>I am in <span style={{color:'red'}}>Class component</span> by Context: {message}</h3>
        <br/><h3>Name:{name}</h3>
      </>
    )
  }
}
