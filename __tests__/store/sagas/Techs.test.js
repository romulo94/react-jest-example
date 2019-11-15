import { runSaga } from 'redux-saga';

import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { getTechsSuccess, getTechsFailure } from '~/store/techs/actions';
import { getTechs } from '~/store/techs/sagas';

const apiMock = new MockAdapter(api);

describe('Techs saga', () => {
  it('should be able to fetch techs', async () => {
    const dispatch = jest.fn();

    apiMock.onGet().reply(200, ['Node.js']);
    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['Node.js']));
  });

  it('should fail api when api return error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet().reply(500);
    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsFailure());
  });
});
