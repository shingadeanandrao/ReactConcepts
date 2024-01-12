import React, { Component } from 'react'
import Counter from './Counter'

export default class ErrorBoundries extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       error:null,
       errorInfo:null,
       hasError:false
    }
  }

  componentDidCatch(error,errorInfo,hasError){
    this.setState({
      error:error,
      errorInfo:errorInfo,
      hasError:true
    })
  }
  
  render() {
if(this.state.hasError){
  return(
    <>
    <h5> An error occured</h5>

    <details>
      {this.state.error && this.state.error.toString()}
      <br/>
      {this.state.errorInfo.componentStack}
    </details>
    </>
  )

}

    return (
      <>
        <h5>Error occured</h5>

        <Counter/>
      </>
    )
  }
}
