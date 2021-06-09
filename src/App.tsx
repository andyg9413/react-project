import React from 'react';
import './App.css';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';
import User from "./components/User";
import Home from "./components/Home";
import Root from "./components/Root";
function App() {
    // const [user, setUser] = useState<IUser['user']>(
    //     {
    //         name: "Andy",
    //         age: 24,
    //         hobbies: ["Baseball"]
    //     }
    // );
    // const [homeLink, setHomeLink] = useState<string>('Home');
    //
    // const onGreet = (): void => {
    //     alert("Hello!")
    // }
    // const onChangeLinkName = (newName: string): void => {
    //     setHomeLink(newName);
    // }

   // return (
   //  <div className="container">
   //      <div className="row">
   //          <div className="col-xs-10 col-xs-offset-1">
   //              <Header homeLink={homeLink} />
   //          </div>
   //      </div>
   //      <div className="row">
   //          <div className="col-xs-10 col-xs-offset-1">
   //              <Home
   //                  user={user}
   //                  greet={onGreet}
   //                  changeLink={onChangeLinkName}
   //                  initialLinkName={homeLink}
   //              />
   //          </div>
   //      </div>
   //  </div>
   // );
    return (
        <Router history={createBrowserHistory()}>
            <Route path="/" component={Root}>
                <Route path="user" component={User}/>
                <Route path="home" component={Home}/>
            </Route>
        </Router>
    );
}

export default App;
