//import liraries
import React, { Component } from 'react';
import { Image, TouchableOpacity, Animated, TouchableHighlight} from 'react-native';
import { Footer, FooterTab, Button, Text, View, Picker} from 'native-base';
import {Actions} from "react-native-router-flux";

import MapView from 'react-native-maps';
import {connect} from "react-redux";

const { StyleSheet } = React;

import api from "../../services/api.js";
import {getMarkerDimensions} from "../../util/utils.js";
import DrawyerComponent from "./DrawyerComponent.js";
class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.openEvent = this.openEvent.bind(this);
        this.mapClicked = this.mapClicked.bind(this);
        this.state = {
            selectedCategory: 'all'
        }
    }

    componentWillMount() {
        this.props.dispatch({type: "FETCH_ALL_EVENTS"});
    }

    openEvent(event) {
        console.log(event)
        Actions.event(event);
    }

    mapClicked(evt) {
        const evtData = evt.nativeEvent;
        Actions.addEvent(evtData.coordinate);
        // alert(coord.latitude);
    }

    onValueChange (value) {
        this.setState({
            selectedCategory : value
        });
    }

    render() {
        const filterEventsByCategory = (event) => {
            return this.state.selectedCategory === "all" ? true : (event.eventCategory === this.state.selectedCategory);
        }

        return (
            <View style={styles.container}>
                <MapView style={styles.mapView}
                    initialRegion={{
                        latitude: 12.994563,
                        longitude: 77.684810,
                        latitudeDelta: 0.06,
                        longitudeDelta: 0.06,
                    }}
                    onLongPress={this.mapClicked}
                    showsPointsOfInterest={true}
                >
                {
                    this.props.events.eventList.filter(filterEventsByCategory).map((event, index) => (
                    <MapView.Marker key={index} coordinate={event.latlng} title={event.eventName} description="Some desc" onCalloutPress={() => {this.openEvent(event)}}>
                        <View>
                            <Image source = {require('../../../images/marker.png')} style={{...styles.marker, ...getMarkerDimensions(event)}}/>
                        </View>
                        <MapView.Callout style={styles.markerPopup}>
                            <TouchableOpacity> 
                                <View><Text>{event.eventName}</Text></View> 
                            </TouchableOpacity>
                        </MapView.Callout>
                    </MapView.Marker>
                    ), this)}
                </MapView>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.selectedCategory}
                    onValueChange={this.onValueChange.bind(this)}>
                    <Picker.Item label="All Events" value="all" />
                    <Picker.Item label="Recreation" value="recreation" />
                    <Picker.Item label="Social" value="social" />
                    <Picker.Item label="Utility" value="utility" />
                </Picker>
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
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: 100,
    },
    mapView: {
        flex: 1,
        alignSelf: 'stretch',
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: 0,
        // bottom: 0,
        // width: 300,
        // height: 200
    },
    marker: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
    markerPopup: {
        minWidth: 200
    },
    picker: {
        height: 50,
        alignSelf: 'stretch',
    }
}

const mapStateToProps = (state) => {
    let eventList = state.events.eventList || [];
    return {
        user: state.user,
        events: {eventList}
    };
}

//make this component available to the app
export default connect(mapStateToProps)(HomeComponent);
