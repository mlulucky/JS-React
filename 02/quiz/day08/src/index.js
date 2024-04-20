import { getRandomName, getRandomEmail, getAnimal } from "./random.js";

const persons = [];
for(let i=0; i<3; i++) {
	persons.push({name: getRandomName(), email: getRandomEmail(), animal: getAnimal()});
}

for(let person of persons) {
	console.log(`이름은 ${person.name}이고, 이메일은 ${person.email}이다. 동물 ${person.animal}을 좋아한다.`);
}
