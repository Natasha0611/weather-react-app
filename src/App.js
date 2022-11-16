import './App.css';
import Weather from "./Weather";

function App() {
  return (
  <div className="App">
    <div className='container'>
     Weather App
     <Weather defaultCity="Kyiv"/>
     <footer>
      This project was codded by <a href="https://my-profile-nd.netlify.app">Nataliia Dolhoruk</a> and it is {" "}
      <a href="https://github.com/Natasha0611/weather-react-app"> open-sourced on GIT</a>
     </footer>
    </div>
  </div>
  );
}

export default App;
