import React from 'react';
import { Link } from 'gatsby'

import './Tag.css'

interface iProps {
  content: string
}

const Tag: React.FC<iProps> = props => {
  const { content } = props
  return (
    <Link to="/" className="az-tag">
      {content}
    </Link>
  );
}

export default Tag