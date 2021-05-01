import gql from "graphql-tag";

const RESOURCES_QUERY = gql`
  query Resources {
    resources {
      slug
      title
      description
      content {
          url
      }
      imagePreview {
        url
      }
    }
  }
`;

export default RESOURCES_QUERY;