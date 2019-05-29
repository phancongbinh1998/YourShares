import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ScrollView, Image, TouchableOpacity, Alert, TextInput, Contains} from 'react-native';
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
                    <Text style={Style.text1}>Personal Information</Text>
                    <View style={Style.title2}></View>
                </View>
                <View>
                        <ScrollView style={Style.title3}>

                        <Text style={Style.text4}>ID </Text>
                        <Text style={Style.text5}>SE62805 </Text>
                        <View style={Style.title6}></View>
                        <Text style={Style.text4}>CompanyID </Text>
                        <Text style={Style.text5}>FPT628055555 </Text>
                        <View style={Style.title6}></View>
                        <Text style={Style.text4}>FirstName </Text>
                        <Text style={Style.text5}>Phan </Text>
                        <View style={Style.title6}></View>
                        <Text style={Style.text4}>LastName </Text>
                        <Text style={Style.text5}>Binh </Text>
                        <View style={Style.title6}></View>
                        <Text style={Style.text4}>Role </Text>
                        <Text style={Style.text5}>Admin </Text>
                        <View style={Style.title6}></View>
                        <Text style={Style.text4}>Address </Text>
                        <Text style={Style.text5}>1 Tan Son Nhat </Text>
                        <View style={Style.title6}></View>
                        <Text style={Style.text4}>Phone </Text>
                        <Text style={Style.text5}>0902792326 </Text>
                        <View style={Style.title6}></View>
                        <Text style={Style.text4}>Email </Text>
                        <Text style={Style.text5}>phancongbinh1998@gmail.com </Text>
                        <View style={Style.title6}></View>
                        <TouchableOpacity style={Style.button} onPress= {() => {this.logout()}}>

                                        <Text style={Style.buttonText}>Log Out</Text>
                         </TouchableOpacity>
                         </ScrollView>

                </View>
                <View style={Style.title4}>
                    <View style={Style.title5}>
                    <View style={Style.title7}></View>
                        <TouchableOpacity >
                             <Image source={require('./img/logout-icon-png-25.jpg')} style={Style.img}/>
                            <Text style={Style.text3}>Personal Information</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.title5}>
                    <View style={Style.title8}></View>
                        <TouchableOpacity >
                            <Image source={require('./img/Skyscraper_Information-512.png')} style={Style.img}/>
                            <Text style={Style.text3}>Company Information</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.title5}>
                    <View style={Style.title8}></View>
                        <TouchableOpacity >
                            <Image source={require('./img/08-512.png')} style={Style.img}/>
                            <Text style={Style.text3}>Share Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.title5}>
                    <View style={Style.title8}></View>
                        <TouchableOpacity>
                            <Image source={require('./img/22-512.png')} style={Style.img}/>
                            <Text style={Style.text3}>Transaction</Text>
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
          marginLeft: 30,

        },
     title1: {
           backgroundColor: '#2C2C37',
           height: 80

      },
     title2: {
            height: 5,
            backgroundColor: '#700000',
            marginTop: 22,
       },
    title3: {
        height: 460,
        marginTop: -5,
   },
   title4: {
          backgroundColor: '#2C2C37',
          height: 80,
          flexDirection: 'row',

     },
    title5: {
        backgroundColor: '#2C2C37',
        height: 80,
        width: 90,
        justifyContent: 'flex-start',

   },

    title6: {
        height: 0.4,
        backgroundColor: '#D7D8E4',

        width: 320,
        marginLeft: 20,
   },
   title7: {
       height: 5,
       backgroundColor: '#700000',

  },
  title8: {
         height: 5,
         backgroundColor: '#2C2C37',

    },
    text1: {
        marginTop: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#D7D8E4',
        fontFamily: 'sans-serif-light',

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

    text4: {
        fontSize: 20,
        margin: 10,
        marginLeft: 20,
        color: '#5A5A68',
        marginTop: 10,
        fontFamily: 'sans-serif-light',
    },

    text5: {
        fontSize: 15,
        margin: 10,
        marginLeft: 20,
        color: '#D7D8E4',
        marginTop: 10,
        fontFamily: 'sans-serif-light',
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



});
export default Style;
