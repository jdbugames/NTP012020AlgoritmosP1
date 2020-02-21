let promedioEstatura = 0;
let numMiembros = 0;
let estaturas = [];
let valido = true;


do
{
    estaturas[numMiembros] = parseInt(prompt("Ingrese una estatura"));
    if(typeof estaturas[numMiembros] === "")
    {
        promedioEstatura = (estaturas.reduce((previus, current) => current += previus) / edades.length);
        alert("el promedio de estaturas es de: " + promedioEstatura);
        valido = false;
    }
    else
    {
        numMiembros ++;
    }
}
while(valido == true);