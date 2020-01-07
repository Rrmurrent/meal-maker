const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []  
  },
    get appetizers () {
      return this._courses.appetizers;
    },
    get mains () {
      return this._courses.mains;
    },
    get desserts () {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
      },
    set mains(mains) {
        this._courses.mains = mains;
      },
        
    set desserts(desserts) {
        this._courses.desserts = desserts;
      },
    
    get courses ()  {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
    
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
       name:dishName,
       price:dishPrice, 
    };

    return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },

      generateRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizers.price + mains.price + desserts.price;
        return `Your Meal is ${appetizers.name}, ${mains.name}, and  ${desserts.name}. Your Total price for this meal is ${totalPrice}.`;
      }

    };
    
    menu.addDishToCourse('appetizers', 'egg rolls', 5.75);
    menu.addDishToCourse('appetizers', 'don don noodles', 7.00);
    menu.addDishToCourse('appetizers', 'onion rings', 8.20);
    
    menu.addDishToCourse('mains', 'pizza', 7.00);
    menu.addDishToCourse('mains', 'spaghetti', 5.75);
    menu.addDishToCourse('mains', 'friend rice', 8.20);
    
    menu.addDishToCourse('desserts', 'flan', 5.75);
    menu.addDishToCourse('desserts', 'friend ice cream', 7.00);
    menu.addDishToCourse('desserts', 'cheesecake', 8.20);
    
  const meal = menu.generateRandomMeal();
  console.log(meal);
  