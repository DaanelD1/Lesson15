//зоздать массив
let fruit = ["apple", "banana", "orange"];
 console.log(fruit);
 console.log(fruit[0]);
 console.log(fruit[2]);
 console.log(fruit[fruit.length-1]);
 // FOR loop
 for(let i = 0; i < 3; i++){
     let message = `${i+1}. ${fruit[i]}`;
    console.log(message);
 }

 //FOREACH Loop
 fruit.forEach( element => {
    console.log("Hello ForEach", element );
 });

    //Выбрать случайный элемент массива
    let rnd = Math.floor(Math.random() * fruit.lenght);
    console.log(rnd);

    let randomfruit = [rnd];
    console.log("My random fruit", randomfruit);

    //добавить новый элемент в массив
    fruit.push("avcado");
    console.log(fruit);
    
    //удалить элемент из массива
    let bananaIndex = fruit.indexOf("banana");
    console.log("index of banana", bananaIndex);
    fruit.splice(bananaIndex, 1);
    console.log(fruit);