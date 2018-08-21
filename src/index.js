import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

class Index extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string,
  }

  constructor() {
    super()
    this.state = {themeColor: 'red'}
  }

  getChildContext() {
    return {themeColor: this.state.themeColor}
  }

  componentWillMount() {
    this.setState({themeColor: 'green'})
  }

  componentDidMount() {
    this.setState({themeColor: 'pink'})
  }

  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h2>This is header</h2>
        <Title/>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <h2>This is main</h2>
        <Content/>
      </div>
    )
  }
}

class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
  }

  render() {
    return (
      <h1 style={{color: this.context.themeColor}}>React.js 小书标题</h1>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h2>React.js 小书内容</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root'),
)
