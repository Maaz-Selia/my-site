import { Text } from "@chakra-ui/react";
import { ReactNode } from "react"
import '../index.css'

interface Props {
    children: ReactNode;
    size: string;
}

const VerticalText = ({ children, size }: Props) => {
  return (
    <Text fontSize={size} className="vertical-text">{children}</Text>
  )
}

export default VerticalText