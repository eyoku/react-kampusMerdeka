import { gql } from "@apollo/client";

export const SubscriptionTodo = gql`
  subscription MySubscription {
    exercise_todolist {
      id
      is_done
      title
    }
  }
`;
