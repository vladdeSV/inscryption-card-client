import React from 'react'
import InfoCircle from './infoCircle'

class MenuSection extends React.Component<{ title: string, open?: boolean, help?: string }> {
  render() {
    return (
      <section className='menu'>
        <p className='title'>{this.props.title}{this.props.help ? <InfoCircle text={this.props.help} /> : undefined}</p>
        {this.props.children}
      </section>
    )
  }
}
export default MenuSection
