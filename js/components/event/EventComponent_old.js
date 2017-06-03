//import liraries
import React, { Component } from 'react';
import { Image,ScrollView,ListView,FlatList,View } from 'react-native';
import * as nb from 'native-base';
import {Actions} from "react-native-router-flux" 
// create a component

class EventComponent extends Component {

    render() {
        return (
            <nb.Container style={styles.container}>
                <nb.Header>
                    <nb.Body>
                        <nb.Title>{this.props.eventName}</nb.Title>
                    </nb.Body>
                </nb.Header>
                <nb.Card>
                    <nb.Text>
                        Your text here
                    </nb.Text>
                </nb.Card>
                <nb.Text>Description: {this.props.description}</nb.Text>
                <nb.Text>Start date: {this.props.startDate}</nb.Text>
                <nb.Text>Start time: {this.props.startTime}</nb.Text>
                <nb.Text>Duration: {this.props.duration}</nb.Text>
                <nb.Text>{this.props.contactMobile}</nb.Text>
                <View style={styles.scrollviewcontainer} >
                    <ScrollView style={styles.scrollview} horizontal>
                        {this.props.images.map((img ,index) => {
                            return (
                                <Image key={index} source={{uri: img.uri}} style={styles.img}/>
                            );
                        })}
                    </ScrollView>
                </View>
                {/*<ScrollView
                    data={this.props.images}
                    renderItem={(img) => <Image source={{uri: img.uri}} style={styles.img}/>}
                />*/}
            </nb.Container>
        );
    }
}

// define your styles
const styles = {
    container: {
        flex: 1,
    },
    scrollviewcontainer: {
        flex: 0.5,
        backgroundColor: "red",
    },
    scrollview: {
    },
    img: {
        width: 500,
        margin: 10,
        height: 300,
        resizeMode: 'contain', 
        backgroundColor: "black",
    }
};

//make this component available to the app
export default EventComponent;
