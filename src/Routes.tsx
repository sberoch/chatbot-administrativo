import Home from './pages/Home'
import Chat from './pages/Chat'
import Test from './pages/Test'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/test" component={Test} />
      </Switch>
    </Router>
  )
}