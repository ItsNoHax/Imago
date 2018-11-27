import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/actions';
import commonStyles from '../styles/common';
import EventsList from '../components/EventsList';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    this.props.fetchEvents('Amsterdam');
  }

  render() {
    const { events } = this.props;
    return (
      <SafeAreaView style={commonStyles.flexContainer}>
        <EventsList
          data={events}
        />
      </SafeAreaView>
    );
  }

}

const mapStateToProps = state => ({
  events: state.events.events,
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (location) => {
    dispatch(fetchEvents(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
