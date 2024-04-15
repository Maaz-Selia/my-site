import { HStack, useColorMode } from '@chakra-ui/react'
import { BiLogoGithub, BiLogoYoutube, BiLogoLinkedinSquare, BiSun, BiSolidMoon } from "react-icons/bi";
import LinkItem from './LinkItem';
import Line from './Line';

const LinkBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const iconSize = 35;

    return (
        <HStack alignItems='center' justifyContent='right' gap={10}>
            <Line size='50vh' orientation='h'/>
            <LinkItem destination='https://github.com/Maaz-Selia' >
                <BiLogoGithub size={iconSize} />
            </LinkItem>
            <LinkItem destination='https://www.youtube.com/@_masmoto'>
                <BiLogoYoutube size={iconSize} />
            </LinkItem>
            <LinkItem destination='https://www.linkedin.com/in/maaz-selia'>
                <BiLogoLinkedinSquare size={iconSize} />
            </LinkItem>
            <a onClick={toggleColorMode} style={{cursor: 'pointer'}} >
                { colorMode === 'light' ? <BiSolidMoon size={iconSize} /> : <BiSun size={iconSize} /> }
            </a>
        </HStack>
    )
}

export default LinkBar