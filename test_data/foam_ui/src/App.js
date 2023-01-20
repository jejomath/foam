import React from 'react';
import {schema, enums, pages} from './config.js';
import AppRouter from './AppRouter';
import './App.css';
import './foam.css';

function App() {
    return (
        <div className='page-div'>
            <div className='header-div'>Synergy Therapeutics</div>
            <div className='header-back-div'>Synergy Therapeutics</div>
            <div className='content-div'>
                <AppRouter schema={schema} enums={enums} pages={pages} />
            </div>
        </div>
    )
}

export default App;
