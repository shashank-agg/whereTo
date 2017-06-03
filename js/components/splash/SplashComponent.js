//import liraries
import React, { Component } from 'react';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Image } from "react-native";
import { Actions } from 'react-native-router-flux';
// create a component
class SplashComponent extends Component {

    componentDidMount() {
        setTimeout(function() {
            Actions.home();
        }, 100);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../../images/splash1.jpg')} style={styles.backgroundImage}/>
                <View style={styles.overlay}>     
                    <Text style={styles.titleText}>WhereTo?</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = {
    container: {
        flex: 1,
        justifyContent: "flex-end",
        // alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        opacity: 0.9
    },
    overlay: {
        flex: 1,
        // justifyContent: "flex-end",
        alignSelf: "center",
        position: "absolute",
        backgroundColor: 'transparent',
        paddingBottom: 50,
    },
    titleText: {
        fontSize: 70,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Roboto"
    }
};

//make this component available to the app
export default SplashComponent;
