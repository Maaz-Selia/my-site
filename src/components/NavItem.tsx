import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react"
import '../index.css'

interface Props {
    destination: string;
}

const NavItem = ({ destination }: Props) => {
  return (
    <ChakraLink as={ReactRouterLink} className='vertical=text' >
        {destination}
    </ChakraLink>
  )
}

export default NavItem