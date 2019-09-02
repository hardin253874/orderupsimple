import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn(' submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
