import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import Image from '../components/Image';


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
    let first = items[0];

    return(
      <div>
        <Image item={first} />
      </div>
    );
  }
}

App.propTypes = {
  //selectedImage: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  //isFetching: PropTypes.bool.isRequired,
  //lastUpdated: PropTypes.number,
  //dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.images
  };
}

export default connect(mapStateToProps, {
  pushState
})(App);
