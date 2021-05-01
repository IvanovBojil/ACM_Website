import React from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({ resource }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? resource.imagePreview.url
      : process.env.REACT_APP_BACKEND_URL + resource.imagePreview.url;
    const contentUrl = 
        process.env.NODE_ENV !== "development"
            ? resource.content[0].url
            : process.env.REACT_APP_BACKEND_URL + resource.content[0].url;
    console.log(resource.content);
  return (
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={imageUrl}
            alt={resource.imagePreview.url}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="title" className="uk-text-large">
            {resource.title}
          </p>
          <p id="description" className="uk-text-uppercase">
            {resource.description}
          </p>
          <p id="description" className="uk-text-uppercase">
            <a href={contentUrl} download>Download</a>
          </p>
        </div>
      </div>
  );
};

export default ResourceCard;