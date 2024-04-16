import { GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectsCard from './ProjectsCard'

const ProjectsGrid = () => {

  return (
    <>
        <GridItem colStart={4} colSpan={3} rowStart={4} rowSpan={4} bgColor='var(--chakra-colors-chakra-body-text)'>
            <ProjectsCard />
        </GridItem>
        <GridItem colStart={9} colSpan={3} rowStart={4} rowSpan={4} bgColor='var(--chakra-colors-chakra-body-text)'>
            <ProjectsCard />
        </GridItem>
        <GridItem colStart={4} colSpan={3} rowStart={9} rowSpan={4} bgColor='var(--chakra-colors-chakra-body-text)'>
            <ProjectsCard />
        </GridItem>
        <GridItem colStart={9} colSpan={3} rowStart={9} rowSpan={4} bgColor='var(--chakra-colors-chakra-body-text)'>
            <ProjectsCard />
        </GridItem>
    </>
  )
}

export default ProjectsGrid