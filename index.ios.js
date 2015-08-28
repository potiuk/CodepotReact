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
  ListView
} = React;

//TODO(TASK11): separate out ShowList button to ShowListButton.js file
//TODO(TASK11): require it here
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
          <Text style={styles.button}>Click me!</Text>
        </TouchableOpacity>
        <Image key="aaaa" source={require('image!codepot')} style={styles.image}/>
      </View>
    )
  },
  getShowListButton: function() {
    if (this.state.workshops) {
      return (
        <TouchableOpacity onPress={this.onShowListButtonPressed}>
          <Text style={styles.button}>Show list!</Text>
        </TouchableOpacity>
      )
    } else {
      return <View></View>
    }
  },
  // TODO(TASK11): getShowListButton should be turned into render of the new ShowListButton component
  onShowListButtonPressed: function() {
    console.log("Showing list");
    LayoutAnimation.configureNext(CustomAnimationPresets.myAnimation);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState(
      {dataSource: ds.cloneWithRows(this.state.workshops)}
    );
  },
  renderClicked: function() {
    //TODO(TASK11): instead of conditional, use ShowListButton component
    return (
      <View style={ [styles.container, styles.background] }>
        <Image key="aaaa" source={require('image!codepot')} style={styles.image}/>
        <Text style={styles.text}>{this.state.workshops ? `Fetched ${this.state.workshops.length} workshops!` : "Fetching"}</Text>
        { this.getShowListButton()}
      </View>
    );
  },
  renderList() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        initialListSize={30}
        renderRow={(workshop) => <Text>{workshop.title}</Text>}/>
    );
  },

  render: function() {
    if (this.state.dataSource) {
        return this.renderList();
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
