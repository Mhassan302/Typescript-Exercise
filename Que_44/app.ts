// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwiches(...items: string[]):void{
    
    console.log(`Summary of sandwich ingredients`)

    if (items.length === 0){
        console.log("No sandwich ingredients slected");
    }else{
        console.log(`sandwich ingredients slected: ` + items.join(", "));
    }

    console.log();
}

sandwiches("pepperoni", "chicken", "onion", "mushroom");

sandwiches("Cheese", "Beef", "onion", "mushroom", "tomato", "cucumber");

sandwiches();

