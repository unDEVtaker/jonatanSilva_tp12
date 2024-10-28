// Micro desafío 1:
// 1. EnVisualStudioCodecrearlacarpetadetrabajoydentrodeellainicializar un repositorio local y vincularlo con un repositorio remoto cuyo nombredebe tener la siguiente nomenclatura: nombreApellido_tp12
// 1. CrearunarchivollamadorentalCar.js
// 2. Crea una función llamada rentalCar() que permita calcular el monto a pagar por el alquiler de unvehículo,querecibacomoparámetros:“tipodevehículo”, “Días dealquiler” y “silla para bebe”.
// 3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
// a. Deacuerdoaltipodevehículo,selecobraalclienteunmontopordía:
// Compacto:$14000
// Mediano: $17000
// Camioneta: $28000
// b. Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día de $1200
// 4. Unavezcreadoelprograma,ejecutalo.¿Recuerdascómo?
// 5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o argumentos. Usandoelconsole.log(), muestra los resultados al usuario:
// “Estimado cliente: en base al tipo de vehículo compactoalquilado, considerando los 3 días utilizados, el monto total a pagar es de $42000”.
// (Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el
// mensajefinal)
// Luego de hacer las pruebas todos los console.log() deben quedar comentados


function rentalCar(tipoVehiculo, diasAlquiler, sillaBebe) {

    let precioPorDia;

    switch (tipoVehiculo.toLowerCase()) {
        case "compacto":
            precioPorDia = 14000;
            break;
        case "mediano":
            precioPorDia = 17000;
            break;
        case "camioneta":
            precioPorDia = 28000;
            break;
        default:
            console.log("Tipo de vehículo no válido.");
            return;
    }

    // Precio Inicial sin adicionales
    let precioInicial = precioPorDia * diasAlquiler;

    // adicional silla para bebe por dia
    let adicionalSilla = sillaBebe ? 1200 * diasAlquiler : 0;

    // Precio Final
    let precioFinal = precioInicial + adicionalSilla;

    //estrucutra del msj que se muestra por consola
    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo.toLowerCase()} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${precioFinal}.`;

    //se agrega esta cadena de texto si tambien tiene una silla
    if (adicionalSilla!=0) {
        mensaje += ` Incluye el adicional de $${adicionalSilla} por la silla para niños.`;
    }
    
    console.log(mensaje);
}

// Ejemplos de prueba
//rentalCar("compacto", 3, true); // Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, el monto total a pagar es de $45600.
//rentalCar("mediano", 5, false); // Estimado cliente: en base al tipo de vehículo mediano alquilado, considerando los 5 días utilizados, el monto total a pagar es de $85000.
// rentalCar("camioneta", 2, true); // Estimado cliente: en base al tipo de vehículo camioneta alquilado, considerando los 2 días utilizados, el monto total a pagar es de $58400.