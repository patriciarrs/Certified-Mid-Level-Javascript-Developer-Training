/* 1. Function declaration */
function createPotion(baseIngredient = "water", catalystIngredient = "moonstone dust", powerBooster = "dragon breath") {
    return `A mystical brew of ${baseIngredient}, ${catalystIngredient}, and ${powerBooster}!`;
}

console.log(createPotion());
console.log(createPotion("witch hazel"));
console.log(createPotion("toadstool extract", "pixie wings"));
console.log(createPotion("shadow essence", "vampire tears", "phoenix ash"));

/* 2. Function expression */
const castCharm = function (name) {
    return `May luck and fortune smile upon ${name}!`;
};

console.log(castCharm("Elara the Elf"));

/* 3. Arrow function */
const calculateSpellPower = age => age * 10;

const power = calculateSpellPower(25);

console.log(`Spell Power: ${power}`);

/* 4. Spellbook array */
const castFireball = power => `Fireball blazes with power ${power}!`;
const summonWaterSprout = power => `Water spout surges with power ${power}!`;
const callLightning = power => `Lightning strikes with power ${power}!`;

const elementalSpells = [castFireball, summonWaterSprout, callLightning];

for (let i in elementalSpells) {
    const spell = elementalSpells[i];

    console.log(spell(i + 1));
}

/* 5. Magical Condition */
const determineSpellStrength = power => {
    if (power < 50) {
        return "Weak";
    } else if (power > 100) {
        return "Strong";
    } else {
        return "Moderate";
    }
};

console.log(determineSpellStrength(30));
console.log(determineSpellStrength(75));
console.log(determineSpellStrength(150));

/* 6. Callback Function */
const transformIngredients = (ingredients, transformation) => {
    return ingredients.map(ingredient => transformation(ingredient));
};

console.log(transformIngredients([
    'newt eyes',
    'toe of frog',
    'wool of bat',
    'tongue of dog'
], (ingredient) => `enchanted ${ingredient}`));