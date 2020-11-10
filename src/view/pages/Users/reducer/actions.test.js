import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Types from './types';
import * as actions from './actions';
import api from './api';
import apiMock from './__mocks__/api';

jest.mock('./api');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore([]);
  });

  it('fetches all users', async () => {
    api.get.mockResolvedValue({ data: apiMock.get });

    const expectedActions = [{ type: Types.FETCH, payload: apiMock.get }];

    await store.dispatch(actions.fetch());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates a user', async () => {
    api.create.mockResolvedValue({ data: apiMock.post });

    const expectedActions = [{ type: Types.CREATE, payload: apiMock.post }];

    await store.dispatch(actions.create(apiMock.post));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('updates a user', async () => {
    api.update.mockResolvedValue({ data: apiMock.put });

    const expectedActions = [{ type: Types.UPDATE, payload: apiMock.put }];

    await store.dispatch(actions.update(apiMock.put));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('removes a user', async () => {
    api.remove.mockResolvedValue(apiMock.delete);

    const expectedActions = [{ type: Types.REMOVE, id: 123 }];

    await store.dispatch(actions.remove(123));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
