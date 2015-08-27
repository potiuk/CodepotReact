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
  getInitialState() {
    return { initialState: true}
  },
  componentWillMount: function() {
    console.log(`I will mount! : ${JSON.stringify(this.state)}`)
  },
  componentDidMount: function() {
    console.log("I am mounted!", this.state)
  },
  // TODO(TASK5): Add function logging button press
  render: function() {
    return (
      // TODO(TASK5): add button between images (no Button? how else can we do it ?)
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
  //TODO(TASK5): Add style for the button
});

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
