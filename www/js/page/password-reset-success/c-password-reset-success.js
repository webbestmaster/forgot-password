// @flow

/* eslint-disable react/jsx-child-element-spacing */

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import passwordResetStyle from '../password-reset/password-reset.style.scss';
import {Locale} from '../../component/locale/c-locale';

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
            <h1 className={passwordResetSuccessStyle.password_reset_success__title}>
                <Locale stringKey="RESET_PASSWORD_SUCCESS__SUCCESS"/>
            </h1>
            <p className={passwordResetSuccessStyle.password_reset_success__text}>
                <Locale stringKey="RESET_PASSWORD_SUCCESS__PASSWORD_WAS_SUCCESSFULLY_CHANGED"/>
                <br/>
                <Locale stringKey="RESET_PASSWORD_SUCCESS__PLEASE_SING_IN_WITH_WITH_THE_NEW_PASSWORD"/>
            </p>
            <a
                className={classNames(
                    passwordResetStyle.password_reset__form__button,
                    passwordResetStyle.password_reset__form__button__active
                )}
                href="/"
            >
                <Locale stringKey="RESET_PASSWORD_SUCCESS__SIGN_IN"/>
            </a>
        </div>
    );
}
