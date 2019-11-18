// @flow

import React, {Component, type Node} from 'react';

import type {LocaleContextType} from '../../component/locale/c-locale-context';
import {InputText} from '../../component/layout/input/input-text/c-input-text';

import {inputTextTypeMap} from '../../component/layout/input/input-text/input-text-const';

import type {FormValidationType, ValidationPropertyType, ValidationItemType} from './type-password-reset';
import {getIsValidationItemValid} from './helper-password-reset';
import passwordResetStyle from './password-reset.style.scss';
import {ValidationHint} from './validation-hint/c-validation-hint';

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

        const passwordValidation: ValidationPropertyType = {
            validationList: [
                {text: 'At least 1 letter', isValid: /[A-Za-z]/.test(password)},
                {text: 'At least 1 number', isValid: /\d/.test(password)},
                {text: '8 symbols minimum', isValid: password.length >= 8},
            ],
            value: password,
        };

        const passwordConfirmValidation: ValidationPropertyType = {
            validationList: [
                {
                    text: 'Password and confirm password should be the same',
                    isValid: password === passwordConfirm && passwordConfirm.length > 0,
                },
                {
                    text: 'Confirm password is required',
                    isValid: passwordConfirm.length > 0,
                },
            ],
            value: passwordConfirm,
        };

        return {
            password: passwordValidation,
            passwordConfirm: passwordConfirmValidation,
        };
    }

    getIsFormValid(): boolean {
        const formValidation = this.validateForm();
        const isPasswordValid = getIsValidationItemValid(formValidation.password);
        const isPasswordConfirmValid = getIsValidationItemValid(formValidation.passwordConfirm);

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
        const formValidation = this.validateForm();
        const isPasswordValid = getIsValidationItemValid(formValidation.password);
        const isPasswordConfirmValid = getIsValidationItemValid(formValidation.passwordConfirm);

        return (
            <form action="#" className={passwordResetStyle.password_reset__form} onSubmit={this.handleFormSubmit}>
                <h1 className={passwordResetStyle.password_reset__form__header}>Please enter your new password:</h1>

                <InputText
                    isValid={isPasswordValid || !formValidation.password.value}
                    onInput={this.handleChangePassword}
                    placeholder="Password"
                    type={inputTextTypeMap.password}
                />
                <ValidationHint validation={formValidation.password}/>

                <InputText
                    isValid={isPasswordConfirmValid || !formValidation.passwordConfirm.value}
                    onInput={this.handleChangePasswordConfirm}
                    placeholder="Confirm password"
                    type={inputTextTypeMap.password}
                />
                <ValidationHint validation={formValidation.passwordConfirm}/>

                <button type="submit">submit {Number(this.getIsFormValid())}</button>
            </form>
        );
    }
}
