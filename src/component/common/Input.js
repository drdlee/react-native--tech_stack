import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholer, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = style;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                underlineColorAndroid='transparent'
                autoCorrect={false}
                placeholder={placeholer}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const style = {
    inputStyle: {
        color: '#1e272e',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 16,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        color: '#1e272e',
        fontSize: 16,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
