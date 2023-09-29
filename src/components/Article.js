import React from 'react';

const Article = ({ post }) => {
  // Destructure the post object to access its properties
  const { title, date, preview } = post;

  // Check if date is missing or undefined, and provide a default value if needed
  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;




