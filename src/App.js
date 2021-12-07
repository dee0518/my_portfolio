import { Switch, Route, Redirect } from 'react-router-dom'

// navigation
import { MAIN, PROJECT } from './navigation/CONSTANTS'
import { CHATBOT } from './navigation/CONSTANTS'

// component
import { Main, ProjectDetail } from './Path'
import { Chatbot } from './Path'

// css
import './assets/fonts/fonts.css'
import './commonStyle/index.css'

function App() {

  return (
    <div className="app">
      <Switch>
          {/* portfolio */}
          <Route exact path={MAIN} component={Main}/>
          <Route exact path={PROJECT + '/:id'} component={ProjectDetail}/>

          {/* chatbot */}
          <Route exact path={CHATBOT} component={Chatbot}/>

          {/* Redirect */}
          <Redirect path="*" to={MAIN}/>
      </Switch>
    </div>
  );
}

export default App;
