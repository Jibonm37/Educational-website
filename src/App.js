import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import Body from './components/Body/Body';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Notfound from './notfound/Notfound';
import About from './components/about/About';
import Courses from './components/Courses/Courses';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header> </Header>
      
      <Switch>
        <Route  exact path='/'>
       <Home></Home>
        </Route>
      <Route  path='/Home'>
      <Home></Home>
      </Route>
      <Route path='/courses'>
       <Body></Body>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='*'>
        <Notfound></Notfound>
      </Route>
      </Switch>
      
     <Footer></Footer>
    
      </BrowserRouter>
     
     
     
    </div>
  );
}

export default App;
