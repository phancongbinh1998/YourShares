import React, {Component} from 'react';
import {ScrollView, Platform, StyleSheet, Text, View} from 'react-native';
import {Image, TouchableOpacity, Alert, ImageBackground, Select, Linking, TextInput, Contains} from 'react-native';


class Register extends Component{
    confirm(){
            alert('Confirm success');
            this.props.navigator.push({
                  component: require('./Login')
            })
        }


    render(){

        return(
            <View style={Style.container}>
                <View style={Style.title1}>
                    <View style={Style.title11}>
                        <Image source={require('./img/apple-touch-icon-57x57.png')} style={Style.logo}/>
                    </View>
                    <View style={Style.title12}>
                        <Text style={Style.text1}>Registration</Text>
                    </View>

                </View>
                <View style={Style.title2}></View>

                <ScrollView style={Style.title3}>

                    <Text style={Style.text1}>Fill in all request info below to Register</Text>

                    <Text style={Style.h2}>Full Name <Text style={Style.h1}> *</Text></Text>
                    <TextInput style={Style.input}  ref={input => { this.fullNameInput = input }}
                        underlineColorAndroid = "transparent"
                        onChangeText = {this.handleFullName}
                    />
                    <Text style={Style.h2}>Address <Text style={Style.h1}> *</Text></Text>
                    <TextInput style = {Style.input} ref={input => { this.addressInput = input }}
                        underlineColorAndroid = "transparent"

                        onChangeText = {this.handleAddress}
                    />
                    <Text style={Style.h2}>Phone <Text style={Style.h1}> *</Text></Text>
                    <TextInput style = {Style.input} ref={input => { this.phoneInput = input }}
                        underlineColorAndroid = "transparent"

                        onChangeText = {this.handlePhone}
                    />
                    <Text style={Style.h2}>Email<Text style={Style.h1}> *</Text></Text>
                    <TextInput style = {Style.input} ref={input => { this.emailInput = input }}
                        underlineColorAndroid = "transparent"

                        onChangeText = {this.handleEmail}
                    />
                    <Text style={Style.h2}>Password <Text style={Style.h1}> *</Text></Text>
                    <TextInput style = {Style.input} ref={input => { this.passwordInput = input }}
                        underlineColorAndroid = "transparent"
                        secureTextEntry={true}
                        onChangeText = {this.handlePassword}
                    />

                    <Text style={Style.h2}>Re-Password <Text style={Style.h1}> *</Text></Text>
                    <TextInput style = {Style.input} ref={input => { this.rePasswordInput = input }}
                        underlineColorAndroid = "transparent"
                        secureTextEntry={true}
                        onChangeText = {this.handleRePassword}
                    />

                    <TouchableOpacity style={Style.button} onPress={() => {this.confirm()}}>
                                <Text style={Style.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                 </ScrollView>



            </View>
        );
    }
}

module.exports = Register;
var Style = StyleSheet.create({
    container: {
              backgroundColor: '#181922',
              flex: 1

         },
         img: {
              width: 30,
              height: 30,
              marginTop: 10,
              marginLeft: 30,

            },
         logo: {
               width: 57,
               height: 57,
               marginTop: 10,

             },
         title1: {
               backgroundColor: '#2C2C37',
               height: 80,
               flexDirection: 'row',
          },
         title11: {
                 width: 57,
                 height: 70,
                 flexDirection: 'row',
                 justifyContent: 'flex-start',
           },
         title12: {
              width: 310,
              height: 70,
              flexDirection: 'row',
              justifyContent: 'flex-start',

        },
        title2: {
            height: 5,
            backgroundColor: '#700000',

       },
         title3: {
             height: 460,
             marginTop: -5,


        },

        text1: {
            marginTop: 20,
            fontSize: 25,
            marginLeft: 20,
            textAlign: 'center',
            color: '#D7D8E4',
            fontFamily: 'sans-serif-light',
            justifyContent: 'flex-start',

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

       h2: {
           fontSize: 15,
           margin: 10,
           marginLeft: 20,
           color: '#D7D8E4',
           fontWeight: 'bold',
           marginTop: 10,
       },

       h1: {
          fontSize: 20,
          color: 'red',
      },

});
export default Style;