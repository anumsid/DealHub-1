import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import DealCard from './components/DealCard'
import CreateDealForm from './components/CreateDealForm'

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" render={() => <App />} />
    <Route exact path="/deal" component={DealCard} />
    <Route exact path="/add" component={CreateDealForm} />
  </div>
</Router>,
document.getElementById('root'));
registerServiceWorker();
