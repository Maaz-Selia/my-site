import { HStack, useColorMode } from '@chakra-ui/react'
import { BiLogoGithub, BiLogoYoutube, BiLogoLinkedinSquare, BiSun, BiSolidMoon } from "react-icons/bi";
import LinkItem from './LinkItem';
import Line from './Line';

const LinkBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const iconSize = 35;

    return (
        <HStack maxWidth='100%' alignItems='center' justifyContent='left' gap={20} paddingLeft={10}>
            <Line size='100%' orientation='h'/>
            <LinkItem destination='https://github.com/Maaz-Selia' >
                <BiLogoGithub className='icon' size={iconSize} />
            </LinkItem>
            <LinkItem destination='https://www.youtube.com/@_masmoto'>
                <BiLogoYoutube className='icon' size={iconSize} />
            </LinkItem>
            <LinkItem destination='https://www.linkedin.com/in/maaz-selia'>
                <BiLogoLinkedinSquare className='icon' size={iconSize} />
            </LinkItem>
            <a onClick={toggleColorMode} style={{cursor: 'pointer'}} >
                { colorMode === 'light' ? <BiSolidMoon className='icon' size={iconSize} /> : <BiSun className='icon' size={iconSize} /> }
            </a>
        </HStack>
    )
}

export default LinkBar