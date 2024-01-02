import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import OptionSelection from './Components/OptionSelection';
import { arrayItems } from './AiOptions';




function App() {
console.log(arrayItems);
  return (
    <>
    <OptionSelection arrayItems={arrayItems}></OptionSelection>
  
    </>
  )
}

export default App
