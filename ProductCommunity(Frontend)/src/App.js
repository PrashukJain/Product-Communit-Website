import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Post from "./Components/Post"
import './App.css'
import ViewMyQuestion from './Components/ViewQuestions'
import QuestionDetail from './Components/QuestionDetail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import Replypage from "./Components/Replypage";
import { GuardProvider, GuardedRoute } from 'react-router-guards'
import SearchQuestion from "./Components/SearchQuestion";
function App() {
  const requireLogin = (to, from, next) => {
    if (localStorage.getItem("token") === null) {
        next.redirect("login")
    }
    next()
}
  return (
    <>
      <Router>
        <Switch>
        <GuardProvider guards={requireLogin}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
                <GuardedRoute path='/welcome'>
                <WelcomePage/>
                </GuardedRoute>
                    <GuardedRoute path="/post" >
                      <Post/>
                    </GuardedRoute>
                    <GuardedRoute path="/viewMyQuestion">
                    <ViewMyQuestion/>
                    </GuardedRoute>
                    <GuardedRoute path="/question">
                    <QuestionDetail/>
                    </GuardedRoute>
                    <GuardedRoute path="/reply" >
                    <Replypage/>
                    </GuardedRoute>
                    <GuardedRoute path="/searchQuestion" >
                    <SearchQuestion/>
                    </GuardedRoute>
                
          </GuardProvider>
        </Switch>
      </Router>
    </>

  );
}

export default App;
