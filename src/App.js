import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">      

     
      
      <h4> Ortam : {process.env.NODE_ENV} </h4>
      {process.env.REACT_APP_API_URL}

      {process.env.NODE_ENV === 'production' && (
        
        <>
        <img src="/logo192.png"/> 
        <img src={logo}/>
        </>

      )}

    </div>
  );
}

export default App;
