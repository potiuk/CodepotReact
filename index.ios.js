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
  Image,
  TouchableHighlight,
  TouchableOpacity
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
  onButtonPressed: function() {
    console.log("Button pressed")
  },
  render: function() {
    return (
      <View style={ [styles.container, styles.background] }>
        <Image source={require('image!codepot')} style={styles.image}/>
        <TouchableOpacity onPress={this.onButtonPressed}>
          <Text style={styles.button}>Click me!</Text>
        </TouchableOpacity>
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
  },
  button: {
    margin: 10,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth: 1,
  },
});

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
