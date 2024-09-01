import { GridItem, Text } from "@chakra-ui/react"

const Placeholder = () => {
  return (
    <>
        <GridItem colStart={4} colSpan={8} rowStart={7} rowSpan={1} alignItems='center'>
            <Text as='i' fontSize='5xl' opacity='20%' textAlign='center' letterSpacing='4vw' whiteSpace='nowrap'>UNDER</Text>
            <Text as='i' fontSize='5xl' opacity='20%' textAlign='center' letterSpacing='4vw' whiteSpace='nowrap'>CONSTRUCTION</Text>
        </GridItem>
    </>
  )
}

export default Placeholder