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
  // TODO(TASK4): configure IntelliJ/WebStorm (optional but highly recommended)
  // TODO(TASK4): add initial state to the component ( {initialState: true})
  // TODO(TASK4): log to console when the component is about to be mounted and after it's mounted
  // TODO(TASK4): show the state content in the console [string comprehension and object's log]
  // TODO(TASK4): Show when rendering is done in console
  // TODO(TASK4): set some breakpoints in those methods and observe the data
  // TODO(TASK4): modify some data on-the fly
  // TODO(TASK4): map workspace in Chrome debugger
  // TODO(TASK4): enable live reload and modify some of the code in the debugger
  // TODO(TASK4): look at react view hierarchy (Chrome react extension)
  // TODO(TASK4): look at XCode's view hierarchy
  // TODO(TASK4): checkout react-native and run UIExplorer
  render: function() {
    return (
      <View style={ [styles.container, styles.background] }>
        <Image source={require('image!codepot')} style={styles.image}/>
        <Image
          source={{uri: 'https://www.dropbox.com/s/2pd4vb1147zupwq/codepot_gray.png?dl=1'}}
          defaultSource={require('image!codepot')}
          style={styles.image}/>
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
  },
  background: {
    backgroundColor: '#FFFFFF',
  }
});

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
