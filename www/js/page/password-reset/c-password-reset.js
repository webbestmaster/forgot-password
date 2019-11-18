// @flow

import React, {Component, type Node} from 'react';

import type {LocaleContextType} from '../../component/locale/c-locale-context';
import {InputText} from '../../component/layout/input/input-text/c-input-text';

import type {FormValidationType, ValidationPropertyType, ValidationItemType} from './type-password-reset';
import {getIsValidationItemValid} from './helper-password-reset';

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
                    isValid: password === passwordConfirm,
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

    renderValidation(validation: ValidationPropertyType): Node {
        return (
            <div>
                {validation.validationList.map((validationItem: ValidationItemType): Node => {
                    return (
                        <p key={validationItem.text}>
                            {validationItem.text} {Number(validationItem.isValid)}
                        </p>
                    );
                })}
            </div>
        );
    }

    render(): Node {
        const {props} = this;
        const {localeContext} = props;
        const formValidation = this.validateForm();
        const isPasswordValid = getIsValidationItemValid(formValidation.password);
        const isPasswordConfirmValid = getIsValidationItemValid(formValidation.passwordConfirm);

        return (
            <form action="#" onSubmit={this.handleFormSubmit}>
                <InputText
                    isValid={isPasswordValid && Boolean(formValidation.password.value)}
                    onInput={this.handleChangePassword}
                    placeholder={localeContext.getLocalizedString('LOGIN_POPUP__BUTTON_LOGIN')}
                    type="password"
                />
                {this.renderValidation(formValidation.password)}
                <InputText
                    isValid={isPasswordConfirmValid && Boolean(formValidation.passwordConfirm.value)}
                    onInput={this.handleChangePasswordConfirm}
                    placeholder={localeContext.getLocalizedString('LOGIN_POPUP__LINK_LOST_PASSWORD')}
                    type="password"
                />
                {this.renderValidation(formValidation.passwordConfirm)}
                <button type="submit">submit {Number(this.getIsFormValid())}</button>
            </form>
        );
    }
}
