interface Props {
    width: string
    rotate: boolean
}

const HorizontalLine = ( { width, rotate}: Props) => {
    let transform = rotate ? 'rotate(-90deg)' : 'rotate(0deg)';

  return (
    <div style={{width: width, borderWidth: 2, borderColor: '#494037', transform: transform}} />
  )
}

export default HorizontalLine