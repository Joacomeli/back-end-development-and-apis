function isPrime(valor) {

    if(valor <= 1 ){
        return false;
    }

    if(valor == 3 ){
        return true;
    }

    if(valor == 2 ){
        return true;
    }

    if(valor % 2 == 0 ){
        return false;
    }


    for(i = 3; i <= ((valor/2) + .5); i+=2) {
        if(valor % i == 0){
            return false;
        }
    }

    return true;
}

module.exports = { isPrime };