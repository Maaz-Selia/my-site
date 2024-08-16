import { Flex, Heading, Text } from '@chakra-ui/react'

const Body = () => {
  return (
    <>
    <Heading as='i' fontSize={'6xl'}>Maaz Selia</Heading>
    <Flex justifyContent={'center'} textIndent={'10%'} pt={10}>
      <Text as='i' fontSize={'3xl'}>I love building and tinkering; getting my hands dirty with my motorbike; humbling myself attempting to play guitar and being folded in half practicing Jiu-Jitsu; as well as: reading, travelling, and sharing moments with family and friends.</Text>
    </Flex>
    </>
  )
}

export default Body