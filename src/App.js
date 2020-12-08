import logo from './logo.svg';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header>
        <h1>{props.post.title}</h1>
        <p>{props.post.author}</p>
        <p>{props.post.body}</p>
        <h2>Comments</h2>
        <p>{props.post.comments[1]}</p>

      </header>
    </div>
  );
}

export default App;
