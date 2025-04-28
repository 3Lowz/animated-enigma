import { createSlice } from '@reduxjs/toolkit'

const todoInitialSlice = {
  isLoading: false,
  list: [],
  selected: null,
  // Error handling
  errors: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialSlice,
  reducers: {
    getList: (state) => {
      state.isLoading = true
    },
    setList: (state, action) => {
      state.isLoading = false
      state.list = action.payload
      state.errors = []
    },
    addTodo: (state) => {
      state.isLoading = true
    },
    onError: (state, errors) => {
      state.isLoading = false
      state.errors = errors.payload
    },
    resetErrors: (state) => {
      state.errors = []
    },
  },
})

const { getList, setList, addTodo, onError, resetErrors } = todoSlice.actions

export { getList, setList, addTodo, onError, resetErrors }
export default todoSlice.reducer
