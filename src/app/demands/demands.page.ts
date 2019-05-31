import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

import { DemandsService } from '../services/demands.service';

@Component({
	selector: 'app-demands',
	templateUrl: './demands.page.html',
	styleUrls: [ './demands.page.scss' ]
})
export class DemandsPage implements OnInit {
	demands = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

	constructor(
		public actionSheetController: ActionSheetController,
		public demandsService: DemandsService,
		public navCtrl: NavController
	) {}

	ngOnInit() {}

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Ações',
			buttons: [
				{
					text: 'Detalhes',
					icon: 'clipboard',
					handler: () => {
						console.log('Detalhes clicked');
						this.navCtrl.navigateForward('/demand-detail');
					}
				},
				{
					text: 'Entregue',
					icon: 'checkmark-circle',
					cssClass: 'successIcon',
					handler: () => {
						console.log('Entregue clicked');
						this.demandsService.setConfirmDelivery(true);
						this.navCtrl.navigateForward('/demand-action');
					}
				},
				{
					text: 'Não entregue',
					icon: 'close-circle',
					cssClass: 'dangerIcon',
					handler: () => {
						console.log('Não entregue clicked');
						this.demandsService.setConfirmDelivery(false);
						this.navCtrl.navigateForward('/demand-action');
					}
				},
				{
					text: 'Fechar',
					icon: 'close',
					role: 'cancel',
					handler: () => {
						console.log('Fechar clicked');
					}
				}
			]
		});
		await actionSheet.present();
	}
}
