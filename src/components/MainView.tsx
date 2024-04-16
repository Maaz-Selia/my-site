import { GridItem } from '@chakra-ui/react'
import LinkBar from './LinkBar'
import TextBody from './TextBody'

const MainView = () => {
  return (
    <>
        <GridItem colStart={3} colSpan={8} rowStart={5} rowSpan={1}>
            <LinkBar />
        </GridItem>
        <GridItem colStart={4} colSpan={9} rowStart={9} rowSpan={3}>
            <TextBody />
        </GridItem>
    </>
  )
}

export default MainView