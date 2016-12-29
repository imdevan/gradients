import React, {PropTypes, Component} from 'react';
import SVGInline from 'svg-inline-react';

class SVGButton extends Component {
  render() {
    const svgSource = require('../svgs/' + this.props.icon + '.svg');
    return (
      <div>
        <SVGInline onClick={this.onClick} src={svgSource} className='App-icon' alt={this.alt} />
      </div>
    );
  }
}

SVGButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  alt: PropTypes.string
};

export default SVGButton;
