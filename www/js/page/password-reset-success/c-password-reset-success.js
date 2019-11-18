// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import passwordResetStyle from '../password-reset/password-reset.style.scss';

import passwordResetSuccessStyle from './password-reset-success.style.scss';
import passwordResetSuccessImage from './image/password-reset-success.png';

type PropsType = {};

export function PasswordResetSuccess(props: PropsType): Node {
    return (
        <div className={passwordResetSuccessStyle.password_reset_success__wrapper}>
            <img
                alt=""
                className={passwordResetSuccessStyle.password_reset_success__image}
                src={passwordResetSuccessImage}
            />
            <h1 className={passwordResetSuccessStyle.password_reset_success__title}>Success!</h1>
            <p className={passwordResetSuccessStyle.password_reset_success__text}>
                Password was successfully changed.
                <br/>
                Please, sing in with with the new password.
            </p>
            <button
                className={classNames(
                    passwordResetStyle.password_reset__form__button,
                    passwordResetStyle.password_reset__form__button__active
                )}
                type="submit"
            >
                Sign In
            </button>
        </div>
    );
}
