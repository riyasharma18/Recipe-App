import React, { Component } from 'react';
import Constants from 'expo-constants';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from '../Config';
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password:'',
       errors: "",
    };
  }
  handleValidation = () => {
    const { name, email, password} = this.state;
    let fields = {
      name,
      email,
      password
    };
    let errors = {};
    let formIsValid = true;
    //name validation
    if(fields["name"].length===0)
    {
      formIsValid=false;
      errors["name"]="Please Enter Name"
    }
    else if(fields["name"].length<5)
    {
         formIsValid=false;
      errors["name"]="Please Insert Name !"
    }
    // email Validation
     if(fields["email"].length===0)
    {
      formIsValid=false;
      errors["email"]="Please Insert your email address !"
    }
     if(fields["password"].length===0)
    {
      formIsValid=false;
      errors["password"]="Please Insert password!"
    }
    this.setState({
      errors:errors,
    });
    return formIsValid;
  } 

  handleSubmit = async () => {
    if (this.handleValidation()) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          this.state.email,
          this.state.password
        );
        
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  render() {
    const { name, email, password, errors} = this.state;
    return (
     
        
        <View style={myStyle.body}>
        <View style={myStyle.image}>
        <Image source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/10/aa/89/3a/pizza.jpg'}} style={myStyle.img}/>
        </View>
          <View style={myStyle.nameContainer}>
            <Text style={[myStyle.text, { marginRight: '20px' }]}>
              <Icon name={'user'} size={25} color={'#FFBF00'} />
            </Text>
            <TextInput
              style={myStyle.textInput}
              onChange={(e) => {
                this.setState({ name: e.target.value }),
                  this.handleValidation();
              }}
              value={name}
              placeholder="Enter Name"></TextInput>
          </View>
               <View style={myStyle.notificationView}>
         <Text style={myStyle.notificationViewText}>{errors["name"]}</Text>
         </View>
          <View style={myStyle.nameContainer}>
            <Text style={[myStyle.text, { marginRight: '20px' }]}>
              <Icon name={'envelope'} size={25} color={'#FFBF00'} />
            </Text>
            <TextInput
              style={myStyle.textInput}
              onChange={(e) => {
                this.setState({ email: e.target.value }),
                  this.handleValidation();
              }}
              value={email}
              placeholder="Enter Email-ID"></TextInput>
          </View>
           <View style={myStyle.notificationView}>
         <Text style={myStyle.notificationViewText}>{errors["email"]}</Text>
         </View>
           <View style={myStyle.nameContainer}>
            <Text style={[myStyle.text, { marginRight: '20px' }]}>
              <Icon name={'key'} size={25} color={'#FFBF00'} />
            </Text>
            <TextInput
              style={myStyle.textInput}
              onChange={(e) => {
                this.setState({ password: e.target.value }),
                  this.handleValidation();
              }}
              value={password}
              placeholder="Enter Password">
              </TextInput>
               
          </View>
          <View style={myStyle.notificationView}>
              <Text style={myStyle.notificationViewText}>{errors["password"]}</Text>
              </View>
          <View style={myStyle.nameContainer}>
          <TouchableOpacity style={[myStyle.sBtn,{width:'140px'}]} onPress={this.handleSubmit}  
              >
          Sign Up
          </TouchableOpacity>
        </View>
        <View style={myStyle.nameContainer}>
          <TouchableOpacity style= {{color:'#FFBF00',}} onPress={() => {this.props.navigation.navigate('Home')}}>
            Log In
          </TouchableOpacity>
        </View>
        </View>
         
     
    );
  }
}
const myStyle = StyleSheet.create({
  
  
 
  body: {
    flex:8,
    width: '100%',
    height: 'auto',
  },
  textInput: {
    width: '75%',
    height: '40px',
    borderBottom: '1px solid #bfbfbf',
    marginTop: '0px',
    borderRadius: '0px',
    paddingLeft: '10px',
    paddingTop: 0,
    fontFamily: 'TimesNewRoman',
    color: 'gray',
    fontSize: '20px',
    outlineStyle: 'none',
  },
  text: {
    fontFamily: 'TimesNewRoman',
    fontSize: '20px',
    color: 'gray',
    marginRight: '10px',
  },
  nameContainer: {
   
    flexDirection: 'row',
    width: '100%',
    height: '75px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  sBtn: {
    width: '300px',
    height: '45px',
    backgroundColor: '#FFBF00',
    borderRadius: '1px',
    color: 'white',
    fontSize: '20px',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },image:{
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  img:{
   
    width:'45%',
    height:'90%',
    borderRadius:70
   
  },
   notificationView:
  {
    width:'100%',
    marginTop:'0px',
    margin:'auto',
    height:'auto',
    justifyContent:'center',
    textAlign:'center'
  },
  notificationViewText:
  { 
    backgroundColor:"black",
    color:'#FFBF00',
    fontFamily:'TimesNewRoman',
    fontSize:'18px'
  }
 
});
