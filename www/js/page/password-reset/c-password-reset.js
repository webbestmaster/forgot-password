// @flow

import React, {Component, type Node} from 'react';

import {InputPassword} from '../../component/layout/input/input-password/c-input-password';
import type {LocaleContextType} from '../../component/locale/c-locale-context';

type PropsType = {
    +localeContext: LocaleContextType,
};
type StateType = {};

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

    render(): Node {
        const {props} = this;
        const {localeContext} = props;

        return (
            <>
                <InputPassword
                    isValid
                    onInput={() => null}
                    placeholder={localeContext.getLocalizedString('LOGIN_POPUP__BUTTON_LOGIN')}
                />
                <InputPassword
                    isValid
                    onInput={() => null}
                    placeholder={localeContext.getLocalizedString('LOGIN_POPUP__LINK_LOST_PASSWORD')}
                />
            </>
        );
    }
}
