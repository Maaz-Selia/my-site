import { VStack } from '@chakra-ui/react'
import VerticalText from './VerticalText'
import '../index.css'

const NavBar = () => {
    
    const fontSize = '2xl';

    return (
        <>
            <VStack alignItems='center' justifyContent='right' gap={10} display={'inline-flex'}>
                <div style={{width: '100%', borderWidth: 1, transform: 'rotate(-90deg)', display: 'inline'}}/>
                <VerticalText size={fontSize}>Contact</VerticalText>
                <VerticalText size={fontSize}>Interests</VerticalText>
                <VerticalText size={fontSize}>Projects</VerticalText>
                <div style={{width: '100%', borderWidth: 1, transform: 'rotate(-90deg)'}}/>
            </VStack>
        </>
    )
}

export default NavBar