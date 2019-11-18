// @flow

import {PasswordReset} from '../../page/password-reset/c-password-reset';
import {PasswordResetSuccess} from '../../page/password-reset-success/c-password-reset-success';

import type {RedirectItemType, RouteItemType} from './render-route-helper';
import {routePathMap} from './routes-path-map';

export const routeItemMap: {[key: string]: RouteItemType | RedirectItemType} = {
    home: {
        from: routePathMap.home.path,
        path: routePathMap.passwordReset.path,
        type: 'redirect',
    },
    passwordReset: {
        path: routePathMap.passwordReset.path,
        component: PasswordReset,
        type: 'route',
    },
    passwordResetSuccess: {
        path: routePathMap.passwordResetSuccess.path,
        component: PasswordResetSuccess,
        type: 'route',
    },
};
