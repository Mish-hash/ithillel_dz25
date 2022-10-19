import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      const element = {
        id:Date.now(),
        text: action.payload.message
      }

      state.push(element);
    },
  },
})


export const { addMessage } = messageSlice.actions

export default messageSlice.reducer