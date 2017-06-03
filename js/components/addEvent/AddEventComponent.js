//import liraries
import React, { Component } from 'react';
import { Image,ScrollView,View } from 'react-native';
// import * as nb from 'native-base';
import { Container, Content,Card,CardItem, Form,Footer, FooterTab, Item, Input, Header, Left, Button, Body, Title,Icon,Text,Textarea,Right,Label } from 'native-base';
import {Actions} from "react-native-router-flux" 
import {connect} from "react-redux";
// create a component

import api from "../../services/api.js";

class AddEventComponent extends Component {

    constructor(props) {
        super(props);
        this.handleCreateEvent = this.handleCreateEvent.bind(this);
        this.state = {
            eventName: "",
            description: "",
            startTime: "",
            endTime: "",
            location: ""
        }
    }

    handleBackButton() {
        Actions.home();
    }
    
    handleCreateEvent() {
        const newEvent = {
            eventName: this.state.eventName,
            latlng: {
                latitude: this.props.latitude,
                longitude: this.props.longitude
            },
            description: this.state.description,
            location: this.state.location,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            imgUrls:[]
        };
        // api.addEvent(newEvent);
        this.props.dispatch({type: "ADD_EVENT", payload: newEvent});
        Actions.home();
    }

    render() {
        return (
             <Container>
                <Header>
                    <Left>
                        <Button iconLeft transparent primary onPress={this.handleBackButton}>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={styles.containerContent}>
                    <Card>
                        <CardItem>
                          <Body>
                            <Item floatingLabel>
                                <Label>Event name</Label>
                                <Input 
                                    onChangeText={(eventName) => this.setState({eventName})}
                                />
                            </Item>
                          </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                          <Body>
                            <Item floatingLabel>
                                <Label>Event description</Label>
                                <Input style={styles.inputDescription} multiline
                                    onChangeText={(description) => this.setState({description})}
                                />
                            </Item>
                          </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                          <Body>
                            <Item floatingLabel>
                                <Label>Start date and time</Label>
                                <Input
                                    onChangeText={(startTime) => this.setState({startTime})}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>End date and time</Label>
                                <Input
                                    onChangeText={(endTime) => this.setState({endTime})}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Location (Landmark etc.)</Label>
                                <Input
                                    onChangeText={(location) => this.setState({location})}
                                />
                            </Item>
                          </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button info onPress={this.handleCreateEvent}>
                            <Text style={styles.footerButtonText}>Create event</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

// define your styles
const styles = {
    containerContent: {
        margin: 10
    },
    inputDescription: {
        height: 150
    },
    footerButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
};

AddEventComponent.propTypes = {

}

//make this component available to the app
export default connect()(AddEventComponent);
