"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList = ["Ronaldo", "Virat Kohli", "Keanu Reeves", "Rohit Sharma"];
exports.guestList = guestList;
guestList.forEach((Element => console.log(`Hello! ${Element} how are you? I would like to invite you on dinner, looking forward to your response`)));
console.log(`${guestList[0]} wont be able to make it to dinner maybe next time`);
let newGuest = "Leanardo Da vinci";
guestList[0] = newGuest;
guestList.forEach((Element => console.log(`Hello! ${Element} how are you? I would like to invite you on dinner, looking forward to your response`)));
//Exercise 16
console.log(`Great News I just found a bigger table so i can invite more peroples`);
guestList.unshift(`Ian Bishop`);
guestList.splice(3, 0, `Elon Musk`);
guestList.push(`Bill Gates`);
guestList.forEach((Element => console.log(`Hello! ${Element} how are you? I would like to invite you on dinner, looking forward to your response`)));
