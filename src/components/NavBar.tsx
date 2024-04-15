import { VStack } from '@chakra-ui/react'
import NavBarText from './NavBarText'
import '../index.css'

const NavBar = () => {
    
    const fontSize = '2xl';

    return (
        <>
            <VStack alignItems='center' justifyContent='right' gap={10} display={'flex'}>
                <div style={{width: '100%', borderWidth: 1, transform: 'rotate(-90deg)', display: 'inline'}}/>
                <NavBarText size={fontSize}>Contact</NavBarText>
                <NavBarText size={fontSize}>Interests</NavBarText>
                <NavBarText size={fontSize}>Projects</NavBarText>
                <div style={{width: '100%', borderWidth: 1, transform: 'rotate(-90deg)'}}/>
            </VStack>
        </>
    )
}

export default NavBar