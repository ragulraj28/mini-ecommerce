import React from 'react';
import './EmptyState.scss';

const EmptyState = ({image, title, excerpt}) => {
  return (
    <div className="empty-state">
            <figure>
              <img src={image} alt={title} />
            </figure>
            <h4 className="title">{title}</h4>
            <p>{excerpt}</p>
          </div>
  )
}

export default EmptyState