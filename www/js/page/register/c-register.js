// @flow

import type {Node} from 'react';
import React, {Component} from 'react';

type PropsType = {};
type StateType = null;

// eslint-disable-next-line react/prefer-stateless-function
export class Register extends Component<PropsType, StateType> {
    render(): Node {
        return (
            <div>
                <h1>Register</h1>
                <br/>
                <form action="/api/register" method="post">
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
