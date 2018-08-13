import {heroesReducer} from './reducer';
import {ActionReducerMap} from '@ngrx/store';

export const reducers: ActionReducerMap<any> = {
    heroes: heroesReducer
};
