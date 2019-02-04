import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    StatusBar,
    Text,
    ScrollView,
    TouchableHighlight,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import ProtoTypes from 'prop-types';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';


export default class Login extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} enabled>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log in</Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelSize={15}
                            labelColor={colors.white}
                            inputColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyles={{ marginBottom: 20 }}
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelSize={15}
                            labelColor={colors.white}
                            inputColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyles={{ marginBottom: 20 }}
                        />
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.green
    },
    scrollViewWrapper: {
        marginTop: 40,
        flex: 1
    },
    scrollView: {
        paddingLeft: 30,
        paddingTop: 0,
        paddingRight: 30
    },
    loginHeader: {
        color: colors.white,
        fontSize: 34,
        marginBottom: 60,
        fontWeight: '500'
    }
});

