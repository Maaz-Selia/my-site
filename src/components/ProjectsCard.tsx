import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react"

const ProjectsCard = () => {
  return (
    <Card width='100%' height='100%' borderRadius='0'>
        <CardHeader bgColor='var(--chakra-colors-chakra-body-text)' borderTopRadius='5' padding='2' textAlign='center'>
            <Text as='i' fontSize='2xl' color='var(--chakra-colors-chakra-body-bg)' letterSpacing='0.3vw'>On the way!</Text>
        </CardHeader>
        <CardBody></CardBody>
    </Card>
  )
}

export default ProjectsCard