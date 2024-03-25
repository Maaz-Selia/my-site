import { VStack } from '@chakra-ui/react'
import '../index.css'
import NavItem from './NavItem'

const NavBar = () => {
    return (
        <VStack alignItems='center' justifyContent='right' gap={10}>
            <NavItem destination='Projects' />
            <NavItem destination='Interests' />
            <NavItem destination='Contact'/>
        </VStack>
    )
}

export default NavBar