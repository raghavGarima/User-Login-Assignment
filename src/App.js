import logo from './logo.svg';
import './App.css';
import {MainFile} from './components/Pages/Home/index'
import {LoginComp} from './components/Pages/Login'
import Routing from './Routing/index'
function App() {
  return (
   <>
     {/* <MainFile /> */}
     <Routing />
   </>
  );
}

export default App;
