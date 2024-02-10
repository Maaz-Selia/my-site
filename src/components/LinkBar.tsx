import { Button, HStack, Text, useColorMode } from '@chakra-ui/react'

const LinkBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack alignItems='center' justifyContent='right' gap={2}>
            <Button>GitHub</Button>
            <Button>Youtube</Button>
            <Button>LinkdIn</Button>
            <Button onClick={toggleColorMode}>Toggle { colorMode === 'light' ? 'dark' : 'light' }</Button>
        </HStack>
    )
}

export default LinkBar