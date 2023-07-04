const bttn=document.querySelector(" body div button");
const listaFrases= ["El único modo de hacer un gran trabajo es amar lo que haces - Steve Jobs",
"Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo - Michael Jordan",
"El dinero no es la clave del éxito; la libertad para poder crear lo es - Nelson Mandela",
"Cuanto más duramente trabajo, más suerte tengo - Gary Player",
"La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica - Aristóteles",
"El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu - Helena Rubinstein",
"Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan - Elon Musk",
"Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida - Confucio",
"Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro - Colin Powell",
"Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé - Benjamin Franklin",
"La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar - Albert Einstein",
"A veces la adversidad es lo que necesitas encarar para ser exitoso - Zig Ziglar" ,
"Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso - Bill Cosby",
"Ejecuta tus conocimientos con la maestría del que sigue aprendiendo - Jonathan García-Allen"];
function generarNuevaFrase(lista){
    let listaSplited=[]
    for(let i =0;i<lista.length;i++){
        listaSplited.push(lista[i].split("-"));
    }
    min=0;
    max=lista.length-1;
    let randList = Math.floor(Math.random() * (max - min + 1)) + min;
    let text=document.querySelector(".frase-inspiradora");
    let author=document.querySelector(".dueño-frase");
    text.innerText=listaSplited[randList][0];
    author.innerText=listaSplited[randList][1];
}
bttn.addEventListener("click",function (){
    generarNuevaFrase(listaFrases)

});
