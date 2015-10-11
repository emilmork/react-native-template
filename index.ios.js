var React = require('react-native');
var {
  View,
  Text
} = React;

var App = React.createClass({
   render(){
     return <View style={{flex: 1}}>
         <Text style={{alignSelf: 'center'}}>Hello</Text>
      </View>
   }

});

React.AppRegistry.registerComponent('App', () => App)