import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug: String!){
    articles(where: {slug: $slug}) {
      slug
      title
      content
      description
      category {
        slug
        name
      }
      image {
        url
      }
      publishedAt
    }
  }
`;

export default ARTICLE_QUERY;