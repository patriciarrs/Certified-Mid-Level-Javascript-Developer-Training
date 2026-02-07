// 1. Plant Your Seeds:
const garden = ["Tomato", "Carrot", "Lettuce", "Cucumber", "Pepper"];
console.log(`Initial garden: ${garden}`);

// 2. Garden Growth:
garden.push("Pumpkin"); // Add to the end
garden.unshift("Sunflower"); // Add to the beginning

console.log(`Updated garden: ${garden}`);
console.log(`Number of plants: ${garden.length}`);

// 3. Harvest Time:
const lastItem = garden.pop(); // Remove the last item
const firstItem = garden.shift(); // Remove the first item

console.log(`Harvested: ${firstItem} and ${lastItem}`);

// 4. Garden Maintenance:
const cucumberIndex = garden.indexOf("Cucumber");
garden[cucumberIndex] = "Bell Pepper";

console.log(`Replaced plant at index: ${cucumberIndex}`);
console.log(`Garden after replacement: ${garden}`);

// 5. Garden Health Check:
const includesWeeds = garden.includes("Weeds");
console.log(`Garden includes Weeds: ${includesWeeds}`);