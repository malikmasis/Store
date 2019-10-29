import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CartService } from "../cart.service";
import { Shipping } from "../models/shipping";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  shippingCosts: Shipping[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getShippingPrices().subscribe(p => {
      this.shippingCosts = p;
    })
  }

}
