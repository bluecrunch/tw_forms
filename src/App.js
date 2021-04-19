import logo from './logo.svg';
import Register from './unprotected/register'
import Login from './unprotected/login'
import notFound from './unprotected/404'
import Navigation from './elements/navigation'
import Footer from './elements/footer'
import Dashboard from './protected/dashboard'
import PublicLayout from './publiclayout'
import ProtectedLayout from './protectedlayout'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";
import { ProtectedRoute } from "./protected.route";
import { PreparedRoute } from "./prepared.route";
function App() {

  return <div>
    <Router>


      <div className="">
        <Switch>

          {/* Protected */}
          <Route path='/app' component={ProtectedLayout} />
          <Route path='/' component={PublicLayout} />

          {/* Not Found */}
          <Route path="*" component={() => "404 NOT FOUND"} />

        </Switch>
      </div>

      <Footer />
    </Router>




  </div>
}

export default App;
