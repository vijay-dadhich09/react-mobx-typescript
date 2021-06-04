import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { ApplicationState } from './state/AppState';
// import {Counter} from './components/Counter';
import Nav from './components/nav';
import Register, { RegisterUserState } from './screens/Register';
import Profile from './screens/Profile';
import Home from './screens/Home';
import RegisterConfirmation from './screens/RegisterConfirmation';

// {/* <header className="App-header">
//         <Counter state={state.counter} />
//       </header> */}
const regUserState = new RegisterUserState();
const App:React.FC<{ store: ApplicationState}> = ({store}) => {
  console.log('store:', store);
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Register"  component={() => <Register inputState={regUserState} userState={store.userData} />} />
        <Route path="/Profile" component={Profile} />
        <Route path="/RegisterConfirmation" component={RegisterConfirmation} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;

