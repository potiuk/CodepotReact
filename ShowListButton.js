'use strict';

var React = require('react-native');
var {
  Text,
  TouchableOpacity,
  View,
  } = React;

var ReactPropTypes = require('ReactPropTypes');
var CommonStyles = require('./common/CommonStyles');

var ShowListButton = React.createClass({
  propTypes: {
    isVisible: ReactPropTypes.bool.isRequired,
    clicked: ReactPropTypes.func.isRequired
  },
  render: function() {
    if (this.props.isVisible) {
      return (
        <TouchableOpacity onPress={this.props.clicked}>
          <Text style={CommonStyles.button}>Show list!</Text>
        </TouchableOpacity>
      )
    } else {
      return <View></View>
    }
  }
});

module.exports = ShowListButton;