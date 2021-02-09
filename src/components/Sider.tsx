import React, { FC } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Menu from './Menu'
import './Sider.css'

interface IProps {
}

const Sider: FC<IProps> = props => {
  const {
    avatar: {
      publicURL
    },
    site: {
      siteMetadata: {
        author: {
          summary,
        },
        title,
      }
    }
  } = useStaticQuery(graphql`
    {
      avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
        publicURL
      }
      site {
        siteMetadata {
          author {
            summary
          }
          title
        }
      }
    }
  `)

  return (
    <div className="az-sider">
      <div className="overlay">
        <div className="avatar">
          <img src={publicURL} alt=""/>
        </div>
      </div>
      <div className="infos">
        <div>
          <div className="infos-title">
            <Link to="/">{title}</Link>
          </div>
          <div className="infos-summary">
            <span>{summary}</span>
          </div>
        </div>
        <Menu />
        <span style={{ color: '#696969' }}>...</span>
      </div>
    </div>
  )
}

export default Sider
