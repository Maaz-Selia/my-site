import { Text } from "@chakra-ui/react";
import { ReactNode } from "react"
import '../index.css'

interface Props {
    children: ReactNode;
    size: string;
}

const NavBarText = ({ children, size }: Props) => {
  return (
    <Text fontSize={size} className="vertical-text" onClick={() => console.log('Clicked')}>{children}</Text>
  )
}

export default NavBarText