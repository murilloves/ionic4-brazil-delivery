import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DemandsService {
	confirmDelivery: boolean;

	constructor() {}

	setConfirmDelivery(confirm: boolean) {
		this.confirmDelivery = confirm;
	}

	getConfirmDelivery() {
		return this.confirmDelivery;
	}
}
