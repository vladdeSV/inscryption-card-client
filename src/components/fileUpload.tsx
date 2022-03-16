import React from "react";
import { blobTo64 } from "../helpers";

type Props = {
  label: JSX.Element | string,
  onUpdate: (data64: string | undefined) => void,
  allowedTypes?: string[],
}
type State = {
  filename: undefined,
  data: undefined,
} | {
  filename: string,
  data: string,
}
export default class FileUpload extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      filename: undefined,
      data: undefined,
    }
  }

  onUpload = (fileList: FileList) => {
    const file = fileList[0]
    if (!file) {
      return
    }

    // if()
    // const type = file.type
    // const size = file.size
    const type = file.type
    if (this.props.allowedTypes && !this.props.allowedTypes.includes(type)) {
      return
    }

    const filename = file.name
    blobTo64(file).then(data => {
      this.setState({ filename, data }, () => this.props.onUpdate(data))
    })
  }

  render() {
    const close = (() => {
      const thickness = 12
      const size = 13
      return (
        <div className="close" onClick={() => { this.setState({ filename: undefined, data: undefined }, () => this.props.onUpdate(undefined)) }}>
          <svg width={size} height={size} viewBox="0 0 100 100">
            <path stroke='#eee' strokeWidth={thickness} d="M 10,10 L 90,90 M 90,10 L 10,90" />
          </svg>
        </div>
      )
    })()

    return (
      <div className="upload-wrapper">
        <span>{this.props.label}</span>
        <div className="upload-section">
          <div>
            <label className="input">
              {this.state.data ? this.state.filename : 'No file selected'}
              <input type='file' onChange={e => e.target.files && this.onUpload(e.target.files)} />
            </label>
            {this.state.data ? close : undefined}
          </div>
        </div>
      </div>
    )
  }
}
