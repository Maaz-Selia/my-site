import { Button, HStack, useColorMode } from '@chakra-ui/react'

const LinkBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack alignItems='center' justifyContent='right' gap={2}>
            <a href='https://github.com/Maaz-Selia' target='_blank' rel='noopener noreferrer'>
                <Button>GitHub</Button>
            </a>
            <a href='www.youtube.com/@_masmoto' target='_blank' rel='noopener noreferrer'>
                <Button>Youtube</Button>
            </a>
            <a href='https://www.linkedin.com/in/maaz-selia' target='_blank' rel='noopener noreferrer'>
                <Button>LinkdIn</Button>
            </a>
            <Button onClick={toggleColorMode}>Toggle { colorMode === 'light' ? 'dark' : 'light' }</Button>
        </HStack>
    )
}

export default LinkBar