import React from 'react';
import './App.css';
import Header from './component/Header';

import MainContent from './component/MainContent';


function App() {
return (
<div className="App">
<Header />
<div className="layout">
<MainContent />
</div>
</div>

);
}

export default App;
