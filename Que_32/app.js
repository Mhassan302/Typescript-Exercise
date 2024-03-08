"use strict";
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
let current_users = [`John`, `Edward`, `Sam`, `Ezio`, `Carlos`, `Morrison`, `Cena`];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = [`EdwArd`, `Ghost`, `Cpt. Price`, `Soap`, `EZIO`, `Sam`];
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
let current_usersLowercase = current_users.map(Element => Element.toLowerCase());
for (const user_names of new_users) {
    const user_namesLowercase = user_names.toLowerCase();
    if (current_usersLowercase.includes(user_namesLowercase)) {
        console.log(`"Username ${user_names}" is already taken, please choose another`);
    }
    else {
        console.log(`"Username ${user_names}" is available`);
    }
}
