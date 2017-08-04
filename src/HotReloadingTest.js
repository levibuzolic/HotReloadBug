import React from 'react';
import {View, Text} from 'react-native';

export default class HotReloadingTest extends React.Component {
  constructor(props) {
    super(props);

    this.manualBind = this.manualBind.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <View style={{flex: 1, backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>
          {['Manual', 'Bind'].map(this.manualBind)}
        </View>
        <View style={{flex: 1, backgroundColor: 'rgba(0, 255, 0, 0.1)'}}>
          {['Auto', 'Bind'].map(this.autoBind)}
        </View>
      </View>
    );
  }

  manualBind(string, index) {
    return (
      <View key={index} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{string}</Text>
      </View>
    );
  }

  autoBind = (string, index) => {
    return (
      <View key={index} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{string}</Text>
      </View>
    );
  }
}
