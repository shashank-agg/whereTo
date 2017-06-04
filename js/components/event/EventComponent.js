//import liraries
import React, { Component } from 'react';
import { Image,ScrollView,View } from 'react-native';
// import * as nb from 'native-base';
import { Container, Header, Title, Content, Footer, Card, CardItem, Text, FooterTab, Button, Left, Right, Body, Icon, H1,H3,H2 } from 'native-base';
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
// create a component

class EventComponent extends Component {

    constructor(props) {
        super(props);
        this.interestedClicked = this.interestedClicked.bind(this);
    }

    handleBackButton() {
        Actions.pop();
    }

    interestedClicked() {
        this.props.dispatch({type: "INCREASE_EVENT_INTEREST", eventID: this.props.eventID});
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
                        <Title>Event details</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={styles.containerContent}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body style={styles.cardHeader}>
                                    <Icon style={styles.cardHeaderIcon} name='calendar' />
                                    <View>
                                        <H3 style={styles.cardHeaderEventName} >{this.props.eventName}</H3>
                                        <Text note>{this.props.eventCategory}</Text>
                                    </View>
                                </Body>
                            </Left>
                          </CardItem>
                        <CardItem cardBody>
                             <Image source={{uri: this.props.imgUrls[0]}} style={styles.img}/>
                        </CardItem>
                        <CardItem>
                            <Icon style={styles.cardHeaderIcon} name='people' />
                            <Text>{this.props.interestedCount} interested</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Event details:</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textLabel}>Location: </Text>
                            <Text>{this.props.location}</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textLabel}>Duration: </Text>
                            <Text>{this.props.startTime}</Text>
                            <Text style={styles.textLabel}> to </Text>
                            <Text>{this.props.endTime}</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Description: </Text>
                        </CardItem>
                        <CardItem>
                            <Text>{this.props.description}</Text>
                        </CardItem>
                    </Card>
                    {/*<View style={styles.scrollviewcontainer} >
                        <ScrollView horizontal>
                            {this.props.imgUrls.map((url ,index) => {
                                return (
                                    <Image key={index} source={{uri: url}} style={styles.img}/>
                                );
                            })}
                        </ScrollView>
                    </View>*/}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full info onPress={this.interestedClicked}>
                            <Text style={styles.footerButtonText}>I'm interested!</Text>
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
    cardHeader: {
        flex: 1,
        flexDirection: "row"
    },
    cardHeaderIcon: {
        marginRight: 20,
        color: "#2980b9"
    },
    cardHeaderEventName: {
        color: "#2980b9"
    },
    img: {
        width: 350,
        height: 200,
        resizeMode: 'cover', 
        // backgroundColor: "black",
    },
    textLabel: {
        color: "#2980b9",
    },
    footerButtonText: {
        color: "white",
        fontWeight: "bold",
    }
};

//make this component available to the app
export default connect()(EventComponent);
