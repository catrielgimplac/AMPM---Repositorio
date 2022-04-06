//solicitar al usuario que ingreso el costo del del producto para calcular el iva
while(true){
    var precioCosto = parseFloat(prompt("Ingresar costo del producto"));
    if(!isNan(precioCosto) && precioCosto != null && precioCosto != ""){
        // aLert(`es numero`);
        break;
    }else{
        alert(`no es numero`);
        continue;
    }
}
precioCostoM = precioCosto.toFixed(2);
alert("El precio del costo del producto a calcular es: " +precioCostoM);
console.log("El precio del costo del producto a calcular es: " +precioCostoM);
document.write(<h3>El precio del costo del producto a calcular es: " +precioCostoM+</h3>);

//sumar el IVA al producto

function CalcularIva (precioCosto){
    return (precioCosto * 0.21)
}

var iva = CalcularIva(precioCosto);
ivaM= iva.toFixed(2);

alert("El IVA del producto ingresado es: "+ivaM);
console.log("El IVA del producto ingresado es:" +ivaM);
document.write("<h3> El IVA del producto ingresado es: "+ivaM+"</h3>");
