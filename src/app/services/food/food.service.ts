import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
import { tag } from '../../shared/models/tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAllFoodsBySearchTerm(searchTerm:string):Food[]
  {return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
  }
  getAllTags():tag[]{
    return[
      {name:'All',count:11},
      {name:'IndianCuisine',count:1},
      {name: 'PannerButterMasala',count:1},
      { name:'Mughlai',count:1},
      {name: 'Veg',count:1},
      {name: 'Sandwitch',count:1},
      {name:'Curry',count:2},
      {name: 'PunjabFood',count:1},
      {name:'Spicy',count:1},
      {name: 'FastFood',count:5},
      {name: 'Pizza',count:2},
      {name: 'Lunch',count:4},
      {name:'SlowFood',count:2}, 
      {name: 'Hamburger',count:1},
      {name:'Fry',count:1},
      {name: 'Soup',count:1}
    ];

  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag=="All" ? this.getAll(): this.getAll().filter(food=>food.tags?.includes(tag));
  }
  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Paneer butter masala',
        cookTime: '10-15',
        price: 90,
        favorite: false,
        origins: ['Punjab',' India'],
        stars: 4.5,
        imageUrl: '/assets/foods/1739066.jpg',
        tags: ['IndianCuisine', 'PannerButterMasala', 'Veg'],
      },
      {
        id: 2,
        name: 'Pulao with gravy',
        price: 80,
        cookTime: '10-20',
        favorite: true,
        origins: ['Mughlaicusine', ' SouthAsia'],
        stars: 4.7,
        imageUrl: '/assets/foods/th.jpg',
        tags: ['Mughlai', 'Lunch'],
      },
      {
        id: 3,
        name: 'Sandwich',
        price: 50,
        cookTime: '5-10',
        favorite: true,
        origins: ['England', ' UK'],
        stars: 3.5,
        imageUrl: '/assets/foods/th1.jpg',
        tags: ['FastFood', 'Sandwitch'],
      },
      {
        id: 4,
        name: 'ButterChicken',
        price: 80,
        cookTime: '20-30',
        favorite: true,
        origins: ['Punjab', 'NorthIndia'],
        stars: 3.3,
        imageUrl: '/assets/foods/butch.jpg',
        tags: ['Curry', 'PunjabFood'],
      },
      {
        id: 5,
        name: 'Paneer Tikka',
        price: 80,
        cookTime: '10-15',
        favorite: false,
        origins: ['South', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/foods/pantik.jpg',
        tags: ['Spicy', 'Curry'],
      },
      {
        id: 6,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 120,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/foods/pep.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Meatball',
        price: 90,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/foods/meatball.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 8,
        name: 'Hamburger',
        price: 150,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/foods/ham.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 9,
        name: 'Fried Potatoes',
        price: 70,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/foods/pot.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 10,
        name: 'Chicken Soup',
        price: 60,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/foods/soup.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 11,
        name: 'Vegetables Pizza',
        price: 110,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/foods/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
     
  }

