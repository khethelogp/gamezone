import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import Card from '../shared/Card';
import { globalStyles, images } from '../styles/global';

const ReviewDetails = ({ route, navigation }) => {
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
            <Button title='go back' onPress={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    rating : {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});

export default ReviewDetails

