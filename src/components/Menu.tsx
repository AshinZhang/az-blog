import React, { FC } from 'react'
import { Link } from 'gatsby'

import './Menu.css'

interface IProps {
}

const Menu: FC<IProps> = props => {
  const a = ['主页', '所有文章', '标签', '分类', '关于我']
  return (
    <div className="az-menu">
      {
        a.map(item => (
          <div key={item} className="menu-item">
            <Link to="/">{item}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Menu
