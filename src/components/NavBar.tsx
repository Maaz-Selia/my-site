import { VStack } from '@chakra-ui/react'
import NavBarText from './NavBarText'
import '../index.css'
import Line from './Line';

const NavBar = () => {
    
    const fontSize = '2xl';

    return (
        <VStack maxHeight='100%' gap={10}>
            <Line size='10vh' orientation='v' />
            <NavBarText size={fontSize}>Contact</NavBarText>
            <NavBarText size={fontSize}>Interests</NavBarText>
            <NavBarText size={fontSize}>Projects</NavBarText>
            <Line size='10vh' orientation='v' />
        </VStack>
    )
}

export default NavBar