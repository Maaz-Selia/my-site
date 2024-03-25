import { ReactNode } from "react";

interface Props {
    destination: string;
    children: ReactNode;
}

const LinkItem = ({ destination, children }: Props) => {
  return (
    <a href={destination} target='_blank' rel='noopener noreferrer'>
        {children}
    </a>
  )
}

export default LinkItem