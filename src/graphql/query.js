import { gql } from "@apollo/client";

export const getTodoList = gql`
  query MyQuery {
    exercise_todolist {
      is_done
      id
      title
    }
  }
`;

export const getTodoListByUserId = gql`
  query MyQuery($user_id: Int!) {
    exercise_todolist(where: { user_id: { _eq: $user_id } }) {
      is_done
      id
      title
    }
  }
`;
