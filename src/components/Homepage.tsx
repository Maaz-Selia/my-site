import { Button, Grid, GridItem, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { darkBrown, lightBrown } from '../constants/myColors';

const Homepage = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const bg = useColorModeValue(lightBrown, darkBrown);
    const altbg = useColorModeValue(darkBrown, lightBrown);

    

  return (
    <Grid h='100vh'
          bg={bg}
          templateColumns='repeat(14, 1fr)'
          templateRows='repeat(14, 1fr)'
          gap={3}
    >
      <GridItem colStart={2} colSpan={1} rowStart={2} rowSpan={12} bg={altbg}>
        NavBar
      </GridItem>
      <GridItem colStart={3} colSpan={8} rowStart={5} rowSpan={1} bg={altbg}>
        LinkBar
        <Button onClick={toggleColorMode}>Toggle { colorMode === 'light' ? 'dark' : 'light' }</Button>
      </GridItem>
      <GridItem colStart={3} colSpan={10} rowStart={9} rowSpan={3} bg={altbg}>
        TextBody
      </GridItem>
      <GridItem colStart={7} colSpan={2} rowStart={14} rowSpan={1} bg={altbg}>
        DownArrow
      </GridItem>
    </Grid>
  )
}

export default Homepage