import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container : {
        padding: 24
    }
})
