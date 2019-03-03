import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Quinze de Novembro",
        numero: "300",
        complemento: "Apto 20",
        bairro: "Santa Mônica",
        cep: "03697101",
        cidade: {
          id: "1",
          nome: "Uberlandia",
          estado: {
            id: "1",
            nome: "Minas Gerais"
          }
        }
      }
    ]
  }

}
