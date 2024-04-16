import { useState } from 'react';
import NavBar from './NavBar';
import MainView from './MainView';
import { Grid, GridItem, HStack } from '@chakra-ui/react';
import { BiHomeHeart } from "react-icons/bi";

const Homepage = () => {

    const [ currentView, setCurrentView ] = useState<JSX.Element>(<MainView />);
     
    return (
        <Grid h='100vh'
            templateColumns='repeat(14, 1fr)'
            templateRows='repeat(14, 1fr)'
            gap={3}
        >
        <GridItem colStart={2} colSpan={1} rowStart={2} rowSpan={12}>
            <NavBar setCurrentView={setCurrentView}/>
        </GridItem>
        {currentView}
        <GridItem colStart={7} colSpan={2} rowStart={14} rowSpan={1}>
            <HStack justifyContent='center'><BiHomeHeart size={35} onClick={() => console.log('clicked Homepage')} /></HStack>
        </GridItem>
        </Grid>
    )
}

export default Homepage