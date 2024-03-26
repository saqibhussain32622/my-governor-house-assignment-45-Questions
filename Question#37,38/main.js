//Question# 37
// function make_shirt(size: string = "large", message: string = "I love TypeScript") {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt(); // Default large and message
// make_shirt("medium"); // Default message, medium size
// make_shirt("small", "Dive into Coding"); // Custom message, small size
//Question# 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
