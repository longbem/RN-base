import { setToken } from './actions';
import { callApiLogin } from './service';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

export const fetchLogin = (action$) => {
  return action$.pipe(
    ofType('LOGIN'),
    mergeMap((action) => {
      const { username, password } = action.payload;
      return callApiLogin(username, password).map((response) => {
        return setToken(response.data.token);
      });
    }),
  );
};
