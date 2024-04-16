import { GridItem } from '@chakra-ui/react'
import ProjectsCard from './ProjectsCard'

const ProjectsGrid = () => {

  return (
    <>
        <GridItem colStart={4} colSpan={3} rowStart={4} rowSpan={4}>
            <ProjectsCard />
        </GridItem>
        <GridItem colStart={9} colSpan={3} rowStart={4} rowSpan={4}>
            <ProjectsCard />
        </GridItem>
        <GridItem colStart={4} colSpan={3} rowStart={9} rowSpan={4}>
            <ProjectsCard />
        </GridItem>
        <GridItem colStart={9} colSpan={3} rowStart={9} rowSpan={4}>
            <ProjectsCard />
        </GridItem>
    </>
  )
}

export default ProjectsGrid