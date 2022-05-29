import React from "react";

type Button = {
  label: string,
  onClick: () => Promise<void>,
  enabled?: boolean,
}

type Props = {
  fetchImage: () => Promise<string | undefined>,
  buttons?: Button[]
}
type State = {
  data: string | undefined,
}

export class DownloadImagePanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: undefined,
    }
  }

  render() {
    const image = this.state.data ? <img src={this.state.data} alt='' /> : null;
    const buttons = this.props.buttons;
    return (
      <section className="card-display">
        {image}
        <div className="button-menu">
          <button className='generate' onClick={async () => {
            const data = await this.props.fetchImage()
            this.setState({ data })
          }}>Generate <span className='generate'>+</span></button>
          {buttons?.map(button => <button key={button.label.toLocaleLowerCase()} disabled={!(button.enabled ?? true)} onClick={button.onClick}>{button.label}</button>)}
        </div>
      </section>
    );
  }
}
