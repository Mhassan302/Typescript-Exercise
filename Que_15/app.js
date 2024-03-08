"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList = ["Ronaldo", "Virat Kohli", "Keanu Reeves", "Rohit Sharma"];
guestList.forEach((Element => console.log(`Hello! ${Element} how are you? I would like to invite you on dinner, looking forward to your response`)));
console.log(`${guestList[0]} wont be able to make it to dinner maybe next time`);
let newGuest = "Leanardo Da vinci";
guestList[0] = newGuest;
guestList.forEach((Element => console.log(`Hello! ${Element} how are you? I would like to invite you on dinner, looking forward to your response`)));
