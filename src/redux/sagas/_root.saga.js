import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import ranksSaga from './ranks.saga';
import dojosSaga from './dojos.saga';
import membersSaga from './members.saga';
import myDojoSaga from './myDojo.saga';
import searchSaga from './search.saga';
import dojoTransfer from './dojoTransfer.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    ranksSaga(),
    dojosSaga(),
    membersSaga(),
    myDojoSaga(),
    searchSaga(),
    dojoTransfer(),
  ]);
}
