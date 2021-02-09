import React from 'react'
import { Link } from 'gatsby'

import './Button.css'

interface iProps {
  url?: string,
  onClick?: any,
  color?: string,
}

const Button: React.FC<iProps> = ({
  children,
  url,
  onClick,
}) => {
  if (url) {
    return <Link to={url} className="az-button">{children}</Link>
  }
  return (
    <span
      className="az-button"
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default Button
