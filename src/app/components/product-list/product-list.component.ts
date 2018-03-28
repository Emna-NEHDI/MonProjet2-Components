import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  data: Product[];
  constructor(private _service: ProductsService) {   // injection du service



  //  this.data = [
  //    {code: 'P100', nom: 'café', prixUnitaire: 1200},
  //    {code: 'P200', nom: 'thé', prixUnitaire: 1000},
  //    {code: 'P300', nom: 'jus', prixUnitaire: 500.5},
  //    {code: 'P400', nom: 'coca cola', prixUnitaire: 700}
// ];

  }

  ngOnInit() {
    this.data = this._service.getAllProducts();
  }


  ngOnChanges(): void {
    console.log('a change has beeen detected!');
  }

}
