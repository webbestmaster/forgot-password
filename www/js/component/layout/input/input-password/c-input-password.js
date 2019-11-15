// @flow

import React, {Component, type Node} from 'react';

type PropsType = {|
    +onInput: (text: string) => mixed,
    +placeholder: string,
    +isValid: boolean,
|};

export class InputPassword extends Component<PropsType, null> {
    handleOnInput = (evt: SyntheticEvent<HTMLInputElement>) => {
        const {props} = this;
        const {onInput} = props;

        onInput(evt.currentTarget.value);
    };

    render(): Node {
        const {props} = this;
        const {placeholder} = props;

        return (
            <label>
                <input onInput={this.handleOnInput} placeholder={placeholder} type="password"/>
            </label>
        );
    }
}
