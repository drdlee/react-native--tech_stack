import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription() {
        const { library, sameId } = this.props;
        if (sameId) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }
    render() {
        const { titleStyle } = style;
        const { title, id } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
            <View>
                <CardSection>
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const style = {
    titleStyle: {
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const sameId = state.selectedLibraryId === ownProps.library.id;
    return { sameId };
};

export default connect(mapStateToProps, actions)(ListItem);
