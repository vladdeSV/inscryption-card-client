import React from 'react'

class MenuSection extends React.Component<{ title: string, open?: boolean }> {

  render() {
    return (
      <details className='menu dropdown' open={this.props.open}>
        <summary className='title'>{this.props.title}</summary>
        {this.props.children}
      </details>
    )
  }
}
export default MenuSection
