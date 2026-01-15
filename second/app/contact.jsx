import { StyleSheet, View, Text, Image } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const Contact = () => {
    return (
        <ThemedView style={styles.container}>
            <Text style={styles.title}>Contact</Text>
            <Link style={styles.link} href="/">Home</Link>
            <Link style={styles.link} href="/about">About</Link>
        </ThemedView>
    )
} 

export default Contact

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
