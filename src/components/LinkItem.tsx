import { ReactNode } from "react";

interface Props {
    link: string;
    children: ReactNode;
}

const LinkItem = ({ link, children }: Props) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
        {children}
    </a>
  )
}

export default LinkItem