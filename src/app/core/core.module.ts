import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestService} from "./services/test.service";


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        TestService
    ]
})
export class CoreModule {
}
