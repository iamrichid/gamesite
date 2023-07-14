import logo from './logo.svg';
import card_picture from './avat.jpeg';
import xbox from './xbox.svg'
import './App.css';


function Card () {
  return (
   <>
    <article className='App-card'>
      <img src={card_picture} className='App-card-image' />
      <p className='App-card-text'><em>Avatar : frontier of pandora</em></p>
      <div className='App-card-platform'>
      
      <img src={xbox} className='platform-sf'/>

      </div>
    
    </article>

   </>

  );
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card />
      </header>

     
    </div>
  );
}

export default App;
