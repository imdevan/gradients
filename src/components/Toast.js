import React from 'react';
import '../styles/toast.css';

const Toast = React.createClass({
  render() {
    const {toast} = this.props;

    return (
      <div className='toast fs-normal bg-white pa2 br-pill shadow-5'
        data-show={toast}>
        {React.cloneElement({...this.props}.children)}
      </div>
    )
  }
});

export default Toast;
