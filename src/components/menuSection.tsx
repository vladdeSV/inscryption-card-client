import React from 'react'

class MenuSection extends React.Component<{ title: string, open?: boolean }> {

  render() {
    return (
      <section className='menu'>
        <p className='title'>{this.props.title}</p>
        {this.props.children}
      </section>
    )
  }
}
export default MenuSection
