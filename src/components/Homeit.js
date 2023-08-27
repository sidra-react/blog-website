import React from 'react';
import  { useState } from 'react';

const Homeit = ({ post }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className='blog-post'>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <a href={post.url} target='_blank' rel='noopener noreferrer'>
        Read more
      </a>
      <button className='like-button' onClick={() => setLikes(likes + 1)}>
        Like
      </button>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default Homeit;
