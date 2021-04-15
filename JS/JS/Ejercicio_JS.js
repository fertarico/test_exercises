var char = [
    {
        "name": "Homero",
        "age": 34,
        "gender": "male",
        "cite": "D'oh"
    },
    {
        "name": "Marge",
        "age": 28,
        "gender": "female",
        "cite": "Mmmmm"
    },
    {
        "name": "Maggie",
        "age": 1,
        "gender": "female",
        "cite": "Chwick chwick"
    },
    {
        "name": "Bart",
        "age": 10,
        "gender": "male",
        "cite": "Ay caramba"
    },
    {
        "name": "Moe",
        "age": 44,
        "gender": "male",
        "cite": "Trago camote"
    },
    {
        "name": "Loca de los gatos",
        "age": 53,
        "gender": "female",
        "cite": "Yyaagh aagh yao"
    },
    {
        "name": "Ned",
        "age": 64,
        "gender": "male",
        "cite": "Perfectirijillo"
    },
    {
        "name": "Juan Topo",
        "age": 90,
        "gender": "male",
        "cite": "Nadie escapa de la fortaleza de los topos"
    }
]

function getOlder(characters) {
    var mayor = 18;
    var char = {};
    characters.map((e) => {
        if (e.age > mayor) {
            mayor = e.age
            char = e;
        }
    })
    return char
}

function onlyGrownUps(characters) {
    var char = [];
    characters.map((e) => {
        if (e.age > 18) {
            char = [...char, e];
        }
    })
    return char
}

function getCharactersByGender(characters) {
    var fem = []
    var mal = []
    characters.map((e) => {
        if (e.gender === "male") {
            mal = [...mal, e];
        } else {
            fem = [...fem, e]
        }
    })
    return {
        "males": mal,
        "females": fem
    }
}

//Ejercicios 2

//a
function onlyEvents(arr) {
    return arr.filter(e => ((e % 2) === 0))
}

//b
function formatDate(date) {
    var anio = date.slice(0, 4);
    var mes = date.slice(4, 6);
    var dia = date.slice(6, 9)
    return dia + '/' + mes + '/' + anio
}

//c
function occurrencesOf(array, element) {
    var acc = 0;
    array.map(e => (e == element) && acc++)
    return acc
}

//d
function isPalindrome(string) {
    var arr = string.split("")
    var cuentaRegresiva = arr.length
    for (var i = 0; i < (arr.length / 2); i++) {
        console.log("arr[i] es " + arr[i])
        console.log("cuentaRegresiva " + arr[cuentaRegresiva - 1])
        if (arr[i] === (arr[cuentaRegresiva - 1]) && cuentaRegresiva !== 0) {
            cuentaRegresiva--
        } else {
            return "NO ES PALINDROMO"
        }
    }
    return "ES PALINDROMO"
}