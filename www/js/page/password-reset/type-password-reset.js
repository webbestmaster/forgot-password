// @flow

export type ValidationItemType = {|+text: string, +isValid: boolean|};

export type ValidationPropertyType = {|
    +validationList: Array<ValidationItemType>,
    +value: string,
|};

export type FormValidationType = {|
    +password: ValidationPropertyType,
    +passwordConfirm: ValidationPropertyType,
|};
