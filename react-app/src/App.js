import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';
import Counter from './components/Counter';
import ListCustomer from './components/ListCustomers';
import Search from './components/Search';
import ReduxDemo from './components/ReduxDemo';

import {BrowserRouter, MemoryRouter, Link, Route} from 'react-router-dom';
import CustomerDetails from './components/CustomerDetails';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        {/* <Hello message="React"/>
        <Hello message="JSX"/>
        <Hello message="Inner content">
          <p>This is some inner content</p>
        </Hello> */}

        {/* <Counter title="Time"/> */}
        {/* <Counter title="Watch"/> */}

        {/* <ListCustomer/> */}
        {/* <Search/> */}
        {/* <ReduxDemo/> */}
        
      </section>
        
      <section>
        <BrowserRouter basename="/react/">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/redux">Redux</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>

            <section>
                <Route path="/" exact component={Hello}/>
                {/* <Route path="/counter" component={Counter}/> */}
                <Route path="/counter" render={() => <Counter title="Watch"/>}/>
                {/* <Route path="/customers" exact component={ListCustomer}/> */}
                <ProtectedRoute path="/customers" exact component={ListCustomer}/>
                <Route path="/customers/:id" component={CustomerDetails}/>
                <Route path="/redux" component={ReduxDemo}/>
                <Route path="/search" component={Search}/>
            </section>
            

        </BrowserRouter>
      </section>  
    
    </div>
  );
}

export default App;
