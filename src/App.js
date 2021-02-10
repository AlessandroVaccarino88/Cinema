import './App.css';
import InteractiveMap from './InteractiveMap'
import createContext from 'react'
import useReducer from 'react'
import {reducer} from './reducer'
import {initialState} from './reducer'

export const StateContext = createContext()

function App() {
  return (
      <StateContext.Provider>
          value = {useReducer(reducer, initialState)}
    <div className="App" >
      <div className="column">
        <InteractiveMap />
      </div>
      <div className="column">

      </div>
    </div>
      </StateContext.Provider>
  );
}

export default App;
