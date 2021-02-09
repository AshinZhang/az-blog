import React, { FC } from 'react'

import './Layout.css'

interface IProps {
}

const Layout: FC<IProps> = ({
  children
}) => {
  return (
    <div className="az-layout">
      {children}
    </div>
  )
}

export default Layout
