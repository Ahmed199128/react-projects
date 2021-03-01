import {TodoList, Header } from './Todo';


const isAuthorized = false;

function App() {
  return (
    <div className="wrapper">
      <h1>React</h1>
      <Header userAuthorized={isAuthorized}/>
      <TodoList cars={['mersedes', 'bmw', 'audi1']}/>
    </div>
  )
}

export default App;
