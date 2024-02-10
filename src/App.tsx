import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react"

function App() {

  //const bg = useColorModeValue('lightBrown', 'darkBrown');

  return (
    <>
    
    <Grid h='100vh'
          
          templateColumns='repeat(14, 1fr)'
          templateRows='repeat(14, 1fr)'
          gap={3}
    >
      <GridItem colStart={2} colSpan={1} rowStart={2} rowSpan={12} bg='darkBrown'>
        NavBar
      </GridItem>
      <GridItem colStart={3} colSpan={8} rowStart={5} rowSpan={1} bg='darkBrown'>
        LinkBar
      </GridItem>
      <GridItem colStart={3} colSpan={10} rowStart={9} rowSpan={3} bg='darkBrown'>
        TextBody
      </GridItem>
      <GridItem colStart={7} colSpan={2} rowStart={14} rowSpan={1} bg='darkBrown'>
        DownArrow
      </GridItem>
    </Grid>
    <Grid h='100vh'></Grid>
    </>
  )
}

export default App
