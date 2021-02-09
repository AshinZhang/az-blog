import React from 'react'
import { Link } from 'gatsby'
// import { ViewIcon } from '../icon/svg-icon'
import './Card.css'

interface iProps {
  url: string,
  tags: string[],
  title: string,
  date: string,
  timeToRead: number,
}

const Card: React.FC<iProps> = ({
  url,
  tags,
  title,
  date,
  timeToRead,
}) => {
  return (
    <div className="az-card" style={{ transform: `translateX(${0}px)`}}>
      <div style={{ height: '0px', background: '#f0f0f0' }}>
      </div>
      <div className="card-content">
        <div className="card-tag">
          {tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="card-title">
          <Link to={url}>{title}</Link>
        </div>
        <div className="card-footer">
          <span>{date}</span>
          <span className="view-count">
            <span>{`${timeToRead} 分钟阅读`}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card
