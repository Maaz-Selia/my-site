import { VStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <VStack alignItems='center' justifyContent='right' gap={10}>
            <Button>Projects</Button>
            <Button>Interests</Button>
            <Button>Contact</Button>
        </VStack>
    )
}

export default NavBar