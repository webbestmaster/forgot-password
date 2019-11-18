// @flow

import type {ValidationItemType, ValidationPropertyType} from '../type-password-reset';

import validationHintStyle from './validation-hint.style.scss';

export function getHintClassName(validation: ValidationPropertyType, validationItem: ValidationItemType): string {
    const baseClassName = validationHintStyle.validation_hint__item;

    if (validationItem.isValid) {
        return `${baseClassName} ${validationHintStyle.validation_hint__item__valid}`;
    }

    if (validation.value === '') {
        return `${baseClassName} ${validationHintStyle.validation_hint__item__inactive}`;
    }

    return `${baseClassName} ${validationHintStyle.validation_hint__item__invalid}`;
}
