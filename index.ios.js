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
  Image
} = React;

var CodepotReact = React.createClass({
  render: function() {
    return (
      // TODO(TASK3): add another animated gif image (via URL). Remember about defaults
      <View style={styles.container}>
        <Image source={require('image!codepot')} style={styles.image}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: Image.resizeMode.contain
  }
  // TODO(TASK3): maybe we can do something about the background ? Ideas ?
});

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
