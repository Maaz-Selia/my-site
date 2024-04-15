import { VStack } from '@chakra-ui/react'
import NavBarText from './NavBarText'
import '../index.css'
import HorizontalLine from './Line';

const NavBar = () => {
    
    const fontSize = '2xl';

    return (
        <>
            <VStack alignItems='center' justifyContent='right' gap={10} display={'flex'}>
                <div style={{height: '10vh', borderWidth: 2, borderColor: '#494037'}} />
                <NavBarText size={fontSize}>Contact</NavBarText>
                <NavBarText size={fontSize}>Interests</NavBarText>
                <NavBarText size={fontSize}>Projects</NavBarText>
                <div style={{height: '10vh', borderWidth: 2, borderColor: '#494037'}} />
            </VStack>
        </>
    )
}

export default NavBar