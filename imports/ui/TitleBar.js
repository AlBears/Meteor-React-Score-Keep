import React from 'react';

class TitleBar extends React.Component {
  render() {
    return (
    <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
    </div>
  );
  }
}

export default TitleBar;

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  title: 'Default title'
}
