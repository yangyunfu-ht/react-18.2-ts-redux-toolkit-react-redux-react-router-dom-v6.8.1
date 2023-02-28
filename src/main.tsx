import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import RootRouter from "./router"
import './index.css'

const rootNode = document.getElementById('root') as HTMLElement;

const root = createRoot(rootNode)

console.log(import.meta.env)

const person: personPropy = {
  name: 'hello',
  age: 36,
  address: '',
  phone: ''
}


root.render(
  <Router>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </Router>
)





