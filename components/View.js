import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Image, TouchableOpacity, Alert, TextInput, Contains} from 'react-native';
console.disableYellowBox = true;
class UserView extends Component{
    logout(){
         this.props.navigator.push({
             component: require('./Login')
         })
     }

    render(){
        return(
            <View style={Style.container}>
                <View style={Style.title1}>
                    <Text style={Style.text1}>Specific Information</Text>
                    <View style={Style.title2}>
                        <View style={Style.title3}>
                            <TouchableOpacity >
                                <Text style={Style.text2}>Personal information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Style.title3}>
                            <TouchableOpacity >
                                <Text style={Style.text2}>Company  Information</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View>

                </View>
                <View style={Style.title4}>
                    <View style={Style.title5}>
                        <TouchableOpacity >
                             <Image source={require('./icon-i.png')} style={Style.img}/>
                            <Text style={Style.text3}>Information</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.title5}>
                        <TouchableOpacity >
                            <Image source={require('./08-512.png')} style={Style.img}/>
                            <Text style={Style.text3}>Share Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.title5}>
                        <TouchableOpacity >
                            <Image source={require('./22-512.png')} style={Style.img}/>
                            <Text style={Style.text3}>Transaction</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.title5}>
                        <TouchableOpacity onPress= {() => {this.logout()}}>
                            <Image source={require('./logout-icon-png-25.jpg')} style={Style.img}/>
                            <Text style={Style.text3}>Log Out</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        )
    }
}

module.exports = UserView;
var Style = StyleSheet.create({
    container: {
          backgroundColor: '#181922',
          flex: 1

     },
     img: {
          width: 30,
          height: 30,
          color: '#D7D8E4',
          marginTop: 10,
          marginLeft: 30

        },
     title1: {
           backgroundColor: '#2C2C37',
           height: 80

      },
     title2: {
            height: 60,
            flexDirection: 'row',

       },
    title3: {
        backgroundColor: '#2C2C37',
        height: 60,
        width: 180,
        justifyContent: 'flex-start',

   },
   title4: {
          backgroundColor: '#2C2C37',
          height: 80,
          marginTop: 460,
          flexDirection: 'row',

     },
    title5: {
        backgroundColor: '#2C2C37',
        height: 80,
        width: 90,
        justifyContent: 'flex-start',

   },
    text1: {
        marginTop: 15,
        fontSize: 20,
        textAlign: 'center',
        color: '#D7D8E4',

    },

    text2: {
        marginTop: 20,
        fontSize: 15,
        textAlign: 'center',
        color: '#D7D8E4',

    },

    text3: {
        fontSize: 10,
        textAlign: 'center',
        color: '#D7D8E4',
        marginTop: 10
    },



});
export default Style;