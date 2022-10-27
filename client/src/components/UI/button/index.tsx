import React, {FC} from 'react'

import cl from './cl.module.scss'

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: JSX.Element | string | React.ReactNode[]
}

export const Button: FC<ButtonProps> = ({onClick, children}) => {
  return (
    <button 
      onClick={onClick}
      className={cl.button}
    >{children}</button>
  )
}
