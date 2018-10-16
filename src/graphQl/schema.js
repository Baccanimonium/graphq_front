import gql from 'graphql-tag';

export const GET_SEARCHBAR_STATE = gql`
  {
    openSearchBar @client
  }
`;

export const TOGGLE_SEARCHBAR_STATE = gql`
    mutation {
        toggleSearchBar @client
    }
`;

export const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;
