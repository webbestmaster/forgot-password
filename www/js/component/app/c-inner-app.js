// @flow

import React, {type Node} from 'react';
import {Route, Switch} from 'react-router-dom';

import {PageNotFound} from '../../page/page-not-found/c-page-not-found';
import {LocaleProvider} from '../locale/c-locale-context';
import {ScreenProvider} from '../screen/c-screen-context';
import {MainWrapper} from '../main-wrapper/c-main-wrapper';

import {routeItemMap} from './routes';
import {redderEmptyRoute, redderRoute} from './render-route-helper';
import {renderWrapperList} from './wrapper-list';

const wrapperList = [LocaleProvider, ScreenProvider, MainWrapper];

const routeItemKeyList = Object.keys(routeItemMap);

export function InnerApp(): Node {
    return renderWrapperList(wrapperList, [
        routeItemKeyList.map((key: string): Node => redderRoute(routeItemMap[key])),
        <Switch key="switch">
            {routeItemKeyList.map((key: string): Node => redderEmptyRoute(routeItemMap[key]))}
            <Route component={PageNotFound}/>
        </Switch>,
    ]);
}
