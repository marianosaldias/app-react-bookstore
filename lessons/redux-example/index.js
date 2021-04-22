import {createStore, combineReducers} from 'redux'

const ACTIONS_TYPES = {
  ADD_TODO: 'ADD_TODO',
  DONE_TODO: 'DONE_TODO',
  SET_USER_NAME: 'SET_USER_NAME'
}


const addTodo = (description) => {
  return {
    type: ACTIONS_TYPES.ADD_TODO,
    payload: {
      id: new Date().getTime(),
      description
    }
  }
}

const doneTodo = (id, comment) => {
  return {
    type: ACTIONS_TYPES.DONE_TODO,
    payload: {
      id,
      comment
    }
  }
}

const setUserName = (userName) => {
  return {
    type: ACTIONS_TYPES.SET_USER_NAME,
    payload: {
      userName
    }
  }
}

// Reducers

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_TYPES.ADD_TODO:
      return state.concat([
        {
          id: action.payload.id,
          description: action.payload.description,
          state: 'PENDING',
          commentState: ''
        }
      ])

    case ACTIONS_TYPES.DONE_TODO:
      // const newState = state.concat([]);
      const newState = state.map(todo => ({...todo}));

      // {...todo}
      // const todoAux = {
      //   id: todo.id,
      //   description: todo.description,
      //   state: todo.state,
      //   commentState: todo.commentState
      // }

      const todo = newState.find(t => t.id === action.payload.id);

      todo.state = 'DONE';
      todo.commentState = action.payload.comment;

      return newState;

    default:
      return state;
  }
}

const user = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_USER_NAME:
      return {
        ...state,
        userName: action.payload.userName
      }
    default:
      return state;
  }
}

// Store

const reducers = combineReducers({
  todos,
  user
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  console.log(store.getState());
})

// dispatch actions

store.dispatch(addTodo('limpiar la cocina'))
store.dispatch(addTodo('limpiar la cocina2'))
store.dispatch(setUserName('Leo'))