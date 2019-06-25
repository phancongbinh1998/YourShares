import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Image, TouchableOpacity, Alert, ImageBackground, Select, Linking, TextInput, Contains} from 'react-native';


class Login extends Component{
    constructor(){
            super();
            this.state = {
               email: '',
               password: '',
            }

        }

    handleEmail = (text) => {
             this.setState({ email: text})
         }

    handlePassword = (text) => {
              this.setState({ password: text})
         }


    login = (email, pass) => {
        this.props.navigator.push({
              component: require('./Main')
        })
    }



    render(){

        return(
            <View style={Style.container}>
                            <Text style={Style.h1}>Login</Text>
                            <Image source={require('./apple-touch-icon-114x114.png')} style={Style.img}/>
                            <Text style={Style.text}>YOUR SHARES</Text>
                            <Text style={Style.h2}>Email </Text>
                            <TextInput style={Style.input}  ref={input => { this.emailInput = input }}
                                underlineColorAndroid = "transparent"
                                onChangeText = {this.handleEmail}
                            />
                            <Text style={Style.h2}>Password </Text>
                            <TextInput style = {Style.input} ref={input => { this.passwordInput = input }}
                                underlineColorAndroid = "transparent"
                                secureTextEntry={true}
                                onChangeText = {this.handlePassword}
                            />
                            <TouchableOpacity style={Style.button} onPress={() => {this.login(this.state.email, this.state.password)}}>
                                <Text style={Style.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={Style.h3}>Forget your password?</Text>
                            </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={Style.h4}>Don`t have account yet?<Text style={Style.h5}> Register</Text></Text>

                                </TouchableOpacity>





                        </View>
        );
    }
}

module.exports = Login;
var Style = StyleSheet.create({
    container: {
          paddingTop: 23,
          flex: 1,
          backgroundColor: '#181922',

     },
    img: {
         width: 114,
         height: 114,
         marginLeft:123,
         marginTop: 10,

       },
    input: {
          margin: 15,
          height: 50,
          marginTop: -3,
          borderColor: '#48484D',
          backgroundColor: '#2C2C37',
          borderWidth: 1,
          color: 'white',
          fontSize: 15,
          borderRadius: 2,
       },
    button: {
          backgroundColor: '#181922',
          padding: 10,
          margin: 15,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#700000',
          borderWidth: 1,
          borderRadius: 2,

       },

    buttonText:{
          fontSize: 20,
          color: '#700000',

       },
    h1: {
            fontSize: 15,
            textAlign: 'center',
            margin: 10,
            color: '#D7D8E4',
            fontWeight: 'bold',
            marginTop: -15,
        },

    h2: {
            fontSize: 15,
            margin: 10,
            marginLeft: 20,
            color: '#D7D8E4',
            fontWeight: 'bold',
            marginTop: 10,
        },

    h3: {
            fontSize: 15,
            textAlign: 'center',
            color: '#700000',
            fontWeight: 'bold',
            marginTop: 10,
        },
    h4: {
            fontSize: 15,
            textAlign: 'center',
            color: '#D7D8E4',
            fontWeight: 'bold',
            marginTop: 10,
        },
     h5: {
             fontSize: 20,
             textAlign: 'center',
             color: '#700000',
             fontWeight: 'bold',
             marginTop: 10,
         },

    text: {

        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#700000',
        fontWeight: 'bold'
    },

});
export default Style;
