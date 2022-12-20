import React from 'react';
import {schema, enums, pages} from './config.js';
import AppRouter from './AppRouter';
import './App.css';
import './foam.css';

function App() {
    return <AppRouter schema={schema} enums={enums} pages={pages} />
}

export default App;
