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
    // TODO(TASK7): add preset animation when mounting
  },
  componentDidMount: function() {
    console.log("I am mounted!", this.state)
  },
  onButtonPressed: function() {
    console.log("Button pressed");
    // TODO(TASK7): add preset animation
    // TODO(TASK7): add custom animation
    this.setState({initialState: false})
  },
  renderInitial: function() {
    return(
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
    )
  },
  renderClicked: function() {
    return (
      <View style={ [styles.container, styles.background] }>
        <Image source={require('image!codepot')} style={styles.image}/>
        <Text style={styles.text}>Clicked!</Text>
      </View>
    );
  },
  render: function() {
    if(this.state.initialState) {
      return this.renderInitial();
    } else {
      return this.renderClicked();
    }
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
  // TODO(TASK6): add style for the text
  text: {
    margin: 10,
    paddingLeft: 30,
    paddingRight: 30,
  }
});

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
