// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList: string[] = ["Ronaldo", "Virat Kohli", "Keanu Reeves", "Rohit Sharma"];

guestList.forEach((Element => 

    console.log(`Hello! ${Element} how are you? I would like to invite you on dinner, looking forward to your response`)
));

console.log(`${guestList[0]} wont be able to make it to dinner maybe next time`)

let newGuest = "Leanardo Da vinci";

guestList[0] = newGuest;

guestList.forEach((Element => 

    console.log(`Hello! ${Element} how are you? I would like to invite you on dinner, looking forward to your response`)
));


//Exercise 16

console.log(`Great News I just found a bigger table so i can invite more peroples`);

guestList.unshift(`Ian Bishop`);

guestList.splice(3, 0, `Elon Musk`);

guestList.push(`Bill Gates`);

guestList.forEach((Element => 

    console.log(`Hello! ${Element} how are you? I would like to invite you on dinner, looking forward to your response`)
));

export{guestList};



