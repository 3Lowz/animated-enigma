import { ITodo } from './todo'

export interface ITodoItem {
  todo: ITodo
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  return (
    <>
      <div>
        {todo.blob}
        <input type="checkbox" name="isDone" id="done" checked={todo.isDone} />
      </div>
    </>
  )
}

export default TodoItem
