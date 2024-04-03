"use strict";
//Question# 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Tokyo", "Japan"));
// console.log(city_country("Paris", "France"));
//Question# 40
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
