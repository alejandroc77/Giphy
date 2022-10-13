import React from "react";

export const Gif = ({ id, url, title }) => {
  return (
    <>
      <a href={`#${id}`} className="Gif">
        <h4>{title}</h4>
        <small>{id}</small>
        <img src={url} alt={title} />
      </a>
    </>
  );
};
