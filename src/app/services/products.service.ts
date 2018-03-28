import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductsService {

  constructor() { }

  getAllProducts(): Product[] {
    return [
    {code: 'P100', nom: 'café', prixUnitaire: 1200},
    {code: 'P200', nom: 'thé', prixUnitaire: 1000},
    {code: 'P300', nom: 'jus', prixUnitaire: 500.5},
    {code: 'P400', nom: 'coca cola', prixUnitaire: 700}
    ];
  }
}
