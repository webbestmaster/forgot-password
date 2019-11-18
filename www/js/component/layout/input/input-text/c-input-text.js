// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import inputTextStyle from './input-text.style.scss';
import imageKey from './image/key.svg';
import imageEye from './image/eye.svg';
import imageEyeBroken from './image/eye-broken.svg';
import {inputTextTypeMap} from './input-text-const';

type PropsType = {|
    +onInput: (text: string) => mixed,
    +placeholder: string,
    +isValid: boolean,
    +type?: 'password' | 'text',
|};

type StateType = {|
    +isShowPassword: boolean,
|};

export class InputText extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            isShowPassword: false,
        };
    }

    handleOnInput = (evt: SyntheticEvent<HTMLInputElement>) => {
        const {props} = this;
        const {onInput} = props;

        onInput(evt.currentTarget.value);
    };

    handleToggleShowPassword = () => {
        const {state} = this;
        const {isShowPassword} = state;

        this.setState({isShowPassword: !isShowPassword});
    };

    renderShowPasswordButton(): Node {
        const {state} = this;
        const {isShowPassword} = state;

        return (
            <button
                className={inputTextStyle.input_text__show_password__button}
                onClick={this.handleToggleShowPassword}
                type="button"
            >
                {isShowPassword
                    ? <img alt="" className={inputTextStyle.input_text__show_password__image} src={imageEyeBroken}/>
                    : <img alt="" className={inputTextStyle.input_text__show_password__image} src={imageEye}/>}
            </button>
        );
    }

    renderPassword(): Node {
        const {props, state} = this;
        const {placeholder, isValid} = props;
        const {isShowPassword} = state;

        return (
            <div className={inputTextStyle.input_text__label}>
                {this.renderShowPasswordButton()}
                <img alt="" className={inputTextStyle.input_text__password__key} src={imageKey}/>
                <input
                    className={classNames(inputTextStyle.input_text__input__password, {
                        [inputTextStyle.input_text__input__invalid]: !isValid,
                    })}
                    onInput={this.handleOnInput}
                    placeholder={placeholder}
                    type={isShowPassword ? inputTextTypeMap.text : inputTextTypeMap.password}
                />
            </div>
        );
    }

    render(): Node {
        const {props} = this;
        const {placeholder, type} = props;

        if (type === inputTextTypeMap.password) {
            return this.renderPassword();
        }

        return (
            <label className={inputTextStyle.input_text__label}>
                <input
                    className={inputTextStyle.input_text__input}
                    onInput={this.handleOnInput}
                    placeholder={placeholder}
                    type={inputTextTypeMap.text}
                />
            </label>
        );
    }
}
