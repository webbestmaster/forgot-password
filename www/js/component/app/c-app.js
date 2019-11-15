// @flow

import React, {type Node} from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import {InnerApp} from './c-inner-app';

export function App(): Node {
    return (
        <HashRouter>
            <InnerApp/>
        </HashRouter>
    );
}
