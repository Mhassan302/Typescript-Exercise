// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Ronaldo", "Babar Azam", "Keanu Reeves", "Khabib"];
guestList.forEach((function (Element) {
    return console.log("Hello! ".concat(Element, " how are you? I would like to invite you on dinner, looking forward to your response"));
}));
