import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS PAGE </h1>
    </div>
  )
}

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE </h1>
  </div>
)


const SamplePage = (props) => {
  console.log(props)
  return (
    <div>
      <Link to='/'>HomePage</Link>
      <button onClick={() => props.history.push('/')}>HomePage</button>
      <h1>SAMPLE PAGE : {props.match.params.Id}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/jackets' component={JacketsPage} />
        <Route path='/Sample/:Id' component={SamplePage} />
      </Switch>
    </div>
  );
}

export default App;
