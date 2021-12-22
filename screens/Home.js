import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text styles={styles.titleText}>Home Screen</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container : {
        padding: 24
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 56,
        color: 'red'
    }
})
