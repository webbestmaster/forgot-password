// @flow

import type {Node} from 'react';
import React, {Component} from 'react';

import {Locale} from '../../component/locale/c-locale';

import homeStyle from './home.style.scss';
import pathToImage from './image/java-script-logo.png';

type PropsType = {};
type StateType = null;

export class Home extends Component<PropsType, StateType> {
    componentDidMount() {
        console.log('---> Component Home did mount');
    }

    render(): Node {
        return (
            <div className={homeStyle.home__wrapper}>
                <button type="button">| the button |</button>
                <hr/>
                <span>home page</span>
                <hr/>
                <Locale stringKey="META__LANGUAGE_NAME"/>
                <hr/>
                <img alt="" src={pathToImage}/>
                <div className={homeStyle.image}/>
            </div>
        );
    }
}
