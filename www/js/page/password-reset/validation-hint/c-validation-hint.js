// @flow

import React, {type Node} from 'react';

import type {ValidationItemType, ValidationPropertyType} from '../type-password-reset';

import validationHintStyle from './validation-hint.style.scss';
import {getHintClassName} from './validation-hint-helper';

type PropsType = {|
    +validation: ValidationPropertyType,
|};

export function ValidationHint(props: PropsType): Node {
    const {validation} = props;

    return (
        <div className={validationHintStyle.validation_hint__wrapper}>
            {validation.validationList.map((validationItem: ValidationItemType): Node => {
                return (
                    <p className={getHintClassName(validation, validationItem)} key={validationItem.text}>
                        {validationItem.text}
                    </p>
                );
            })}
        </div>
    );
}
