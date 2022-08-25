import Plan from './components/Plan';
import './App.css';
import data from './components/plans.json';
import cards1 from "./assets/cards1.module.css";
import cards2 from "./assets/cards2.module.css";
import cards3 from "./assets/csrds3.module.css";
import cards4 from "./assets/csrds4.module.css";

function App() {
  const cards = [cards1, cards2, cards3, cards4];
  return (
    <div className="App">
      <div className="plans">
        {
          data.map((plan, i) =>
          <Plan title={plan.title} price={plan.price} speed={plan.speed} text ={plan.text} card={cards[i]} isSelected={plan.isSelected} button={plan.button}></Plan>
          )
        }
      </div>
    </div>

  );
}

export default App;

