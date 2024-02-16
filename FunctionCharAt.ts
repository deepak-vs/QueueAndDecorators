type hasCharAtMethod={
    charAtMethod():void 
}


function myFunction<T extends hasCharAtMethod>(key :T):void{
    console.log("This is Generic Function that charAtMethod Type")
    key.charAtMethod();
}


type introType={
    name:string;
    age:number,
    charAtMethod():void
}



let Person:introType={
    name:"deepak",
    age:23,
    charAtMethod():void{
        console.log("This is charAtMethod")
    }
}

//calling the generic function that works with type that have charatMethod in it .

//Our introType has charAtMethod in it. and Person object uses the introType therefore generic function (myfunction) will work the Person object

myFunction<hasCharAtMethod>(Person);


