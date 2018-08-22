import React from 'react'
export default function asyncComponent (importComponent) {
  class AsyncComponent extends React.Component {
    constructor () {
      super()

      this.state = {
        component: null
      }
    }

    componentDidMount () {
      importComponent().then(component => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
    }

    render () {
      const Component = this.state.component
      return Component ? <Component {...this.props} /> : null
    }
  }
  return AsyncComponent
}
