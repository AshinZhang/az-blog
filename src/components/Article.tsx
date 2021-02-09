import React, { CSSProperties, FC } from 'react'
import { Link } from 'gatsby'

import Tag from './Tag'
import Button from './Button'
import { CalendarIcon, TagIcon } from '../icon/svg-icon'
import { ArticleDisplay } from '../type'

import './Article.css'

interface IProps {
  name: string,
  title: string,
  date: string,
  html: string,
  tags: string[],
  style?: CSSProperties,
  url?: string,
  display: ArticleDisplay,
}

const Article: FC<IProps> = ({
  name,
  title,
  date,
  html,
  tags,
  style,
  url,
  display,
}) => {
  let footerRight: JSX.Element
  switch (display) {
    case ArticleDisplay.full: {
      footerRight = (
        <span className="copyright">
          {`${new Date().getFullYear()} © ${name}`}
        </span>
      )
      break;
    }
    case ArticleDisplay.preview: {
      footerRight = <Button url={url}>阅读全文</Button>
      break;
    }
  }
  if (display === ArticleDisplay.full) {
  }
  return (
    <div className="az-article" style={style} >
      <header>
        <h1>
          {
            url ? <Link to={url}>{title}</Link> : title
          }
        </h1>
        <time>
          <CalendarIcon width={24} height={24} />
          <span style={{ marginLeft: 4 }}>{date}</span>
        </time>
      </header>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      {
        display === ArticleDisplay.preview && <Link to={url}>...</Link>
      }
      <footer>
        <div className="tags">
          <TagIcon width={24} height={24} />
          {
            tags.map(tag => <Tag key={tag} content={tag} />)
          }
        </div>
        {footerRight}
      </footer>
    </div >
  )
}

export default Article
