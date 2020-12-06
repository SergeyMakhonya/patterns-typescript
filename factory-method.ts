interface IAnimal {
    say(): void;
}

class Cat implements IAnimal {
    say() {
        console.log('Мяяяяууу!!!');
    }
}

class Dog implements IAnimal {
    say() {
        console.log('Гааааввв!!!');
    }
}

//-----

interface AnimalCreator {
    createAnimal(): IAnimal;
}

class CatCreator implements AnimalCreator {
    createAnimal() {
        return new Cat();
    }
}

class DogCreator implements AnimalCreator {
    createAnimal() {
        return new Dog();
    }
}

//-----

const catCreator = new CatCreator();
const dogCreator = new DogCreator();

const cat = catCreator.createAnimal();
const dog = dogCreator.createAnimal();

cat.say();
dog.say();