import { Button, HStack, useColorMode } from '@chakra-ui/react'
import { BiLogoGithub, BiLogoYoutube, BiLogoLinkedinSquare, BiSun, BiSolidMoon } from "react-icons/bi";
import { iconSize } from '../constants/mySizes';


const LinkBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack alignItems='center' justifyContent='right' gap={2}>
            <a href='https://github.com/Maaz-Selia' target='_blank' rel='noopener noreferrer'>
                <BiLogoGithub size={iconSize} />
            </a>
            <a href='www.youtube.com/@_masmoto' target='_blank' rel='noopener noreferrer'>
                <BiLogoYoutube size={iconSize} />
            </a>
            <a href='https://www.linkedin.com/in/maaz-selia' target='_blank' rel='noopener noreferrer'>
                <BiLogoLinkedinSquare size={iconSize} />
            </a>
            <a onClick={toggleColorMode} >
                { colorMode === 'light' ? <BiSolidMoon /> : <BiSun /> }
            </a>        
        </HStack>
    )
}

export default LinkBar