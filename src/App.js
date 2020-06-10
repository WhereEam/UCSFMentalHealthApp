import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {
  Header,
  Input,
} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {
  Icon
} from 'react-native-vector-icons/FontAwesome';
import {
  Colors,
  Gradients,
} from './res/resources.js';
import { Col } from 'native-base';

const App: () => React$Node = () => {
  return (
    <>
      <Header
      containerStyle={{
        backgroundColor: Colors.white
      }}
      leftComponent={{icon: 'home', color: Colors.black, size: 30}}
      /* Need to change text to Variable */
      centerComponent={{text: 'Aurora', style: styles.CenterName}}
      /* Need to insert Actual Progress & Level*/
      rightComponent={
        <View>
          <Text style={styles.LevelBar}> Level 1</Text>
          <Progress.Bar
          style={{marginTop: 3}}
          progress={0.7} width={65} height={5} 
          borderWidth={0}
          color={Colors.levelProgressBarA}
          unfilledColor={Colors.levelProgressBarB}/> 
        </View>
      }/>
    </>
  );
};

const styles = StyleSheet.create({
  CenterName: {
    color: Colors.black,
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 'bold',
  },
  LevelBar: {
    marginTop: -5,
    color: Colors.black,
    fontFamily: 'Helvetica',
    fontSize: 11.5,
    fontWeight: 'bold',
  },
  Date: {
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.dateColor,
  },
  Bottom: {
    marginBottom:10,
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 0,
  }
});

const MessageShape = StyleSheet.create({
  MessageBox: {
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#C4C4C4',
    zIndex: 0,
  },
  MessageInput: {
    width: .8 * Dimensions.get('window').width,
    height: 30,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    zIndex: 1,
    top: -40,
    left: .05 * Dimensions.get('window').width,
  },
  MessageCircle: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent',
    borderRadius: 25/2,
    borderColor: '#5A5A5A',
    borderWidth: 2,
    zIndex: 1,
    top: -68,
    left: .9 * Dimensions.get('window').width,
  },
  MessageLine: {
    width: 12.5,
    height: 2,
    backgroundColor: '#5A5A5A',
    zIndex: 2,
    top: -81.5,
    left: .915 * Dimensions.get('window').width,
  }
});

export default App;
