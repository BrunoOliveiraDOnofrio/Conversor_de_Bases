function converter() {
    // Conversor DECIMAL
    var decimal = Number(demo1.value);

    let octal = decimal.toString(8);

    let hexadecimal = decimal.toString(16);

    let binaria = decimal.toString(2);

    console.log(decimal);
    console.log(octal);
    console.log(hexadecimal);
    console.log(binaria);

    document.getElementById("demo1").innerHTML = ` ${decimal}`;
    document.getElementById("demo2").innerHTML = ` ${octal}`;
    document.getElementById("demo3").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demo4").innerHTML = ` ${binaria}`;
    //FIM
    // Conversor BINARIO
    var binario2 = textarea_binario.value;

    let decimal2 = parseInt(binario2, 2);

    let octal2 = decimal2.toString(8);

    let hexadecimal2 = decimal2.toString(16);
    console.log(binario2);
    console.log(decimal2);
    console.log(octal2);
    console.log(hexadecimal2);

    document.getElementById("textarea_binario").innerHTML = ` ${binario2}`;
    document.getElementById("div_decimal").innerHTML = ` ${decimal2}`;
    document.getElementById("div_octal").innerHTML = ` ${octal2}`;
    document.getElementById("div_hexadecimal").innerHTML = ` ${hexadecimal2}`;
    //FIM
    // Conversor OCTAL
    var octal3 = input_octal3.value;

    let decimal3 = parseInt(octal3, 8);

    let binario3 = decimal3.toString(2);

    let hexadecimal3 = decimal3.toString(16);

    console.log(binario3);
    console.log(decimal3);
    console.log(octal3);
    console.log(hexadecimal3);

    document.getElementById("input_octal3").innerHTML = ` ${octal3}`;
    document.getElementById("div_decimal3").innerHTML = ` ${decimal3}`;
    document.getElementById("div_binario3").innerHTML = ` ${binario3}`;
    document.getElementById("div_hexadecimal3").innerHTML = ` ${hexadecimal3}`;
    //FIM
    // Conversor HEXADECIMAL
    var hexadecimal4 = input_hexadecimal4.value;

    let decimal4 = parseInt(hexadecimal4, 16);

    let binario4 = decimal4.toString(2);

    let octal4 = decimal4.toString(8);

    console.log(binario4);
    console.log(decimal4);
    console.log(octal4);
    console.log(hexadecimal4);

    document.getElementById("input_hexadecimal4").innerHTML = ` ${hexadecimal4}`;
    document.getElementById("div_decimal4").innerHTML = ` ${decimal4}`;
    document.getElementById("div_binario4").innerHTML = ` ${binario4}`;
    document.getElementById("div_octal4").innerHTML = ` ${octal4}`;
    //FIM
  }