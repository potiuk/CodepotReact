'use strict';

var React = require('react-native');
var {
  ListView,
  Text
  } = React;

var ReactPropTypes = require('ReactPropTypes');

var WorkshopList = React.createClass({
  propTypes: {
    workshops: ReactPropTypes.array.isRequired
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this.props.workshops)
    };
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        initialListSize={30}
        renderRow={(workshop) => <Text>{workshop.title}</Text>}/>
    );
  }
});

module.exports = WorkshopList;