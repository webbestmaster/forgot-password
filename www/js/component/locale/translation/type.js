// @flow

export type LangDataType = {
    /* eslint-disable id-match, id-length */
    +META__LANGUAGE_NAME: string,

    +RESET_PASSWORD__PLEASE_ENTER_YOUR_NEW_PASSWORD: string,
    +RESET_PASSWORD__PASSWORD: string,
    +RESET_PASSWORD__CONFIRM_PASSWORD: string,
    +RESET_PASSWORD__SET_PASSWORD: string,
    +RESET_PASSWORD__AT_LEAST_1_LETTER: string,
    +RESET_PASSWORD__AT_LEAST_1_NUMBER: string,
    +RESET_PASSWORD__8_SYMBOLS_MINIMUM: string,
    +RESET_PASSWORD__PASSWORD_AND_CONFIRM_PASSWORD_SHOULD_BE_THE_SAME: string,
    +RESET_PASSWORD__CONFIRM_PASSWORD_IS_REQUIRED: string,

    +RESET_PASSWORD_SUCCESS__SUCCESS: string,
    +RESET_PASSWORD_SUCCESS__PASSWORD_WAS_SUCCESSFULLY_CHANGED: string,
    +RESET_PASSWORD_SUCCESS__PLEASE_SING_IN_WITH_WITH_THE_NEW_PASSWORD: string,
    +RESET_PASSWORD_SUCCESS__SIGN_IN: string,
    /* eslint-enable id-match */
};

// eslint-disable-next-line id-match
export type LangKeyType = $Keys<LangDataType>;
