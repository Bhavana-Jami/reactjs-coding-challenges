import './App.css';
import { useEffect, useState } from "react";

function App() {

  const list1 = ["Bhavana", "Bhavs", "Bhav", "Havana", "Ana"];
  const list2 = ["Soumik", "Soumi", "Mik", "Somik", "Anamik"];

  const [checked, setChecked] = useState(true);
  const handleCheck =()=> {
    setChecked(prev => !prev);
    console.log(checked)
  }
 
  return (
    <div className="App">
      <ul>
        {
          list1.map((item, key) => (
            <li key={key}>
              <input type="checkbox" onClick={handleCheck(e)} />{item}
            </li>
          ))
        }
      </ul>
      <ul>
        <li><button>&#8811;</button></li>
        <li><button>&#62;</button></li>
        <li><button>&#60;</button></li>
        <li><button>&#8810;</button></li>
      </ul>
      <ul>
        {
          list2.map((item, key) => (
            <li key={key}>
              <input type="checkbox" />{item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
