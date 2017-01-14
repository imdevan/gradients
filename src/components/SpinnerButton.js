import React from 'react';

const SpinnerButton = React.createClass({
  render() {
    const {deg} = this.props;
    const styleAtribute = {
      transform: `rotate(${deg})`,
      display: 'block',
      cursor: 'pointer',
      userSelect: 'none',
      overflow: 'show'
    };

    return (
      <span style={{width: '49px', display: 'inline-block'}} onClick={this.props.onClick}>
        <span className='ds-white' ref='emoji-hand' style={styleAtribute}>👉</span>
      </span>
    )
  }
});

export default SpinnerButton;
