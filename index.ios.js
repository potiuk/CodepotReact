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
});

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
