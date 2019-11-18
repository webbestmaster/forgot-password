// @flow

import React, {Component, type Node} from 'react';

import type {LocaleContextType} from '../../component/locale/c-locale-context';
import {InputText} from '../../component/layout/input/input-text/c-input-text';

type ValidationItemType = {|
    +passedList: Array<string>,
    +failedList: Array<string>,
    +value: string,
|};

type FormValidationType = {|
    +password: ValidationItemType,
    +passwordConfirm: ValidationItemType,
|};

type PropsType = {
    +localeContext: LocaleContextType,
};
type StateType = {|
    +resetPasswordForm: {|
        +password: string,
        +passwordConfirm: string,
    |},
|};

export class PasswordReset extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            resetPasswordForm: {
                password: '',
                passwordConfirm: '',
            },
        };
    }

    validateForm(): FormValidationType {
        const {state} = this;
        const {resetPasswordForm} = state;
        const {password, passwordConfirm} = resetPasswordForm;

        const passwordValidation: ValidationItemType = {
            passedList: [],
            failedList: [],
            value: password,
        };

        if (/\w/.test(password)) {
            passwordValidation.passedList.push('At least 1 letter');
        } else {
            passwordValidation.failedList.push('At least 1 letter');
        }

        if (/\d/.test(password)) {
            passwordValidation.passedList.push('At least 1 number');
        } else {
            passwordValidation.failedList.push('At least 1 number');
        }

        if (password.length >= 8) {
            passwordValidation.passedList.push('8 symbols minimum');
        } else {
            passwordValidation.failedList.push('8 symbols minimum');
        }

        const passwordConfirmValidation: ValidationItemType = {
            passedList: [],
            failedList: [],
            value: passwordConfirm,
        };

        if (password === passwordConfirm) {
            passwordConfirmValidation.passedList.push('Password and confirm password should be the same');
        } else {
            passwordConfirmValidation.failedList.push('Password and confirm password should be the same');
        }

        return {
            password: passwordValidation,
            passwordConfirm: passwordConfirmValidation,
        };
    }

    getIsFormValid(): boolean {
        const formValidation = this.validateForm();
        const isPasswordValid = formValidation.password.failedList.length === 0;
        const isPasswordConfirmValid = formValidation.passwordConfirm.failedList.length === 0;

        return isPasswordValid && isPasswordConfirmValid;
    }

    handleFormSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (this.getIsFormValid() === false) {
            console.error('Form is not valid');
            return;
        }

        const {state} = this;
        const {resetPasswordForm} = state;
        const {password, passwordConfirm} = resetPasswordForm;

        alert(password + ' - ' + passwordConfirm);
    };

    handleChangePassword = (password: string) => {
        const {state} = this;
        const {resetPasswordForm} = state;

        this.setState({resetPasswordForm: {...resetPasswordForm, password}});
    };

    handleChangePasswordConfirm = (passwordConfirm: string) => {
        const {state} = this;
        const {resetPasswordForm} = state;

        this.setState({resetPasswordForm: {...resetPasswordForm, passwordConfirm}});
    };

    render(): Node {
        const {props} = this;
        const {localeContext} = props;
        const formValidation = this.validateForm();
        const isPasswordValid = formValidation.password.failedList.length === 0;
        const isPasswordConfirmValid = formValidation.passwordConfirm.failedList.length === 0;

        return (
            <form action="#" onSubmit={this.handleFormSubmit}>
                <InputText
                    isValid={isPasswordValid && Boolean(formValidation.password.value)}
                    onInput={this.handleChangePassword}
                    placeholder={localeContext.getLocalizedString('LOGIN_POPUP__BUTTON_LOGIN')}
                    type="password"
                />
                <br/>
                <InputText
                    isValid={isPasswordConfirmValid && Boolean(formValidation.passwordConfirm.value)}
                    onInput={this.handleChangePasswordConfirm}
                    placeholder={localeContext.getLocalizedString('LOGIN_POPUP__LINK_LOST_PASSWORD')}
                    type="password"
                />
                <br/>
                <button type="submit">submit {Number(this.getIsFormValid())}</button>
            </form>
        );
    }
}
