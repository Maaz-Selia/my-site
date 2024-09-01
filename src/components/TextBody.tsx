import { Flex, Heading, Text } from '@chakra-ui/react'

const Body = () => {
  return (
    <>
    <Heading as='i' fontSize={'6xl'}>Maaz Selia</Heading>
    <Flex justifyContent={'center'} textIndent={'10%'} pt={10}>
      <Text as='i' fontSize={'3xl'}>I love building and tinkering; getting my hands dirty with my motorbike; learning to play the guitar and practicing Jiu-Jitsu; as well as: reading, travelling, and spending time with family and friends.</Text>
    </Flex>
    </>
  )
}

export default Body