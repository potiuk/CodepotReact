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
  LayoutAnimation,
} = React;

var CommonStyles = require("./common/CommonStyles");
var ShowListButton = require ("./ShowListButton");
var WorkshopList = require("./WorkshopList");

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
        LayoutAnimation.configureNext(CustomAnimationPresets.myAnimation);
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
          <Text style={CommonStyles.button}>Click me!</Text>
        </TouchableOpacity>
        <Image key="aaaa" source={require('image!codepot')} style={styles.image}/>
      </View>
    )
  },
  onShowListButtonPressed: function() {
    console.log("Showing list");
    LayoutAnimation.configureNext(CustomAnimationPresets.myAnimation);
    this.setState(
      {listShown: true}
    );
  },
  renderClicked: function() {
    return (
      <View style={ [styles.container, styles.background] }>
        <Image key="aaaa" source={require('image!codepot')} style={styles.image}/>
        <Text style={styles.text}>{this.state.workshops ? `Fetched ${this.state.workshops.length} workshops!` : "Fetching"}</Text>
        <ShowListButton isVisible={this.state.workshops ? true : false}
                        clicked={this.onShowListButtonPressed}/>
      </View>
    );
  },
  render: function() {
    if (this.state.listShown) {
      return <WorkshopList workshops={this.state.workshops}/>;
    } else {
      if(this.state.initialState) {
        return this.renderInitial();
      } else {
        return this.renderClicked();
      }
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
  text: {
    margin: 10,
    paddingLeft: 30,
    paddingRight: 30,
  }
});

AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
