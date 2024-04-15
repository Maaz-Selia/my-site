interface Props {
    size: string,
    orientation: string
}

const Line = ( { size, orientation }: Props) => {

  let width = orientation === 'h' ? size : '0';
  let height = orientation === 'v' ? size : '0';

  return (
    <div style={{width: width, height: height, borderWidth: 2, borderColor: '#494037'}} />
  )
}

export default Line