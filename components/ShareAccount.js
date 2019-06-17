import React, {Component} from 'react';
import {ScrollView, Platform, StyleSheet, Text, View} from 'react-native';
import {Image, TouchableOpacity, Alert, ImageBackground, Select, Linking, TextInput, Contains} from 'react-native';


class ShareAccount extends Component{
    detailShareAccount(){
            this.props.navigator.push({
                  component: require('./DetailShareAccount')
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
                        <Text style={Style.text1}>SHARE ACCOUNT</Text>
                    </View>

                </View>
                <View style={Style.title2}></View>
                <TouchableOpacity style={Style.button} onPress={() => {this.detailShareAccount()}}>
                            <Text style={Style.buttonText}>ShareAccount 1</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

module.exports = ShareAccount;
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

           margin: 15,
           height: 50,
           marginTop: 10,
           borderColor: '#48484D',
           backgroundColor: '#2C2C37',
           borderWidth: 1,
           color: 'white',
           fontSize: 15,
           borderRadius: 2,

         },

        buttonText:{
              fontSize: 20,
              color: '#D7D8E4',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 8
         },

});
export default Style;