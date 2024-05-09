import { GridItem } from '@chakra-ui/react'
import ProjectsCard from './ProjectsCard'

const ProjectsGrid = () => {

  return (
    <>
        <GridItem colStart={4} colSpan={3} rowStart={4} rowSpan={4}>
            <ProjectsCard title='Study of rawg.io'/>
        </GridItem>
        <GridItem colStart={9} colSpan={3} rowStart={4} rowSpan={4}>
            <ProjectsCard title='On the way!' />
        </GridItem>
        <GridItem colStart={4} colSpan={3} rowStart={9} rowSpan={4}>
            <ProjectsCard title='On the way!' />
        </GridItem>
        <GridItem colStart={9} colSpan={3} rowStart={9} rowSpan={4}>
            <ProjectsCard title='On the way!' />
        </GridItem>
    </>
  )
}

export default ProjectsGrid