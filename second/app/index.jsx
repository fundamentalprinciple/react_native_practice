import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router' 

import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemedCard'
import ThemedText from '../components/ThemedText'

import Vector from '../assets/img/Vector.svg'
import Spacer from '../components/Spacer'


const Home = () => {
    return (
        <ThemedView style={[styles.container]}>
            <Vector width={120} height={120}/>
	        <ThemedText style={[styles.title]}>Home</ThemedText>
            <Spacer height={20}/>

            <ThemedText>This is cross platform app.</ThemedText>
            <ThemedCard style={[styles.card]}>
               <ThemedText>Card from nested view</ThemedText> 
            </ThemedCard>
            <Link style={[styles.link]} href="/about">
                <ThemedText>About</ThemedText>
            </Link>
            <Link style={[styles.link]} href="/contact">
                <ThemedText>Contact</ThemedText>
            </Link>
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
