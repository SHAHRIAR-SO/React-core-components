import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        {/* <p>Try to learn Reactjs</p> */}
        <Person></Person>
        
        <Person></Person>
       
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  const personstyle = {
   border : '2px solid yellow',
   margin : '10 px'
  }
  return (

    <div style={{border: '5px solid yellow',margin: '10px'}}>
      <h1>Md.Shahriar ovi</h1>
      <h3>Learn React js Very Carefully</h3>
    </div>
  )



}

export default App;
