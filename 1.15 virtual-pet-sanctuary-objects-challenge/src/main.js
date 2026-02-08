/* 1. Create Virtual Pet */
const createVirtualPet = (name, species, mood) => {
    return { name, species, mood };
};

const pixel = createVirtualPet("Pixel", "dog", 0.8);
const bitsy = createVirtualPet("Bitsy", "cat", 0.6);
const datastream = createVirtualPet("Datastream", "fish", 0.5);

/* 2. Add to Sanctuary */
const petSanctuary = {};

const addToSanctuary = (pet) => petSanctuary[pet.name] = pet;

addToSanctuary(pixel);
addToSanctuary(bitsy);
addToSanctuary(datastream);

console.log(petSanctuary);

/* 3. Check Sanctuary */
const isPetInSanctuary = petName => petName in petSanctuary;

const isPixelInSanctuary = isPetInSanctuary("Pixel");
const isGlitchInSanctuary = isPetInSanctuary("Glitch");

console.log('--Sanctuary Check--')
console.log('Pixel is in sanctuary:', isPetInSanctuary('Pixel')) // true
console.log('Glitch is in sanctuary:', isPetInSanctuary('Glitch')) // false

/* 4. Generate Pet Report */
const generatePetReport = () => {
    console.log("--Pet Report--");

    for (const name in petSanctuary) {
        const pet = petSanctuary[name];

        console.log(`Name: ${pet.name}, Species: ${pet.species}, Mood: ${pet.mood}`);
    }
};

generatePetReport();

/* 5. Find Happy Pets */
const findHappyPets = (threshold) => {
    const happyPets = [];

    for (const name in petSanctuary) {
        const pet = petSanctuary[name];

        if (pet.mood >= threshold) {
            happyPets.push(pet);
        }
    }

    return happyPets;
}

console.log(`
--Happy Pets--
${JSON.stringify(findHappyPets(0.7))}
`);