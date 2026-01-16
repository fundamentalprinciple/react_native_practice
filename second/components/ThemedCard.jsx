import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Colors } from '../constant/Colors'

const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors{colorScheme} ?? Colors.light
    
    return (
        <View 
            style={[{ backgroundColor: theme.uiBackground }, styles.card,
            style ]}
        />
    )
}
export default ThemedView

const style = StyleSheet.create({ 
    card: {
        borderRadius: 5,
        padding: 20
    }
 })
