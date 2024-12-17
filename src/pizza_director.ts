import { PizzaBuilder } from "./pizza_builder";

export class PizzaDirector {
    private builder!: PizzaBuilder;
  
    setBuilder(builder: PizzaBuilder): void {
      this.builder = builder;
    }
  
    makeMargherita(): void {
      this.builder
        .reset()
        .setSize('grande')
        .setDough('fina')
        .addTopping('Queijo')
        .addTopping('Tomate')
        .addTopping('Manjericão');
    }
  
    makePepperoni(): void {
      this.builder
        .reset()
        .setSize('média')
        .setDough('tradicional')
        .addTopping('Queijo')
        .addTopping('Pepperoni');
    }
  }