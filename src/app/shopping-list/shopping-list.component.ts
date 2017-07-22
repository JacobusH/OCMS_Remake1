import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/models/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Apples', 4),
    new Ingredient('Tomatoes', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
