import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Meal from './Components/Restaurant/Restaurant';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Meal></Meal>
    </div>
  );
}

export default App;
