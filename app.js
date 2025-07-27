const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const result = deposit * (1 + rate / 12) ** 24;
if (result >= houseCost) {
	console.log(`We save: ${result}. Can buy. Rest ${result - houseCost}`);
} else {
	console.log(`We save: ${result}. Cann't buy(((`);
}