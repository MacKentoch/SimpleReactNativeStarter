'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  StatusBarIOS
}                   from 'react-native';
import RootView, {
  ROOT_VIEW_TITLE
}                   from './components/RootView';


const STATUS_BAR_STYLE = 'light-content';

class ReactNativeEntryPoint extends Component {
  
  render() {

    const InitialRoute = {
      title     : ROOT_VIEW_TITLE,
      component : RootView
    };

    StatusBarIOS.setStyle('light-content', false);

    return (
     <NavigatorIOS 
      barTintColor="#1F3A93"
      tintColor="#fff"
      titleTextColor="#fff"
      translucent={true}
      style={styles.container}
      initialRoute={{
      title     : 'Root view',
      component : RootView
    }} />
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F3A93'
  }
});


export default ReactNativeEntryPoint;
