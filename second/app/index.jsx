import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import { Link } from 'expo-router' 
import { Colors } from '../constants/Colors'

import Photo from '../assets/img/photo.png'

const Home = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light 
   
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.title, { color: theme.text }]}>Home</Text>
            <Text style={[{ marginTop: 10, marginBottom: 30}, { color: theme.text }]}>This is a cross platform app</Text>
            <View style={styles.card}>
               <Text>Card from nested view</Text> 
            </View>
            <Link style={[styles.link, { color: theme.iconColor, borderBottomColor: theme.iconColor }]} href="/about">About</Link>
            <Link style={[styles.link, { color: theme.iconColor, borderBottomColor: theme.iconColor }]} href="/contact">Contact</Link>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    img: {
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,1)',
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
});
