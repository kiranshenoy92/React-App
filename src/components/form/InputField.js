/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import ProtoTypes from 'prop-types';
import colors from '../../styles/colors';

export default class InputField extends Component {
    render() {
        const { labelText, labelSize, labelColor, inputColor, borderBottomColor, inputType, customStyles } = this.props;
        const fontSize = labelSize || 14;
        const color = labelColor || colors.black;
        const textColor = inputColor || colors.black;
        const borderBottom = borderBottomColor || color.black
        return (
            <View style={[customStyles,styles.wrapper]}>
                <Text style={[{ color }, { fontSize }, styles.label]}>{labelText}</Text>
                <TextInput 
                autoCorrect={false}
                style ={[{color : textColor, borderBottomColor : borderBottom},styles.textInput]}
                secureTextEntry={inputType==='password'?true : false}
                ></TextInput>
            </View>
        )
    }
}

InputField.propTypes = {
    labelText: ProtoTypes.string.isRequired,
    labelSize: ProtoTypes.number,
    labelColor: ProtoTypes.string,
    inputColor: ProtoTypes.string,
    borderBottomColor : ProtoTypes.string,
    inputType : ProtoTypes.string,
    customStyles : ProtoTypes.object
}

const styles = StyleSheet.create({
    label: {
        fontWeight: '400',
        marginBottom: 10,
    },
    wrapper: {
        display: 'flex'
    },
    textInput:{
        borderBottomWidth : 1,
        paddingTop : 5,
        paddingBottom : 5
    }
});
