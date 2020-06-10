import { StyleSheet, View, Text, Dimensions } from 'react-native';

import { Header } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import ChatBot from 'react-simple-chatbot';

import { Icon } from 'react-native-vector-icons/FontAwesome';
import { Colors, Gradients } from './res/resources.js';
import { MainActivity } from "../MainActivity.js";

class MainMind extends MainActivity {
    constructor() {
        super()
        this.state = {
            DailyJournal: {}, /* Map */
            PositiveJournal: {}, /* Map */
            ColoringPages: {}, /* Map (Preloaded from js file)*/
        }
    }
    render() {
        return (
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
        )
    }
}

export class MainMind{};