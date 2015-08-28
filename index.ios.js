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
  TouchableOpacity,
  LayoutAnimation
} = React;

var CodepotReact = React.createClass({
  getInitialState() {
    return { initialState: true}
  },
  componentWillMount: function() {
    console.log(`I will mount! : ${JSON.stringify(this.state)}`)
    LayoutAnimation.spring();
  },
  componentDidMount: function() {
    console.log("I am mounted!", this.state)
  },
  onButtonPressed: function() {
    console.log("Fetching data");
    LayoutAnimation.configureNext(CustomAnimationPresets.myAnimation);
    this.setState({initialState: false})
    this.fetchData();
  },
  fetchData: function() {
    fetch('https://backend.codepot.pl/api/workshops/')
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Received workshop data: Number of workshops = " + responseData.workshops.length);
        // TODO(TASK10): add animation on receiving workshops
        this.setState({
          workshops: responseData.workshops,
        });
        console.log("Workshops", responseData.workshops)
      })
      .done();
  },
  renderInitial: function() {
    return(
      <View style={ [styles.container, styles.background] }>
        <Image source={require('image!codepot')} style={styles.image}/>
        <TouchableOpacity onPress={this.onButtonPressed}>
          <Text style={styles.button}>Click me!</Text>
        </TouchableOpacity>
        <Image key="aaaa" source={require('image!codepot')} style={styles.image}/>
      </View>
    )
  },
  // TODO(TASK10): add method to return "Show List" button conditionally
  // TODO(TASK10): add method to be called when "Show List" button is pressed
  renderClicked: function() {
    // TODO(TASK10): add conditional showing of the "Show List" button
    return (
      <View style={ [styles.container, styles.background] }>
        <Image key="aaaa" source={require('image!codepot')} style={styles.image}/>
        <Text style={styles.text}>{this.state.workshops ? `Fetched ${this.state.workshops.length} workshops!` : "Fetching"}</Text>
      </View>
    );
  },
  // TODO(TASK10): add method that renders list
  render: function() {
    if(this.state.initialState) {
      return this.renderInitial();
    // TODO(TASK10): add conditional to show list when data source appears in state
    } else {
      return this.renderClicked();
    }
  }
});

var CustomAnimationPresets = {
  myAnimation: {
    duration: 500,
    create: {
      type: 'easeInEaseOut',
      property: 'scaleXY',
    },
    update: {
      type: 'easeInEaseOut',
    },
  },
};


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
  text: {
    margin: 10,
    paddingLeft: 30,
    paddingRight: 30,
  }
});

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
