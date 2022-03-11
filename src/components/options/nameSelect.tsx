import React from 'react';

type Props = { onValueChange: (value: string | undefined) => void }
export default class NameSelect extends React.Component<Props> {
  render() {
    return (
      <section>
        <p>name</p>
        <input type='text' onChange={e => this.props.onValueChange(e.target.value || undefined)} />
      </section>
    )
  }
}

// const Name = ({ onValueChange }: Props) => (
//   <section>
//     <p>name</p>
//     <input type='text' onChange={e => onValueChange(e.target.value || undefined)} />
//   </section>
// )

// export default Name
