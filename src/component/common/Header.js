import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 47,
        paddingTop: 5,
        elevation: 4,
        position: 'relative'
    },
    textStyle: {
        fontSize: 19,
        color: '#1e272e',
    }
};

export { Header };
