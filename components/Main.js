import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Image, TouchableOpacity, Alert, ImageBackground, Select, Linking, TextInput, Contains} from 'react-native';


class Login extends Component{
    login(){
            this.props.navigator.push({
                  component: require('./View')
            })
        }

    logout(){
                 this.props.navigator.push({
                     component: require('./Main')
                 })
             }

    render(){

        return(


                 <View >
                        <Text style={Style.text}>Sign in to View Your Stock</Text>

                           <View style={Style.view}>
                                <TouchableOpacity style={Style.div} onPress={() => {this.login()}}>
                                    <Text style={Style.text}>Login</Text>
                                 </TouchableOpacity>

                                  <TouchableOpacity style={Style.div} onPress= {() => {this.logout()}}>
                                    <Text style={Style.text}>Log Out</Text>
                                  </TouchableOpacity>

                           </View>
                           <View style={Style.view}>
                               <TouchableOpacity style={Style.div} >
                                    <Text style={Style.text}>View Info</Text>
                                </TouchableOpacity>

                                 <TouchableOpacity style={Style.div} >
                                    <Text style={Style.text}>Company Info</Text>
                                 </TouchableOpacity>

                          </View>
                          <View style={Style.view}>
                              <TouchableOpacity style={Style.div} >
                                    <Text style={Style.text}>Share Account</Text>
                               </TouchableOpacity>

                                <TouchableOpacity style={Style.div} >
                                    <Text style={Style.text}>Transaction</Text>
                                </TouchableOpacity>

                         </View>



                 </View>


        );
    }
}

module.exports = Login;
var Style = StyleSheet.create({
    container: {
          paddingTop: 23,
          borderStyle: 'solid',
          borderColor: 'purple',
          borderWidth: 5,
          flex: 1

     },
    div: {
        height: 160,
        width: 160,
        marginLeft: 8,
        borderStyle: 'solid',
        borderColor: 'purple',
        borderWidth: 5,
        justifyContent: 'flex-start',

    },

    view: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        height: 160,
        width: 160,
    },

    textButton: {
            fontSize: 30,
            textAlign: 'center',
            color: 'red',
            fontWeight: 'bold'
        },

    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 5,
        color: 'red',
        fontWeight: 'bold'
    },

});
export default Style;