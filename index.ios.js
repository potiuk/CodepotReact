/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  LayoutAnimation,
} = React;

var WorkshopList = require("./WorkshopList");
var InitialScreen = require("./InitialScreen");

var CodepotReact = React.createClass({
  getInitialState: function () {
    return {listShown: false}
  },
  componentWillMount: function() {
    console.log(`I will mount! : ${JSON.stringify(this.state)}`)
    LayoutAnimation.spring();
  },
  componentDidMount: function() {
    console.log("I am mounted!", this.state)
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
  onShowListButtonPressed: function() {
    console.log("Showing list");
    LayoutAnimation.configureNext(CustomAnimationPresets.myAnimation);
    this.setState(
      {listShown: true}
    );
  },
  render: function() {
    if (this.state.listShown) {
      return <WorkshopList workshops={this.state.workshops}/>;
    } else {
      return <InitialScreen fetchData={this.fetchData}
                            onShowListButtonPressed={this.onShowListButtonPressed}
                            workshops={this.state.workshops}/>
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


AppRegistry.registerComponent('CodepotReact', () => CodepotReact);
