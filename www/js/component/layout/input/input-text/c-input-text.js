// @flow

import React, {Component, type Node} from 'react';

type PropsType = {|
    +onInput: (text: string) => mixed,
    +placeholder: string,
    +isValid: boolean,
    +type?: string,
|};

export class InputText extends Component<PropsType, null> {
    handleOnInput = (evt: SyntheticEvent<HTMLInputElement>) => {
        const {props} = this;
        const {onInput} = props;

        onInput(evt.currentTarget.value);
    };

    render(): Node {
        const {props} = this;
        const {placeholder, type = 'text'} = props;

        return (
            <label>
                <input onInput={this.handleOnInput} placeholder={placeholder} type={type}/>
            </label>
        );
    }
}
