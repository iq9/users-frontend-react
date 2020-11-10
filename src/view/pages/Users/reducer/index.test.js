import * as Types from './types';
import reducer from './';

describe('Reducers', () => {
  const defaultState = {
    list: [
      {
        id: 1,
        name: 'Russ Brooks',
        email: 'foo@bar.com',
        title: 'Title example 1',
        phone: '215-555-1212',
        status: true,
      },
      {
        id: 2,
        name: 'Agent Smith',
        email: 'smith@machines.com',
        title: 'Title example 2',
        phone: '215-555-1111',
        status: true,
      },
      {
        id: 3,
        name: 'Neo',
        email: 'neo@apple.com',
        title: 'Title example 3',
        phone: '215-555-1000',
        status: true,
      },
    ],
  };

  it('returns all', () => {
    const payload = [
      {
        id: 1,
        name: 'Russ Brooks',
        email: 'foo@bar.com',
        title: 'Title example 1',
        phone: '215-555-1212',
        status: true,
      },
      {
        id: 2,
        name: 'Agent Smith',
        email: 'smith@machines.com',
        title: 'Title example 2',
        phone: '215-555-1111',
        status: true,
      },
      {
        id: 3,
        name: 'Neo',
        email: 'neo@apple.com',
        title: 'Title example 3',
        phone: '215-555-1000',
        status: true,
      },
    ];

    expect(
      reducer(
        {},
        {
          type: Types.FETCH,
          payload,
        }
      )
    ).toEqual(defaultState);
  });

  it('returns state with the new one', () => {
    const payload = { name: 'Example 4', status: true };

    const result = reducer(defaultState, {
      type: Types.CREATE,
      payload,
    });

    expect(result.list.length).toEqual(4);
    expect(result.list[3]).toEqual(expect.objectContaining(payload));
  });

  it('returns state with the updated one', () => {
    const newState = {
      list: [
        {
          id: 1,
          name: 'Russ Brooks Updated',
          email: 'foo@bar.com',
          title: 'Title example 1',
          phone: '215-555-1212',
          status: true,
        },
        {
          id: 2,
          name: 'Agent Smith',
          email: 'smith@machines.com',
          title: 'Title example 2',
          phone: '215-555-1111',
          status: true,
        },
        {
          id: 3,
          name: 'Neo',
          email: 'neo@apple.com',
          title: 'Title example 3',
          phone: '215-555-1000',
          status: true,
        },
      ],
    };

    expect(
      reducer(defaultState, {
        type: Types.UPDATE,
        payload: { id: 1, name: 'Russ Brooks Updated' },
      })
    ).toEqual(newState);
  });

  it('returns state without the removed one', () => {
    const newState = {
      list: [
        {
          id: 2,
          name: 'Agent Smith',
          email: 'smith@machines.com',
          title: 'Title example 2',
          phone: '215-555-1111',
          status: true,
        },
        {
          id: 3,
          name: 'Neo',
          email: 'neo@apple.com',
          title: 'Title example 3',
          phone: '215-555-1000',
          status: true,
        },
      ],
    };

    expect(
      reducer(defaultState, {
        type: Types.REMOVE,
        id: 1,
      })
    ).toEqual(newState);
  });
});
