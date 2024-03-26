import { Text } from "@chakra-ui/react";
import { ReactNode } from "react"
import '../index.css'

interface Props {
    children: ReactNode;    
}

const VerticalText = ({ children }: Props) => {
  return (
    <Text className="vertical-text">{children}</Text>
  )
}

export default VerticalText