// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import type {LocaleContextType} from '../../component/locale/c-locale-context';
import {InputText} from '../../component/layout/input/input-text/c-input-text';
import {inputTextTypeMap} from '../../component/layout/input/input-text/input-text-const';
import {isError} from '../../lib/is';
import type {RouterHistoryType} from '../../type/react-router-dom-v5-type-extract';
import {routePathMap} from '../../component/app/routes-path-map';
import {Locale} from '../../component/locale/c-locale';

import type {FormValidationType, ValidationPropertyType} from './type-password-reset';
import {getIsValidationItemValid} from './helper-password-reset';
import passwordResetStyle from './password-reset.style.scss';
import {ValidationHint} from './validation-hint/c-validation-hint';
import {resetPassword} from './password-reset-helper';

type PropsType = {
    +history: RouterHistoryType,
    +localeContext: LocaleContextType,
};
type StateType = {|
    +isInProgress: boolean,
    +resetPasswordForm: {|
        +password: string,
        +passwordConfirm: string,
    |},
|};

export class PasswordReset extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            isInProgress: false,
            resetPasswordForm: {
                password: '',
                passwordConfirm: '',
            },
        };
    }

    validateForm(): FormValidationType {
        const {state, props} = this;
        const {localeContext} = props;
        const {resetPasswordForm} = state;
        const {password, passwordConfirm} = resetPasswordForm;

        const passwordValidation: ValidationPropertyType = {
            validationList: [
                {
                    text: localeContext.getLocalizedString('RESET_PASSWORD__AT_LEAST_1_LETTER'),
                    isValid: /[A-Za-z]/.test(password),
                },
                {
                    text: localeContext.getLocalizedString('RESET_PASSWORD__AT_LEAST_1_NUMBER'),
                    isValid: /\d/.test(password),
                },
                {
                    text: localeContext.getLocalizedString('RESET_PASSWORD__8_SYMBOLS_MINIMUM'),
                    isValid: password.length >= 8,
                },
            ],
            value: password,
        };

        const passwordConfirmValidation: ValidationPropertyType = {
            validationList: [
                {
                    text: localeContext.getLocalizedString(
                        'RESET_PASSWORD__PASSWORD_AND_CONFIRM_PASSWORD_SHOULD_BE_THE_SAME'
                    ),
                    isValid: password === passwordConfirm && passwordConfirm.length > 0,
                },
                {
                    text: localeContext.getLocalizedString('RESET_PASSWORD__CONFIRM_PASSWORD_IS_REQUIRED'),
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

    handleFormSubmit = async (evt: SyntheticEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const {state, props} = this;
        const {resetPasswordForm, isInProgress} = state;
        const {password} = resetPasswordForm;

        if (isInProgress) {
            console.error('Form is in progress');
            return;
        }

        if (this.getIsFormValid() === false) {
            console.error('Form is not valid');
            return;
        }

        this.setState({isInProgress: true});

        const resetPasswordResult = await resetPassword(password);

        this.setState({isInProgress: false});

        if (isError(resetPasswordResult)) {
            console.error('-->', resetPasswordResult);
            return;
        }

        props.history.push(routePathMap.passwordResetSuccess.path);
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
        const {state, props} = this;
        const {localeContext} = props;
        const {isInProgress} = state;
        const formValidation = this.validateForm();
        const isPasswordValid = getIsValidationItemValid(formValidation.password);
        const isPasswordConfirmValid = getIsValidationItemValid(formValidation.passwordConfirm);

        return (
            <form action="#" className={passwordResetStyle.password_reset__form} onSubmit={this.handleFormSubmit}>
                <h1 className={passwordResetStyle.password_reset__form__header}>
                    <Locale stringKey="RESET_PASSWORD__PLEASE_ENTER_YOUR_NEW_PASSWORD"/>
                </h1>

                <InputText
                    isValid={isPasswordValid || !formValidation.password.value}
                    onInput={this.handleChangePassword}
                    placeholder={localeContext.getLocalizedString('RESET_PASSWORD__PASSWORD')}
                    type={inputTextTypeMap.password}
                />
                <ValidationHint validation={formValidation.password}/>

                <InputText
                    isValid={isPasswordConfirmValid || !formValidation.passwordConfirm.value}
                    onInput={this.handleChangePasswordConfirm}
                    placeholder={localeContext.getLocalizedString('RESET_PASSWORD__CONFIRM_PASSWORD')}
                    type={inputTextTypeMap.password}
                />
                <ValidationHint validation={formValidation.passwordConfirm}/>

                <button
                    className={classNames(passwordResetStyle.password_reset__form__button, {
                        [passwordResetStyle.password_reset__form__button__is_in_progress]: isInProgress,
                        [passwordResetStyle.password_reset__form__button__active]: this.getIsFormValid(),
                    })}
                    type="submit"
                >
                    <Locale stringKey="RESET_PASSWORD__SET_PASSWORD"/>
                </button>
            </form>
        );
    }
}
