import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router' 
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Vector from '../assets/img/Vector.svg'

const Home = () => {
    return (
        <ThemedView style={[styles.container]}>
            <Vector width={120} height={120}/>
	        <Text style={[styles.title]}>Home</Text>
            <Text style={[{ marginTop: 10, marginBottom: 30}]}>This is a cross platform app</Text>
            <View style={styles.card}>
               <Text>Card from nested view</Text> 
            </View>
            <Link style={[styles.link]} href="/about">About</Link>
            <Link style={[styles.link]} href="/contact">Contact</Link>
        </ThemedView>
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
