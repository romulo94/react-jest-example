import reducer, { INITIAL_STATE } from '~/store/techs/reducer';
import * as Techs from '~/store/techs/actions';

describe('Techs reducer', () => {
  it('ADD_TECH', () => {
    const state = reducer(INITIAL_STATE, Techs.addTech('Node.js'));

    expect(state).toStrictEqual(['Node.js']);
  });

  it('return default', () =>
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE));
});
