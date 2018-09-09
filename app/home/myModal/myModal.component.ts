import { Component, OnInit } from "@angular/core";
import { ModalDialogService, ModalDialogOptions, ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
	selector: "MyModal",
	moduleId: module.id,
	templateUrl: "./myModal.component.html",
	styleUrls: ['./myModal.component.css']
})
export class MyModalComponent implements OnInit {

	constructor(
		private params: ModalDialogParams
	) {
	}

	ngOnInit(): void {
	}

	closeModal() {
		this.params.closeCallback();
	}
}