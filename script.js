document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // console.log(event.target.elements);

    console.log(event.target.question1.value);
    console.log(event.target.question2.value);
    console.log(event.target.question3.value);
    console.log(event.target.question4.value);
    console.log(event.target.question5.value);
    console.log(event.target.question6.value);
    console.log(event.target.question7.value);
    console.log(event.target.question8.value);
    console.log(event.target.question9.value);
    console.log(event.target.question10.value);

    const question1 = event.target.question1.value;
    const question2 = event.target.question2.value;
    const question3 = event.target.question3.value;
    const question4 = event.target.question4.value;
    const question5 = event.target.question5.value;
    const question6 = event.target.question6.value;
    const question7 = event.target.question7.value;
    const question8 = event.target.question8.value;
    const question9 = event.target.question9.value;
    const question10 = event.target.question10.value;

    let acertadas = 0;

    if (question1 == "kalel") {
        acertadas += 1;
    }

    if (question2 == "pueblo_paleta") {
        acertadas += 1;
    }

    if (question3 == "dard_vader") {
        acertadas += 1;
    }

    if (question4 == "vegeta") {
        acertadas += 1;
    }

    if (question5 == "derrick") {
        acertadas += 1;
    }

    if (question6 == "tony_stark") {
        acertadas += 1;
    }

    if (question7 == "pegaso") {
        acertadas += 1;
    }

    if (question8 == "luffy") {
        acertadas += 1;
    }

    if (question9 == "bolsillo_magico") {
        acertadas += 1;
    }

    if (question10 == "simulacion") {
        acertadas += 1;
    }

    let mensaje = `Y tu resultado es... ¡${acertadas} de 10!`;

    if (question1 == "" || question2 == "" || question3 == "" || question4 == "" || question5 == "" || question6 == "" || question7 == "" || question8 == "" || question9 == "" || question10 == "") {

        let span = document.createElement("span");
        let mensajeError = document.createTextNode("Te faltan preguntas por contestar\n");
        span.appendChild(mensajeError);
        document.getElementById("error").style.border = "1px solid black";
        document.getElementById("error").style.borderRadius = "10px";
        document.getElementById("error").style.background = "#B9FAF8";
        document.getElementById("error").style.color = "red";

        document.querySelector("p").appendChild(span);
    }
    else {
        alert(mensaje);
        event.target.submit();
    }














});

/**
 * 
1
: 
input#clark
2
: 
input#kakarot
3
: 
input#annakin
4
: 
input#kalel
5
: 
input#green_city
6
: 
input#villaverde
7
: 
input#pueblo_paleta
8
: 
input#pueblo_tomate
9
: 
input#chewbacca
10
: 
input#dard_vader
11
: 
input#obi_wan
12
: 
input#yoda
13
: 
input#vegano
14
: 
input#vegeta
15
: 
input#namek
16
: 
input#alpha
17
: 
input#derrick
18
: 
input#dalton
19
: 
input#oliver
20
: 
input#lenders
21
: 
input#elon_musk
22
: 
input#bruce_wayne
23
: 
input#sam_altman
24
: 
input#tony_stark
25
: 
input#kamehameha
26
: 
input#hadouken
27
: 
input#pegaso
28
: 
input#fuera
29
: 
input#luffy
30
: 
input#donkey
31
: 
input#buffy
32
: 
input#dobby
33
: 
input#puerta_magica
34
: 
input#gorrocoptero
35
: 
input#bolsillo_magico
36
: 
input#futon
37
: 
input#cuarta_dimension
38
: 
input#simulacion
39
: 
input#agujero_negro
40
: 
input#mordor

 */