import React, {Component} from 'react';
import {ScrollView, Platform, StyleSheet, Text, View} from 'react-native';
import {Image, TouchableOpacity, Alert, ImageBackground, Select, Linking, TextInput, Contains} from 'react-native';


class Main extends Component{
    company(){
            this.props.navigator.push({
                  component: require('./Company')
            })
        }

    information(){
         this.props.navigator.push({
             component: require('./Information')
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
                        <Text style={Style.text1}>Your Shares</Text>
                    </View>
                    <TouchableOpacity onPress={() => {this.information()}}>
                         <Image source={require('./img/logout-icon-png-25.jpg')} style={Style.img}/>

                    </TouchableOpacity>
                </View>
                <View style={Style.title2}></View>
                <View style={Style.title3}>
                    <Text style={Style.text1}>Write something here!!!</Text>
                </View>

                <TouchableOpacity style={Style.button} onPress={() => {this.company()}}>
                            <Text style={Style.buttonText}>COMPANY</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

module.exports = Main;
var Style = StyleSheet.create({
    container: {
              backgroundColor: '#181922',
              flex: 1

         },
         img: {
              width: 60,
              height: 60,
              marginTop: 10,


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
              width: 240,
              height: 70,
              flexDirection: 'row',
              justifyContent: 'flex-start',

        },
        title2: {
            height: 5,
            backgroundColor: '#700000',

       },
         title3: {
             height: 380,


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
