import { PizzaDirector } from "./pizza_director";
import { MargheritaPizzaBuilder } from "./pizza_margherita_builder";
import { PepperoniPizzaBuilder } from "./pizza_pepperoni_builder";

const director = new PizzaDirector();
  
// Criando uma pizza Margherita
const margheritaBuilder = new MargheritaPizzaBuilder();
director.setBuilder(margheritaBuilder);
director.makeMargherita();
const margheritaPizza = margheritaBuilder.getResult();
margheritaPizza.display();

// Criando uma pizza Pepperoni
const pepperoniBuilder = new PepperoniPizzaBuilder();
director.setBuilder(pepperoniBuilder);
director.makePepperoni();
const pepperoniPizza = pepperoniBuilder.getResult();
pepperoniPizza.display();

// Criando uma pizza personalizada
const customBuilder = new MargheritaPizzaBuilder();
const customPizza = customBuilder
.reset()
.setSize('pequena')
.setDough('recheada')
.addTopping('Queijo')
.addTopping('Frango')
.addTopping('Cebola')
.getResult();
customPizza.display();
