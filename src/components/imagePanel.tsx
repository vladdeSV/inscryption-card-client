import React from "react";
import { filterClassNames } from "../helpers";

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
          <MenuButton label='Generate' onClick={async () => {
            const data = await this.props.fetchImage()
            this.setState({ data })
          }} />
          {buttons?.map(button => <MenuButton label={button.label} enabled={button.enabled} key={button.label} onClick={button.onClick} />)}
        </div>
      </section>
    );
  }
}

class MenuButton extends React.Component<Button, { loading: boolean }> {
  constructor(props: Button) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  render() {
    const buttonClassNames = []

    if (this.state.loading) {
      buttonClassNames.push('fetching')
    }

    return (
      <button
        className={filterClassNames(buttonClassNames)}
        key={this.props.label.toLocaleLowerCase()}
        disabled={!(this.props.enabled ?? true) || this.state.loading}
        onClick={() => {
          this.setState({ loading: true }, async () => {
            await this.props.onClick()
            this.setState({ loading: false })
          })

        }}>{this.props.label}
      </button>
    )
  }
}
