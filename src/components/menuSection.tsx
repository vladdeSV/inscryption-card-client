import React from 'react'
import { filterClassNames } from '../helpers'
import InfoCircle from './infoCircle'

class MenuSection extends React.Component<{ title: string | JSX.Element, category?: string, open?: boolean, help?: string, error?: boolean }> {
  render() {
    return (
      <section className={filterClassNames(['menu', this.props.category, (this.props.error ? 'error' : undefined)])}>
        <p className='title'>{this.props.title}{this.props.help ? <InfoCircle text={this.props.help} /> : undefined}</p>
        {this.props.children}
      </section>
    )
  }
}
export default MenuSection
