import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducers} from './lib-store';

@NgModule({
    imports: [
        StoreModule.forFeature('libState', reducers)
    ],
})
export class WebCoreModule {
}
