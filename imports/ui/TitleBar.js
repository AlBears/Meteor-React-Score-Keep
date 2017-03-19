import React from 'react';

class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2>{this.props.subtitle}</h2>;
    }
  }
  render() {
    return (
    <div>
      <h1>{this.props.title}</h1>
      {this.renderSubtitle()}
    </div>
  );
  }
}

export default TitleBar;

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

TitleBar.defaultProps = {
  //title: 'Default title'
}
