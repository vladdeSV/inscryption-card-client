
import React from 'react';

export { SlideModal };

type Props = {
  options: string[][]
}
type State = {
  selectedIndex: number
}

class SlideModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    let counter = 0
    return (
      <>
        <style>
          {`.generator>article { transform: translate(${-this.state.selectedIndex * 100}%); }`}
          {this.state.selectedIndex !== 0 ? `.generator { border-radius: 2em; transition-delay: 0s }` : undefined}
        </style>

        <main className='generator'>
          {this.props.children}
        </main>

        <nav className='foo'>
          {this.props.options.map((options) => (
            <div key={options.join('-')} className="nav-bg">
              {options.map((option) => {
                const index = counter
                counter++

                return <button className={(this.state.selectedIndex === index ? 'selected' : '')} key={index} onClick={() => this.setState({ selectedIndex: index })}>{option}</button>
              })}
            </div>
          ))}
        </nav>
      </>
    )
  }
}
