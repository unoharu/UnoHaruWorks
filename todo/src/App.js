import ToDoApp from "./components/ToDoApp";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import 'nes.css/css/nes.min.css'; 
import './css/Style.css';

function App() {
  return (
    <div className="nes-container is-rounded container">
      <div className="left-contaner">
        <Clock />
        <Weather />
      </div>
      <ToDoApp />
    </div>
  );
}
export default App;