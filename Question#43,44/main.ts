//Question# 43
// let magicians: string[] = ["Alice", "David", "Chris"];

// function make_great(magicians: string[]): string[] {
//      greatMagicians = [];
//     magicians.forEach(magician => {
//         greatMagicians.push(`${magician} the Great`);
//     });
//     return greatMagicians;
// }

// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// (magicians); // Shows original names
// console.log("Great magicians:");
// (greatMagicians); // Shows modified names




//Question# 44
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
