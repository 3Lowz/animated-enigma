import todoSlice from '../components/todo/todo.slice'

console.log(`Combining slices...`)

const rootReducers = {
  todo: todoSlice,
}

export default rootReducers
