// @flow

import React, {type Node} from 'react';
import {HashRouter} from 'react-router-dom';

import {InnerApp} from './c-inner-app';

export function App(): Node {
    return (
        <HashRouter>
            <InnerApp/>
        </HashRouter>
    );
}
