// @flow

/* global window */

import React, {type Node} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {InnerApp} from './c-inner-app';

export function App(): Node {
    return (
        <BrowserRouter>
            <InnerApp/>
        </BrowserRouter>
    );
}
