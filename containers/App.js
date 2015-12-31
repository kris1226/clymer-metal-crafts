import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router'

class App extends Component {
  constructor(props) {
    super(props);
  }
   handleChange(nextClient) {
     this.props.dispatch(selectClient(nextClient));
   }

   handleRefreshClick(e) {
     e.preventDefault();
     const { dispatch, selectedClient } = this.props;
     dispatch(invalidateClient(selectedClient));
     dispatch(fetchClientsIfNeeded());
   }

  render() {
    const { children, items } = this.props;
    debugger;
    return(
      <div>
        <h1>Rendering</h1>
      </div>
    );
  }
}

App.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    message: 'Rendering'
  };
}

export default connect(mapStateToProps, {
  pushState
})(App);
