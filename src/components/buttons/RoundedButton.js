/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import ProtoTypes from 'prop-types';
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
  render() {
    const { text, textColor, bgColor, handelOnPress } = this.props;
    const color = textColor || colors.black;
    const backgroundColor = bgColor || 'transparent';

    return (
      <TouchableHighlight 
      style={[{ backgroundColor }, styles.Wrapper]}
      onPress = {handelOnPress}>
        <Text style={[{color }, styles.buttonText]}>{text}</Text>
      </TouchableHighlight>
    )
  }
}

RoundedButton.propTypes = {
  text: ProtoTypes.string.isRequired,
  textColor: ProtoTypes.string,
  bgColor: ProtoTypes.string,
  handelOnPress: ProtoTypes.func.isRequired
}

const styles = StyleSheet.create({
  Wrapper: {
    display: 'flex',
    padding: 12,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems : 'center'
  },
  buttonText: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
  }
});
