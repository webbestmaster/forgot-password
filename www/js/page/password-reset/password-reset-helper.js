// @flow

/* global fetch */

export function resetPassword(password: string): Promise<Error | string> {
    return fetch('/api/url/reset-password', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({password}),
    })
        .then((response: Response): Promise<string> => response.text())
        .catch((error: Error): Error => {
            console.error('Can not reset password');
            return error;
        });
}
