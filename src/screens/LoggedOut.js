/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar, Text, TouchableHighlight } from 'react-native';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';

export default class LoggedOut extends Component {
  onCreateAccountPress() {
    alert("Clicked Cerate Accoutn");
  }

  onLogInPress() {
    alert("Clicked login Accoutn");
  }

  onMorePress() {
    alert("Clicked More ");
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor={colors.green} />
        <View style={styles.welcomeWrapper}>
          <Text style={styles.welcomeText}>Welcome to Sagisu.</Text>
          <RoundedButton
            text='Create Account'
            textColor={colors.green}
            bgColor={colors.white}
            handelOnPress={this.onCreateAccountPress}
          />
          <RoundedButton
            text='Log In'
            textColor={colors.white}
            bgColor={colors.green}
            handelOnPress={this.onLogInPress}

          />
          <TouchableHighlight style={styles.moreTextWrapper} onPress={this.onMorePress}>
            <Text style={styles.moreText}>More</Text>
          </TouchableHighlight>
          <View style={styles.termsAndConditiontWrapper}>
            <Text style={styles.termsAndConditiontText}>
            By clicking on Log in, Create Account I agree to Sagisu's Terms of Service, 
              Payment Terms of Service, Privacy Policy and Non Discrimination Policy</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.green,
  },
  termsAndConditiontWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop:30
  },
  termsAndConditiontText: {
    color: colors.white,
    fontSize:14,
  },
  moreTextWrapper: {
    marginTop:15,
    width:50  
  },
  moreText:{
    color: 'white',
    fontSize:16
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcomeText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '300',
    paddingTop: 60,
    marginBottom: 40
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
