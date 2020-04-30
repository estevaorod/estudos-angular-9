import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.productService.read().subscribe(prods => {
      this.products = prods;
    });
  }

  deletarProduto(id: string): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso!');
      this.carregarProdutos();
    });
  }
}
