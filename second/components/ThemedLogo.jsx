import { Image, useColorScheme } from 'react-native'

/*import Logo from '../assets/img/Vector.svg'*/

const ThemedLogo = () => {
    const colorScheme = useColorScheme()
    /*const logo = colorScheme === 'dark' ? Logo : Logo*/

    return (
            <Image source={'../assets/img/Vector.svg'} />
    )
}

export default ThemedLogo
