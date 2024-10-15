import type { ReactNode, HTMLAttributes } from 'react'
import './index.css'
type TypeButton = {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
} & HTMLAttributes<HTMLButtonElement>

const Button = (props: TypeButton) => {
  return (
    <button
      {...props}
      className={`note-button ${props.className} ${props.variant}`}
    >
      {props.children}
    </button>
  )
}

export default Button
