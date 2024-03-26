import { VStack } from '@chakra-ui/react'
import VerticalText from './VerticalText'

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