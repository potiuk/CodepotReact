/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

// TODO(TASK2): create .xcassets folder and add images to it (XCode)
var CodepotReact = React.createClass({
  render: function() {
    return (
      // TODO(TASK2): remove the default texts - we do not need them any more
      // TODO(TASK2): Add image JSX tag referring to the static image
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  // TODO(TASK2): add style for the image and remove unused ones
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//TODO(TASK2): Try to figure out what I have not told to do ;)

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
