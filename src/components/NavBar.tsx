import { Button, VStack } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {
    return (
        <VStack>
            <Button>Projects</Button>
            <Button>Interest</Button>
            <Button>Contact</Button>
        </VStack>
    )
}

export default NavBar