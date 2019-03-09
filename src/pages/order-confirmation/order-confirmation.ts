import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../services/domain/pedido.dto';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/domain/cart.service';
import { EnderecoDTO } from '../../models/endereco.dto';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';
import { PedidoService } from '../../services/domain/pedido.service';

@IonicPage()
@Component({
  selector: 'page-order-confirmation',
  templateUrl: 'order-confirmation.html',
})
export class OrderConfirmationPage {

  pedido: PedidoDTO;
  cartItems: CartItem[];
  cliente: ClienteDTO;
  endereco: EnderecoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService: CartService,
    public clienteService: ClienteService,
    public pedidoService: PedidoService) {

      this.pedido = this.navParams.get('pedido');

      console.log(this.pedido);

  }

  ionViewDidLoad() {
    this.cartItems = this.cartService.getCart().items;

    this.clienteService.findById(this.pedido.cliente.id)
      .subscribe(response =>{
        this.cliente = response as ClienteDTO;
        this.endereco = this.findEndereco(this.pedido.enderecoDeEntrega.id, response['enderecos']);
      },
      error =>{
        this.navCtrl.setRoot('HomePage');
      });
  }

  private findEndereco(id: string, enderecoList: EnderecoDTO[]): EnderecoDTO{
    let position = enderecoList.findIndex(x => x.id == id);
    return enderecoList[position];
  }

  total(){
    return this.cartService.total();
  }

  back(){
    this.navCtrl.setRoot('CartPage');
  }

  checkout(){
    this.pedidoService.insert(this.pedido)
      .subscribe(response =>{
        console.log(response.headers.get('location'));
        this.cartService.createOrClearCart();
      },
      error =>{
        if (error.status == 403){
          this.navCtrl.setRoot('HomePage');
        }
      })
  }

}
