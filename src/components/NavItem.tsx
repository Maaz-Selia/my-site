import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react"

interface Props {
    destination: string
    label: string;
}

const NavItem = ({ destination, label}: Props) => {
  return (
    <ChakraLink as={ReactRouterLink} to={destination}>
        {label}
    </ChakraLink>
  )
}

export default NavItem