import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Image, TouchableOpacity, Alert, ImageBackground, TextInput, Contains} from 'react-native';

class Registration extends Component{


    state = {
       name: '',
       email: '',
       password: '',
       rePassword: ''
    }

    handleName = (text) => {
        this.setState({ name: text})
    }

    handleEmail = (text) => {
            this.setState({ email: text})
    }

    handlePassword = (text) => {
            this.setState({ password: text})
    }

     handleRePassword = (text) => {
             this.setState({ rePassword: text})
     }

     reset(){
        this.setState({ name: ''})
        this.nameInput.clear()
        this.setState({ email: ''})
        this.emailInput.clear()
        this.setState({ password: ''})
        this.passwordInput.clear()
        this.setState({ rePassword: ''})
        this.rePasswordInput.clear()
     }

     submit(name, email, password, rePassword){
        alert("oke");
        this.props.navigator.push({
              component: require('./Login')
        })
     }

    render(){
        return(
            <View style={Style.container}>
                 <Text style={Style.text}>Registration</Text>
                 <TextInput style= {Style.input} ref={input => { this.nameInput = input }}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "Name"
                                    placeholderTextColor = "#9a73ef"
                                    onChangeText = {this.handleName}
                                  />
                 <TextInput style= {Style.input} ref={input => { this.emailInput = input }}
                                     underlineColorAndroid = "transparent"
                                     placeholder = "Email"
                                     placeholderTextColor = "#9a73ef"
                                     onChangeText = {this.handleEmail}
                                  />
                 <TextInput style= {Style.input} ref={input => { this.passwordInput = input }}
                                     underlineColorAndroid = "transparent"
                                     placeholder = "Password"
                                     placeholderTextColor = "#9a73ef"
                                     secureTextEntry={true}
                                     onChangeText = {this.handlePassword}
                                  />
                 <TextInput style= {Style.input} ref={input => { this.rePasswordInput = input }}
                                     underlineColorAndroid = "transparent"
                                     placeholder = "Re-Password"
                                     placeholderTextColor = "#9a73ef"
                                     secureTextEntry={true}
                                     onChangeText = {this.handleRePassword}
                                  />
                 <TouchableOpacity style={Style.button} onPress= {() => {this.submit(this.state.name, this.state.email, this.state.password, this.state.rePassword)}}>
                        <Text style={Style.buttonText}>Submit</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={Style.button} onPress={() => { this.reset()}}>
                        <Text style={Style.buttonText}>Reset</Text>
                 </TouchableOpacity>

            </View>
        )
    }
}


module.exports = Registration;

var Style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
        borderStyle: 'solid',
        borderColor: 'purple',
        borderWidth: 5
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    button: {
        backgroundColor: 'purple',
        padding: 10,
        margin: 15,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'

     },

    buttonText:{
              color: 'white',

    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: 'red',
        fontWeight: 'bold'
    },
});
export default Style;