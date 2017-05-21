
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import { setUser } from '../../actions/user';
import styles from './styles';


const background = require('../../../images/globe.jpg');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.loginClicked = this.loginClicked.bind(this);
  }

  setUsername(username) {
    this.props.dispatch({type: "SET_USERNAME", payload: username});
  }

  setPassword(password) {
    this.props.dispatch({type: "SET_PASSWORD", payload: password});
  }

  saveNewUser() {
    console.log("saved user to DB");
    return true;
  }

  loginClicked = () => {
    // alert(this.props.user.username);
    if (this.saveNewUser()) {
      Actions.home();
    }
  }


  render() {
    console.log("my props", this.props);
    return (
        <View style={styles.container}>
          <View style={styles.image1Container}>
            <Image source={background} style={styles.image1}></Image>
          </View>
          <View style={styles.formContainer}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input placeholder="Email" onChangeText={name => this.setUsername(name)} />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input placeholder="Password" secureTextEntry onChangeText={password => this.setPassword(password)}
                  />
                </Item>
                <Button block style={styles.loginButton} onPress={this.loginClicked}>
                  <Text>Login</Text>
                </Button>
            </View>
        </View>
    );
  }
}

// function bindActions(dispatch) {
//   return {
//     setUser: name => dispatch(setUser(name)),
//   };
// }

function mapStateToProps(state) {
  console.log("in mapStateToProps", state);
  return {
    user: state.user
  };
}


export default connect(mapStateToProps, null)(Login);
