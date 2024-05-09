import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react"

interface Props {
  title: string
}

const ProjectsCard = ({ title }: Props) => {
  return (
    <Card width='100%' height='100%' borderRadius='0'>
        <CardHeader bgColor='var(--chakra-colors-chakra-body-text)' borderTopRadius='5' padding='2' textAlign='center'>
            <Text as='i' fontSize='2xl' color='var(--chakra-colors-chakra-body-bg)' letterSpacing='0.3vw'>{title}</Text>
        </CardHeader>
        <CardBody overflow='hidden'>
          <Image src={"src\\assets\\rawgsnap.jfif"} />
        </CardBody>
    </Card>
  )
}

export default ProjectsCard