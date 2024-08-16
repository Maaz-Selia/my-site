import { GridItem, Text } from "@chakra-ui/react"
import ProjectsGrid from "./ProjectsGrid"

const Projects = () => {
  return (
    <>
        <GridItem colStart={4} colSpan={8} rowStart={2} rowSpan={1} alignItems='center'>
            <Text as='i' fontSize='5xl' opacity='20%' textAlign='center' letterSpacing='4vw' whiteSpace='nowrap'>// PROJECTS</Text>
        </GridItem>
        <ProjectsGrid />
    </>
  )
}

export default Projects