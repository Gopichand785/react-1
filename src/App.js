import logo from './logo.svg';
import './App.css';
import Navbar from './santhu/navbar';
import CompA from './component/CompA';
import FatA from './santhu/fatarrow1';
import Employee from './santhu/Employee';
import User from './santhu/user';
import SamA from './propdrill/SamA';
import MessageA from './Message/MessageNew';
import Message from './Message/Message';
import Redmi from './product/product';
import Counter from './product/counter';
import Salary from './product/salary';
import Login from './formhandling/two';
import Registration from './formhandling/Registration';
import Registration23 from './formhandling/Registration23';
function App() {
  return (
    <div className="App">
    <Navbar/>
   <CompA/>
   <FatA/>
   <Employee/>
   <User/>
   <SamA/>
   <MessageA/>
   <Message/>
  <Redmi/>
 <Counter/>
   <Salary/>
    <Login/>
    <Registration/>
    <Registration23/>
    </div>
  );
}

export default App;
