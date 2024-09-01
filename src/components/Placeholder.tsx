import { GridItem, Text } from "@chakra-ui/react"

interface Props {
    id: string
}

const Placeholder = ({ id }: Props) => {
  return (
    <>
        <GridItem colStart={4} colSpan={8} rowStart={2} rowSpan={1} alignItems='center'>
            <Text as='i' fontSize='5xl' opacity='20%' textAlign='center' letterSpacing='4vw' whiteSpace='nowrap'>// {id}</Text>
        </GridItem>
        <GridItem colStart={6} colSpan={5} rowStart={7} rowSpan={2}
                    display='flex' flexDirection='column' alignItems='center'  justifyContent='center'
                    bgColor='var(--chakra-colors-chakra-body-text)' color='var(--chakra-colors-chakra-body-bg)'>
            <Text as='b' fontSize='4xl' textAlign='center' letterSpacing='1vw' whiteSpace='nowrap'>UNDER</Text>
            <Text as='b' fontSize='4xl' textAlign='center' letterSpacing='1vw' whiteSpace='nowrap'>CONSTRUCTION</Text>
        </GridItem>
    </>
  )
}

export default Placeholder