import { Button, VStack } from '@chakra-ui/react'
import '../index.css'

const NavBar = () => {
    return (
        <VStack alignItems='center' justifyContent='right' gap={10}>
            <Button className='vertical-text'>Projects</Button>
            <Button className='vertical-text'>Interests</Button>
            <Button className='vertical-text'>Contact</Button>
        </VStack>
    )
}

export default NavBar