import { useQuery } from "@apollo/client";
import { getTodoList } from "graphql/query";
import { SubscriptionTodo } from "graphql/subscribe";
export default function useGetTodo() {
  const { data, loading, error, subscribeToMore } = useQuery(getTodoList);
  const subscribeTodo = () => {
    subscribeToMore({
      document: SubscriptionTodo,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        console.log(data);
        return data;
        // jika insert
        // prev.todolist.push(data.todolist)
        // return prev
      },
    });
  };
  return {
    todolist: data ? data.exercise_todolist : [],
    loading,
    error,
    subscribeTodo,
  };
}
