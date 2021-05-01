import React from "react";
import Resources from "../../components/Resources";
import Query from "../../components/Query";
import RESOURCES_QUERY from "../../queries/resource/resources";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>UTA Resources</h1>
          <Query query={RESOURCES_QUERY}>
            {({ data: { resources } }) => {
              return <Resources resources={resources} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;