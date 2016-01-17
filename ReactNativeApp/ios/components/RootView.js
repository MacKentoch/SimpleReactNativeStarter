'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


const ROOT_VIEW_TITLE = 'Root View';

class RootView extends Component {
  
  goNextView() {
    console.log('key pressed');
  }

  render() {
    console.info('render root');

    return (
      <View style={styles.container}>
        <TouchableHighlight 
          style={styles.button}
          underlayColor="#bbbbbb"
          onPress={() => this.goNextView()} >
          <Text style={styles.buttonText} >
            There will be action here
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex            : 1,
    flexDirection   : 'row',
    alignItems      : 'center', 
    justifyContent  : 'center',
    backgroundColor : '#E4F1FE',
    padding         : 10
  },
  button: {
    height          : 36,
    flex            : 1,
    flexDirection   : 'row',
    backgroundColor : '#E74C3C',
    justifyContent  :'center'
  },
  buttonText: {
    fontSize  : 18,
    color     : '#fff',
    marginTop : 6    
  }  
});


export default RootView;

export { ROOT_VIEW_TITLE };
