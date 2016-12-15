import React from 'react';

const Link = (props) => {
  const {href, blank, children} = props;
  const target = blank ? '_blank' : '_self';

  return (
    <a src={href} target={target}>{children}</a>
  );
};

Link.propTypes = {
  href: React.PropTypes.string.isRequired,
  blank: React.PropTypes.bool,
  children: React.PropTypes.string
};

export default Link;
