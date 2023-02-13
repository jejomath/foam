import React from 'react';
import {schema, enums, pages} from './config.js';
import { AppRouter } from './lib/index.js';
import './index.css';
import './App.css';
import './lib/foam.css';

function App() {
    return (
        <div>
        <div>Hello!</div>
        <div className='page-div'>
            <div className='header-div'>[Your Name Here]</div>
            <div className='content-div'>
                <AppRouter schema={schema} enums={enums} pages={pages} />
            </div>
        </div></div>
    )
}

export default App;
