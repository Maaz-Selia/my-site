import { Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './NavBar';
import LinkBar from './LinkBar';
import TextBody from './TextBody';
import { BiHomeHeart } from "react-icons/bi";

const Homepage = () => {
     
    return (
        <Grid h='100vh'
            templateColumns='repeat(14, 1fr)'
            templateRows='repeat(14, 1fr)'
            gap={3}
        >
        <GridItem colStart={2} colSpan={1} rowStart={2} rowSpan={12}>
            <NavBar />
        </GridItem>
        <GridItem colStart={3} colSpan={8} rowStart={5} rowSpan={1}>
            <LinkBar />
        </GridItem>
        <GridItem colStart={3} colSpan={10} rowStart={9} rowSpan={3}>
            <TextBody />
        </GridItem>
        <GridItem colStart={7} colSpan={2} rowStart={14} rowSpan={1}>
            <HStack justifyContent='center'><BiHomeHeart size={35} /></HStack>
        </GridItem>
        </Grid>
    )
}

export default Homepage