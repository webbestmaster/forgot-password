// @flow

import {Home} from '../../page/home/c-home';
import {Login} from '../../page/login/c-login';
import {Register} from '../../page/register/c-register';

import type {RedirectItemType, RouteItemType} from './render-route-helper';
import {routePathMap} from './routes-path-map';

export const routeItemMap: {[key: string]: RouteItemType | RedirectItemType} = {
    home: {
        path: routePathMap.home.path,
        component: Home,
        type: 'route',
    },
    login: {
        path: routePathMap.login.path,
        component: Login,
        type: 'route',
    },
    register: {
        path: routePathMap.register.path,
        component: Register,
        type: 'route',
    },
};
