'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation
  } = React;

var ReactPropTypes = require('ReactPropTypes');
var ShowListButton = require ("./ShowListButton");
var CommonStyles = require("./common/CommonStyles");

var InitialScreen = React.createClass({
  propTypes: {
    fetchData: ReactPropTypes.func.isRequired,
    workshops: ReactPropTypes.workshops,
    onShowListButtonPressed : ReactPropTypes.func.isRequired
  },

  getInitialState() {
    return { initialState: true}
  },
  onButtonPressed: function() {
    console.log("Fetching data");
    LayoutAnimation.configureNext(CustomAnimationPresets.myAnimation);
    this.setState({initialState: false})
    this.props.fetchData();
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
  renderClicked: function() {
    return (
      <View style={ [styles.container, styles.background] }>
        <Image key="aaaa" source={require('image!codepot')} style={styles.image}/>
        <Text style={styles.text}>{this.props.workshops ? `Fetched ${this.props.workshops.length} workshops!` : "Fetching"}</Text>
        <ShowListButton isVisible={this.props.workshops ? true : false}
                        clicked={this.props.onShowListButtonPressed}/>
      </View>
    );
  },
  render: function() {
    if(this.state.initialState) {
      return this.renderInitial();
    } else {
      return this.renderClicked();
    };
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

module.exports = InitialScreen;