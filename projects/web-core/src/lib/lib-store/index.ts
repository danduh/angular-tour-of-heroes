import {ActionReducerMap} from '@ngrx/store';
import {libReducer} from './lib-reducer';

export const reducers: ActionReducerMap<any> = {
    permissions: libReducer
};
