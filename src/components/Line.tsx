interface Props {
    size: string,
    orientation: string
}

const Line = ( { size, orientation }: Props) => {

  let width = orientation === 'h' ? size : '0';
  let height = orientation === 'v' ? size : '0';

  return (
    <hr style={{width: width, height: height, borderWidth: 1, borderColor: 'var(--chakra-colors-chakra-body-text)', borderRadius: '1000'}} />
  )
}

export default Line