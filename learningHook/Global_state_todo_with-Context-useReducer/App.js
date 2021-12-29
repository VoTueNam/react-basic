import { useStore, action } from './store'


function App() {

  const [state, dispatch] = useStore()

  const handleAdd = () => {
    dispatch(action.addTodoInput(state.todoInput))
  }

  console.log(state.todos);

  return (
    <div>
      <p>Nothing</p>

      <input
        value={state.todoInput}
        placeholder="enter todo..."
        onChange={e => {
          dispatch(action.setTodoInput(e.target.value))
        }}
      />

      <button
        onClick={handleAdd}
      >
        Add
      </button>
      {state.todos.map((todo, index) => (
        <li key={index}>{ todo }</li>
      ))}
    </div>
  );
}

export default App;
