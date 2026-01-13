import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './Comp1.jsx'

var a = ", yo"

const hello = (
                <>
                <strictMode>
                <App />
                <h2>Using JSX, 5+5={ 5+5 }</h2>
                </strictMode>
                <div>I&#39;m a div {a}</div>
                <Comp1 arg="YO"/>
                </>
);

createRoot(document.getElementById('1')).render(
  hello
)
