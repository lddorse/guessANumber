import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>
                The Game is Over!
            </TitleText>
            <View style={styles.imageContainer}>
                <Image 

                    //this is a local image
                    //source={require('../assets/success.png')}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/1200px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}> Your phone needed <Text style={styles.highlight}>{props.roundsNumber} </Text>
                    rounds to guess the number <Text style={styles.highlight}>{props.userNumber}.</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME </MainButton>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
   
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30


    },
    resultContainer:{
        marginHorizontal: 20,
        marginVertical: 15
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText:{
        textAlign: 'center',
        fontSize: 15
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
})
export default GameOverScreen