import React, { Component, PropTypes } from 'react';
import { selectClient, invalidateClient, fetchClientsIfNeeded } from '../actions';
import { connect } from 'react-redux';
import Picker from '../components/Picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedClient } = this.props;
    debugger;
    dispatch(fetchClientsIfNeeded());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedClient !== this.props.selectedClient) {
      const { dispatch } = nextProps;
      dispatch(fetchClientsIfNeeded());
    }
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
    const { selectedClient, smartAgent, isFetching, lastUpdated } = this.props;
    const { items } = smartAgent;
    const sum = items.reduce((all, items, index) => {
      all += item.login;
      return all;
    })
    console.log(sum);
    return(
      <div>
        <Picker value={selectedClient}
                onChange={this.handleChange}
                options={logins}
        />
      </div>
    );
  }
}

App.propTypes = {
  selectedClient: PropTypes.string.isRequired,
  smartAgent: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedClient, smartAgent } = state;
  const {
    isFetching,
    lastUpdated,
    items
  } = smartAgent[selectedClient] || {
    isFetching: true,
    items: []
  }
    debugger;
  return {
    selectedClient,
    smartAgent,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
