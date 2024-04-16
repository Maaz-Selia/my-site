import { VStack, Text } from '@chakra-ui/react'
import Line from './Line';
import '../index.css'
import Contact from './Contact';

interface Props {

    setCurrentView: (currentView: JSX.Element) => void;

}

const NavBar = ( {setCurrentView }: Props) => {
    
    const fontSize = '2xl';

    return (
        <VStack maxHeight='100%' gap={10}>
            <Line size='10vh' orientation='v' />
            <Text size={fontSize} className='vertical-text' onClick={() => setCurrentView(<Contact />)}>Contact</Text>
            <Text size={fontSize} className='vertical-text' onClick={() => console.log('clicked Interests')}>Interests</Text>
            <Text size={fontSize} className='vertical-text' onClick={() => console.log('clicked Projects')}>Projects</Text>
            <Line size='40vh' orientation='v' />
        </VStack>
    )
}

export default NavBar