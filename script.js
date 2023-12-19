
const signs = [
    "♈ Aries (Ram)",
    "♉ Taurus (Bull)",
    "♊ Gemini (Twins)",
    "♋ Cancer (Crab)",
    "♌ Leo (Lion)",
    "♍ Virgo (Virgin)",
    "♎ Libra (Balance)",
    "♏ Scorpius (Scorpion)",
    "♐ Sagittarius (Archer)",
    "♑ Capricornus (Goat)",
    "♒ Aquarius (Water Bearer)",
    "♓ Pisces (Fish)"
]

const feelings = [
    "joy",
    "sad",
    "fear",
    "anger"
]

const recommendations = [
    "Do something meaningful.",
    "Reach out for support.",
    "Confront your feelings.",
    "Distract yourself.",
    "Consider your feelings logically.",
    "Take a break.",
    "Express your feelings constructively.",
    "Focus on finding a solution.",
    "Practice compassion.",
    "Focus on the behavior, not the person.",
]


const arraySelect = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

let sign = arraySelect(signs);
let feeling = arraySelect(feelings);
let recommendation = arraySelect(recommendations);

console.log(`Your sign is ${sign}
You are feeling ${feeling}.
You should: "${recommendation}"`);