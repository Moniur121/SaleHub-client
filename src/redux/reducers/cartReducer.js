const initialState = {
  reminders: [],
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      }
    case 'REMOVE_FROM_CART':
      return {
        reminders: [
          ...state.reminders.filter((reminder) => reminder !== action.payload),
        ],
      }
    case 'CLEAR_CART':
      return {
        initialState,
      }
    default:
      return state
  }
}
export default cartReducer
