var x = 12;

function scope(){
    var x = 33;
    console.log(x);
};

scope();
console.log(x);

/*
returns
12
33
think of it a playpen...bc the variable is localized within the function, var is kid trying to get out of playpen, let is obedient child who stays put
*/


//redeclaring new x variable rather than a local variable as before
function scope(){
    x = 33;
    console.log(x);
};

scope();
console.log(x);

/*
returns
33
33
*/

var x = 12;

function scope(){
    let x = 33;
    console.log(x);
};

scope();
console.log(x);

/*
returns
33
12
*/

var x = 12;

function scope(){
    var x = 33
    if(true){
        x = 45;
        console.log(x)
    };
};


scope();
console.log(x);