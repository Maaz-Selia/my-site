interface Props {
    size: string,
    orientation: string
}

const Line = ( { size, orientation }: Props) => {

  let width = orientation == 'h' ? size : '1vh';
  let height = orientation == 'v' ? size : '1vh';

  return (
    <div style={{width: width, height: height, borderWidth: 2, borderColor: '#494037'}} />
  )
}

export default Line