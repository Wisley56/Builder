import { Pizza } from "./pizza";
import { PizzaBuilder } from "./pizza_builder";

export class MargheritaPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;
  
    constructor() {
      this.pizza = new Pizza();
    }
  
    reset(): this {
      this.pizza = new Pizza();
      return this;
    }
  
    setSize(size: string): this {
      this.pizza.setSize(size);
      return this;
    }
  
    setDough(dough: string): this {
      this.pizza.setDough(dough);
      return this;
    }
  
    addTopping(topping: string): this {
      this.pizza.addTopping(topping);
      return this;
    }
  
    getResult(): Pizza {
      return this.pizza;
    }
  }
  