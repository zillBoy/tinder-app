import React from 'react'
import Header from './components/Header/Header'
import SwipeButtons from './components/SwipeButtons/SwipeButtons'
import TinderCards from './components/TinderCards/TinderCards'

function App() {
    return (
        <div className="app">
            <Header />
            <TinderCards /> 
            <SwipeButtons /> 
        </div>
    )
}

export default App
