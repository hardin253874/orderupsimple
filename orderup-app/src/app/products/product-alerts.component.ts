import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html'
})
export class ProductAlertsComponent implements OnInit {
    constructor() { }

    @Input() image;
    @Output() notify = new EventEmitter();
    ngOnInit() {
    }
    notified() {
        this.notify.emit(this.image.name);
    }

}
