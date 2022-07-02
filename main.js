function edad(age = prompt("Ingrese su edad")) {
  parseInt(edad);
  if (edad >= 18) {
    document.write(`Eres mayor de edad tienes ${edad} años`);
  } else if (edad > 0) {
    document.write(`Eres menor de edad tienes ${edad} años`);
  } else {
    document.write(`Ingresaste un valor invalido`);
  }
}
edad();

function salario(hour = parseFloat(prompt("Ingrese sus horas trabajadas"))) {
  const SAL = 50;
  let pago = hour * SAL;
  document.write(`Su salario es de: ${pago}`);
}

salario();

arreglo = [1, 23, 4, 5, 6];
arreglo.map((element) => console.log(element * 2));
arreglo.find((element) => console.log(element));

const objeto = {
  name: "manolina",
};

const objeto2 = {
  name: "manolina",
};

let array =[]
