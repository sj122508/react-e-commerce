import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { render } from 'node-sass';


// const HatsPage = (props) => {
//   return (
//     <div>
//       <h1>HATS PAGE </h1>
//     </div>
//   )
// }

// const JacketsPage = () => (
//   <div>
//     <h1>JACKETS PAGE </h1>
//   </div>
// )


// const SamplePage = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <Link to='/'>HomePage</Link>
//       <button onClick={() => props.history.push('/')}>HomePage</button>
//       <h1>SAMPLE PAGE : {props.match.params.Id}</h1>
//     </div>
//   )
// }

// function App() {
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user })

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        })
        

      } else {
        this.setState({ currentUser: userAuth });
      }


      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          {/* <Route exact path='/hats' component={HatsPage} /> */}
          {/* <Route exact path='/jackets' component={JacketsPage} /> */}
          {/* <Route path='/Sample/:Id' component={SamplePage} /> */}
        </Switch>
      </div>
    );
  }

};

export default App;


 // <div>
    //   <Header />
    //   <Switch>
    //     <Route exact path='/' component={HomePage} />
    //     <Route path='/shop' component={ShopPage} />
    //     <Route path='/signin' component={SignInAndSignUpPage} />
    //     {/* <Route exact path='/hats' component={HatsPage} /> */}
    //     {/* <Route exact path='/jackets' component={JacketsPage} /> */}
    //     {/* <Route path='/Sample/:Id' component={SamplePage} /> */}
    //   </Switch>
    // </div>