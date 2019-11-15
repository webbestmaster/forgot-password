// @flow

import React, {Component, type Node} from 'react';

type PropsType = {};
type StateType = null;

export class PageNotFound extends Component<PropsType, StateType> {
    componentDidMount() {
        console.warn('[ WARNING ]:  Page Not Found!');
    }

    render(): Node {
        return <h1>Page Not Found, Sorry :(</h1>;
    }
}
