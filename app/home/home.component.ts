import { Component, OnInit, ViewContainerRef, NgModuleFactory, NgModuleFactoryLoader } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { MyModalComponent } from "./myModal/myModal.component";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
        private moduleLoader: NgModuleFactoryLoader
    ) { }

    ngOnInit(): void {
    }

    openModal() {
        this.moduleLoader.load("./home/myModal/myModal.module#MyModalModule").then(
            (module: NgModuleFactory<any>) => {
                const moduleRef = module.create(this.vcRef.parentInjector);
                this.modal.showModal(MyModalComponent, {
                    moduleRef,
                    fullscreen: true,
                    viewContainerRef: this.vcRef,
                    context: {}
                }).then(
                    res => {
                        // when modal is closed
                    });
            });
    }
}
