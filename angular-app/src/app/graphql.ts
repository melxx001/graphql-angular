import gql from 'graphql-tag'; // The gql function is used to parse the plain GraphQL code

import { Link } from './types';

// The name AllLinksQuery is the operation name and will be used by Apollo
// to refer to this query in its internals
export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

// Response interface
export interface AllLinkQueryResponse {
  allLinks: Link[];
  loading: boolean;
}
