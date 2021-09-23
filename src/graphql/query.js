import { gql } from "@apollo/client";

export const getTodoList = gql`
  query MyQuery {
    todolist {
      is_done
      id
      title
    }
  }
`;

export const getTodoListByUserId = gql`
  query MyQuery($user_id: Int!) {
    todolist(where: { user_id: { _eq: $user_id } }) {
      is_done
      id
      title
    }
  }
`;
