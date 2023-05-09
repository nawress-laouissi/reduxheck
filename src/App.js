
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h2> Todo list App</h2>
      <AddTask />
      <ListTask />
      </header>
    </div>
  );
}

export default App;
