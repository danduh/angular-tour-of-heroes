import {Hero} from '../hero';

export type HeroesState = Hero[]

const initialState = [];

export function heroesReducer(state = initialState, action): HeroesState {
    return state;
}
