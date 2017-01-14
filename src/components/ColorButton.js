import React from 'react';
import '../styles/toast.css';

  const ColorButton = React.createClass({
  render() {
    const {color} = this.props;
    const styleAtribute = {
      color,
      filter: `drop-shadow(4px 4px 12px ${color})`,
      cursor: 'pointer',
      overflow: 'show'
    };
    return (
      <span className='br-pill bg-white pa3' style={styleAtribute}>
        {color}
      </span>
    )
  }
});

export default ColorButton;
