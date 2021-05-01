import React from "react";
import ResourceCard from "../ResourceCard";

const Resources = ({ resources }) => {
  const leftArticlesCount = Math.ceil(resources.length / 5);
  const leftArticles = resources.slice(0, leftArticlesCount);
  const rightArticles = resources.slice(leftArticlesCount, resources.length);

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((resource, i) => {
            return <ResourceCard resource={resource} key={`resource__${resource.slug}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((resource, i) => {
              return <ResourceCard resource={resource} key={`resource__${resource.slug}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;