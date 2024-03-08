// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let favorite_fruit: string[] = [`pineapple`, `Mango`, `Orange`];

if(favorite_fruit.includes(`Orange`)){
    console.log(`I like Oranges`);
}else {
    console.log(`I dont like Oranges`);
}

if(favorite_fruit.includes(`pineapple`)){
    console.log(`pineapple is one of my favourite fruits`);
}else {
    console.log(`I dont like pineapples`);
}

if(favorite_fruit.includes(`Apple`)){
    console.log(`I love Apples`);
    
}else {
    console.log(`Apples are good but not my favorite`);
}

if(favorite_fruit.includes(`Mango`)){
    console.log(`I love Mango`);
}else {
    console.log(`Mango is not one of my favourite fruit`);
}

if(favorite_fruit.includes(`Grapes`)){
    console.log(`I like grapes`);
}else {
    console.log(`Grapes are good but maybe not good enough`);
}





