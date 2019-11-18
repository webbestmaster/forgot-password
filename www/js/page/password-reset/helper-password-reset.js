// @flow

import type {ValidationItemType, ValidationPropertyType} from './type-password-reset';

export function getIsValidationItemValid(validationProperty: ValidationPropertyType): boolean {
    return validationProperty.validationList.every(
        (validationItem: ValidationItemType): boolean => validationItem.isValid
    );
}
