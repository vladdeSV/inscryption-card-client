
import React from 'react';

export { SlideModal };

type Props = {
  options: string[]
}
type State = {
  selectedIndex: number
}

class SlideModal extends React.Component<Props, State> {
  // constuctor
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    return (
      <>
        <style>
          {`.generator>article { transform: translate(${-this.state.selectedIndex * 100}%); }`}
        </style>
        <nav className='foo'>
          {this.props.options.map((option, index) => (
            <button className={(this.state.selectedIndex === index ? 'selected' : '')} key={index} onClick={() => this.setState({ selectedIndex: index })}>{option}</button>
          ))}
        </nav>
        <main className='generator'>
          {this.props.children}
        </main>
      </>
    )
  }
}
