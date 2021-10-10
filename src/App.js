import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// navigation
import { MAIN, CHATBOT } from './navigation/CONSTANTS'

// component
import { Chatbot } from './Path'

// css
import './assets/fonts/fonts.css'
import './commonStyle/index.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to={MAIN} component={Chatbot}/>
        <Redirect path="*" to={MAIN}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
