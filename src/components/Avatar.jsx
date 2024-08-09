import React from 'react';

const Avatar = (props) => {
  const img = `import.meta.env.BASE_URL${props.src}`;

  return <img src={img} alt="Testimonial Profile Photo" className="circle-img" />;
};

export default Avatar;