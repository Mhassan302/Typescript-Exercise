// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var guestList = ["Ronaldo", "Babar Azam", "Keanu Reeves", "Khabib"];
guestList.forEach((function (Element) {
    return console.log("Hello! ".concat(Element, " how are you? I would like to invite you on dinner, looking forward to your response"));
}));
//Exercise 15
console.log("".concat(guestList[0], " wont be able to make it to dinner maybe next time"));
var newGuest = "Leanardo Da vinci";
guestList[0] = newGuest;
guestList.forEach((function (Element) {
    return console.log("Hello! ".concat(Element, " how are you? I would like to invite you on dinner, looking forward to your response"));
}));
//Exercise 16
console.log("Great News I just found a bigger table so i can invite more peoples");
guestList.unshift("Ian Bishop");
guestList.splice(3, 0, "Sir Zia Khan");
guestList.push("Virat Kohli");
guestList.forEach((function (Element) {
    return console.log("Hello! ".concat(Element, " how are you? I would like to invite you on dinner, looking forward to your response"));
}));
//Exercise 17
console.log("I just got mail that the table wont arrive sorry to announce that i will only be able to invite 2 guests now");
while (guestList.length > 2) {
    var removedGuests = guestList.pop();
    console.log("Dear ".concat(removedGuests, " Sorry i wont be able to host you on dinner"));
}
guestList.forEach((function (Element) { return console.log("".concat(Element, " You are still invited on dinner")); }));
guestList.splice(0, 2);
console.log(guestList);
