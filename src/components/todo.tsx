import React from "react";
import { featchTodos } from "../Apis/todoApiServes";
import { UseAppDispatch, useAppSelector } from "../store/hooks/customHooks";
import Loader from "../common/loader";

const Todo: React.FC = () => {
  const dispatch = UseAppDispatch();
  const state = useAppSelector((state: any) => state.todos);

  return (
    <div>
      <button onClick={() => dispatch(featchTodos())}>Get Todos</button>
      {state.isLoading ? (
        <>
          <Loader />
        </>
      ) : state.data ? (
        <ul>
          {state.data.todos.map((data: any) => (
            <li key={data.id}>{data.todo}</li>
          ))}
        </ul>
      ) : (
        <li>No Todos Found</li>
      )}
    </div>
  );
};

export default Todo;
