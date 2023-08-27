import React, { Component } from 'react';

import Homeit from './Homeit'; // Import the BlogPost component
import './Homee.css'; // Import your CSS styles

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://hn.algolia.com/api/v1/search?tags=story');
      const data = await response.json();
      this.setState({ posts: data.hits, loading: false });
    } 
    catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { posts, loading } = this.state;
 
    return (
      <div className='blog-container'>
        <h1>Blog Posts</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='blog-list'>
            {posts.map(post => (
              <Homeit key={post.objectID} post={post} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
