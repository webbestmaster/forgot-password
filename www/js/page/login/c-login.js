// @flow

import type {Node} from 'react';
import React, {Component} from 'react';

type PropsType = {};
type StateType = null;

// eslint-disable-next-line react/prefer-stateless-function
export class Login extends Component<PropsType, StateType> {
    render(): Node {
        return (
            <div>
                <h1>Login</h1>
                <br/>
                <form action="/api/login" method="post">
                    <label>
                        <p>Login:</p>
                        <input name="login" placeholder="login" type="text"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        <p>Password:</p>
                        <input name="password" placeholder="password" type="text"/>
                    </label>
                    <br/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
