import { VStack } from '@chakra-ui/react'
import VerticalText from './VerticalText'
import '../index.css'

const NavBar = () => {
    return (
        <VStack alignItems='center' justifyContent='right' gap={10}>
            <VerticalText>Projects</VerticalText>
            <VerticalText>Interests</VerticalText>
            <VerticalText>Contact</VerticalText>
        </VStack>
    )
}

export default NavBar