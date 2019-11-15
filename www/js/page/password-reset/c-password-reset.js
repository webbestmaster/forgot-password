// @flow

import React, {Component, type Node} from 'react';

type PropsType = {};
type StateType = {};

export class PasswordReset extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    render(): Node {
        return 'PasswordReset!';
    }
}
