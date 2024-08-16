import { VStack, Text } from '@chakra-ui/react'
import Line from './Line';
import '../index.css'
import Travels from './Travels';
import Projects from './Projects';
import MainView from './MainView';

interface Props {
    currentView: JSX.Element;
    setCurrentView: (currentView: JSX.Element) => void;
}

const NavBar = ( {setCurrentView }: Props) => {

    const fontSize = '2xl';

    return (
        <VStack maxHeight='100%' gap={10}>
            <Line size='10vh' orientation='v' />
            <Text fontSize={fontSize} className='vertical-text' onClick={() => setCurrentView(<Travels />)}>Travels</Text>
            <Text fontSize={fontSize} className='vertical-text' onClick={() => setCurrentView(<Projects />)}>Projects</Text>
            <Text fontSize={fontSize} className='vertical-text' onClick={() => setCurrentView(<MainView />)}>Home</Text>
            <Line size='40vh' orientation='v' />
        </VStack>
    )
}

export default NavBar