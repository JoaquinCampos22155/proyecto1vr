import React, { useEffect, useState } from 'react';
import './content.css'; 
import Card from '../card/card.jsx';
import NoPost from '../nopost/nopost.jsx'; // Importa el componente NoPost
import Loading from '../loading/loading.jsx'; // Importa el componente Loading

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false); // Una vez cargados los posts, establece loading en false
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false); // En caso de error, establece loading en false
      }
    }
    fetchData();
  }, []);

  // Si loading es true, muestra el componente Loading
  if (loading) {
    return (
      <div className="content-container">
        <Loading />
      </div>
    );
  }

  // Si no hay posts, muestra el componente NoPost
  if (posts.length === 0) {
    return (
      <div className="content-container">
        <NoPost />
      </div>
    );
  }

  // Si hay posts, muestra las tarjetas
  return (
    <div className="content-container">
      {posts.map((post, index) => (
        <Card 
          key={index} 
          id={index} 
          title={post.title} 
          description={post.description} 
          image={post.image} 
        />
      ))}
    </div>
  );
};

export default Content;
