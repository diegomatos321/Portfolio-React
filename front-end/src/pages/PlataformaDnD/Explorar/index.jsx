import React, { Component } from 'react'
import ScrollToTop from "../../../utils/scrollToTop"

export default class index extends Component {
  componentDidMount(){
    ScrollToTop();
  }

  render() {
    return (
      <main>
        <h1>Explorar</h1>
      </main>
    )
  }
}
