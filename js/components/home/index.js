//import liraries
import React, { Component } from 'react';
// import { View } from 'react-native';
import { Footer, FooterTab, Button, Text, View } from 'native-base';

import MapView from 'react-native-maps';
import {connect} from "react-redux";
// import styles from "./styles";
// create a component
class HomeComponent extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <MapView style={styles.mapView}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <Footer style={styles.toolbar}>
                    <FooterTab>
                        <Button>
                            <Text>Apps</Text>
                        </Button>
                        <Button>
                            <Text>Camera</Text>
                        </Button>
                        <Button active>
                            <Text>Navigate</Text>
                        </Button>
                        <Button>
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    mapView: {
        flex: 1,
        backgroundColor: "red",
        alignSelf: 'stretch',
        // width: 300,
        // height: 200
    },
    // toolbar: {
    //     flex: 0.1,
    //     flexDirection: "row",
    // }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

//make this component available to the app
export default connect(mapStateToProps)(HomeComponent);
