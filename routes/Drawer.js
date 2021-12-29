import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Home"
                screenOptions={() => ({
                    // headerStyle: { backgroundColor: '#eee', height: 60},
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontFamily: 'nunito-bold'},
                    headerTintColor: '#444',
                    headerBackground: () => (
                        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}/>
                    ),
                    headerTitle: (props) => ( 
                        <View style={styles.headerTitle}>
                            <Image
                                style={styles.headerImage}
                                source={require('../assets/heart_logo.png')}
                                resizeMode='contain'
                            />
                            <Text style={styles.headerText}>{props.children}</Text>
                        </View>// App Logo
                    ),
                })}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={HomeStack}
                    options={{ title: 'GameZone' }}  
                />
                <Drawer.Screen 
                    name="About" 
                    component={AboutStack}
                    options={{ title: 'About GameZone' }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})

export default AppDrawer



