import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SecondForm } from './02-useEffect/SecondForm'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocuScreen } from './04-useRef/FocuScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-useMemo/Memorize'
// import { MemoHook } from './06-useMemo/MemoHook'
// import { CallBackHook } from './07-useCallback/CallBackHook'
//import { Padre } from './08-tarea-memo/Padre'
// import './09-useReducer/intro-reducer'
import { TodoApp } from './09-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  //</React.StrictMode>
)
