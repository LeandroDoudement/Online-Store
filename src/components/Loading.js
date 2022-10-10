import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <i className="fa fa-cog fa-spin fa-5x fa-fw" />
        <span className="loading">Carregando...</span>
      </div>
    );
  }
}

export default Loading;
