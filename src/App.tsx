import { Grid, GridItem } from "@chakra-ui/react"

function App() {

  return (
    <Grid h='100%'
          templateColumns='repeat(14, 1fr)'
          templateRows='repeat(14, 1fr)'
          gap={4}
    >
      <GridItem colStart={2} colSpan={1} rowStart={2} rowSpan={12}>
        NavBar
      </GridItem>
      <GridItem colStart={3} colSpan={8} rowStart={5} rowSpan={1}>
        LinkBar
      </GridItem>
      <GridItem colStart={3} colSpan={9} rowStart={9} rowSpan={3}>
        TextBody
      </GridItem>
      <GridItem colStart={7} colSpan={2} rowStart={13} rowSpan={1}>
        DownArrow
      </GridItem>
    </Grid>
  )
}

export default App
