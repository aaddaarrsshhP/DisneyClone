
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './component/login'
import Header from './component/header';
import Home from './component/home';
import Detail from './component/details';
import Watchlist from './component/watchlist';

function App() {
  return (
 <div className='app'>
  
 <Routes>
  <Route path='/' element={<><Header /><Login /></>}/>
  <Route path='/home' element={<><Header /><Home /></>}/>
  <Route path='detail/:id' element={<><Header /><Detail /></>}/>
  <Route path='/watchlist' element={<><Header /><Watchlist /></>}/>
 </Routes>
 </div> 
    
  );
}

export default App;
