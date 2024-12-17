import { Pizza } from "./pizza";

export interface PizzaBuilder {
    reset(): this;
    setSize(size: string): this;
    setDough(dough: string): this;
    addTopping(topping: string): this;
    getResult(): Pizza;
  }