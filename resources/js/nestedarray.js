function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++) {
        console.log("i = " + i);
        for (var j=0; j < arr[i].length; j++) {
            console.log("j = " + j);
            product *= arr[i][j];
            console.log("product = " + product);
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);