import React, {Component} from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import NavBarTop from './components/nav/Navbar';

type AppState ={ 
  sessionToken: string | null
}


class App extends Component<{}, AppState> {
  constructor(props: {}){
    super(props);
    this.state={
      sessionToken: '' || null,
    }
    this.updateToken = this.updateToken.bind(this);
    this.clearToken = this.clearToken.bind(this)
  }

  componentDidMount(){
    if (localStorage.getItem('token')) {
      this.setState({sessionToken: localStorage.getItem('token')});
    };
  }

  updateToken(newToken: string){
    localStorage.setItem('token', newToken);
    this.setState({sessionToken: newToken})
    console.log(this.state.sessionToken)
  }

  clearToken(){
    localStorage.clear();
    this.setState({sessionToken: ''})
  }

  protectedViews(){
    return this.state.sessionToken === localStorage.getItem('token') ?
    <NavBarTop clickLogout={this.clearToken} /> :
    <Auth updateToken={this.updateToken} />
  }

  render(){
    return(
      <div className="app">
        {this.protectedViews()}

      </div>
    )
  }


}

export default App;



// function App() {


  // const [sessionToken, setSessionToken] = useState('')

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     setSessionToken(localStorage.getItem('token'));
  //   };
  // });

  // const updateToken = newToken => {
  //   localStorage.setItem('token', newToken);
  //   setSessionToken(newToken);
  //   console.log(sessionToken)
  // }

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken(undefined)
  // }

  // const protectedViews = () => {
  //   return sessionToken === localStorage.getItem('token') ?
  //   <NavBarTop sessionToken = {sessionToken} clickLogout={clearToken} /> :
  //   <Auth updateToken={updateToken} />
  // }



//   return (
//     <div className="App">
//       <Router>
//       {/* <Sidebar clickLogout={clearToken} /> */}
//       {/* <Sitebar /> */}

//       </Router>
//       {/* <h1>Audacity Guides!</h1> */}
//       {protectedViews()}
//     </div>
//   );
// }

// export default App;
