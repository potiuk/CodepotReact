'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  } = React;

var ReactPropTypes = require('ReactPropTypes');
//TODO(TASK12): require CommonStyles and use it later where button style is used

var ShowListButton = React.createClass({
  propTypes: {
    isVisible: ReactPropTypes.bool.isRequired,
    clicked: ReactPropTypes.func.isRequired
  },
  render: function() {
    if (this.props.isVisible) {
      return (
        <TouchableOpacity onPress={this.props.clicked}>
          <Text style={styles.button}>Show list!</Text>
        </TouchableOpacity>
      )
    } else {
      return <View></View>
    }
  }
});
// TODO(TASK12): remove style reference from here (and remove it from dependencies above!)


var styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth: 1,
  },
});

module.exports = ShowListButton;