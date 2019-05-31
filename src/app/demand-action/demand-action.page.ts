import { Component, OnInit } from '@angular/core';
import { DemandsService } from '../services/demands.service';

@Component({
	selector: 'app-demand-action',
	templateUrl: './demand-action.page.html',
	styleUrls: [ './demand-action.page.scss' ]
})
export class DemandActionPage implements OnInit {
	confirmDelivery: boolean;

	constructor(public demandsService: DemandsService) {}

	ngOnInit() {
		this.confirmDelivery = this.demandsService.getConfirmDelivery();
	}
}
