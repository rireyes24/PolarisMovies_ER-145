const deleteDecimal = (number) => {
    let multiplicacion = parseFloat(parseFloat(number).toFixed(2));
    return multiplicacion;
}

export { deleteDecimal };