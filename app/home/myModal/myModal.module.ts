import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

import { MyModalRoutingModule } from "./myModal-routing.module";
import { MyModalComponent } from "./myModal.component";

export function modalParamsFactory() {
	return new ModalDialogParams({}, null);
}

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		MyModalRoutingModule
	],
	declarations: [
		MyModalComponent
	],
	providers: [
		{ provide: ModalDialogParams, useFactory: modalParamsFactory }
	],
	entryComponents: [
		MyModalComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class MyModalModule { }