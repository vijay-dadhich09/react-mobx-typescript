import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { AppState } from './state/AppState';
// import {Counter} from './components/Counter';
import Nav from './components/nav';
import Register, { RegisterUserState } from './screens/Register';
import Profile from './screens/Profile';
import Home from './screens/Home';

// {/* <header className="App-header">
//         <Counter state={state.counter} />
//       </header> */}
const regUserState = new RegisterUserState();
const App:React.FC<{ state: AppState}> = ({state}) => {
  console.log('state:', state);
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Register"  component={() => <Register inputState={regUserState} userState={state.user} />} />
        <Route path="/Profile" component={Profile} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;

