class MyComponent extends React.Component {
    constructor(props) {
        console.log('This is the constructor running', props)
        super(props)
        this.state = {
            value: 0,
        }
        // this.handleClick = thishandleClick.bind(this)
    }
    componentDidMount() {
      console.log('My component has landed!')
    }
    componentDidUpdate() {
      console.log('This component has changes in props or state')
    }
    componentWillUnmount() {
      console.log('Component is being removed from the DOM')
    }
    handleClick = () => {
      console.log('HI IM being clicked!')
      this.setState({
          value: this.state.value + 1,
      })
    }
    render () {
      console.log('This is the render being called', this.props)
      return <div>
        Hello {this.props.name}
        <h1>{this.state.value}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    }
  }
  
  ReactDOM.render(<MyComponent name="Erika"/>, document.getElementById('root'))