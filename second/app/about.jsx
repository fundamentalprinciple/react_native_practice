import { StyleSheet, View, Text, Image } from 'react-native'
import { Link } from 'expo-router' 
import ThemedView from '../components/ThemedView'

const About = () => {
    return (
        <ThemedView style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Link style={styles.link} href="/">Home</Link>
            <Link style={styles.link} href="/contact">Contact</Link>
        </ThemedView>
    )
}

export default About

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
})
