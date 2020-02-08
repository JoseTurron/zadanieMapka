

//////////////////////////
// var sklepSmyk = document.getElementById("sklep_smyk")
// // var gora = document.getElementById("gora");
// var elementy = [gora, przod, bok];

// sklep_smyk.addEventListener("click", function () {

//     elementy.forEach(function (element, indx, array) {
//         if (element.classList.contains("moveUp")) {
//             element.classList.remove("moveUp");
//             element.classList.add("moveDown");
//             element.style = "";
//         } else {
//             element.classList.remove("moveDown");
//             element.classList.add("moveUp");
//             element.style = "";
//         }
//     })
// })


var shopsInfo = [InterMarcheInfo, CCCInfo, PepCoInfo, NeoNetInfo, MartesSportInfo];

shopsInfo.forEach(znikanie);

function znikanie(element, index, array) {
    element.classList.add("zniknij");
}

var shopsButton = [InterMarche, CCC, PepCo, NeoNet, MartesSport];
var shopsButtons = [[InterMarcheGora, InterMarchePrzod, InterMarcheBok], [CCCBok, CCCBok, CCCPrzod], [PepCoBok, PepCoGora, PepCoPrzod], [NeoNetPrzod, NeoNetGora, NeoNetBok], [MartesSportBok, MartesSportGora, MartesSportPrzod]]; 
var elementsNoNeoNet = [elementyPepCo, elementyCCC, elementyInterMarche, elementyMartesSport]

var elementyInterMarche = [InterMarcheGora, InterMarcheBok, InterMarchePrzod];

InterMarche.addEventListener("click", function () {

        elementyInterMarche.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            InterMarcheInfo.classList.add("zniknij");
            // InterMarcheInfo.classList.add("fadeOut");
            element.style = "";
        } else {
            element.classList.remove("moveUp");
            element.classList.add("moveDown");
            InterMarcheInfo.classList.remove("zniknij");
            InterMarcheInfo.classList.add("fadeIn");
            element.style = "";
        }
    });
    elementyPepCo.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            PepCoInfo.classList.add("zniknij");
        };
    });
    elementyMartesSport.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            MartesSportInfo.classList.add("zniknij");
        };
    });
    elementyCCC.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            CCCInfo.classList.add("zniknij");
        };
    });
    elementyNeoNet.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            NeoNetInfo.classList.add("zniknij");
        };
    });
});

// var CCCButton = document.getElementById("CCC");
var elementyCCC = [CCCGora, CCCBok, CCCPrzod];

CCC.addEventListener("click", function () {

        elementyCCC.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            CCCInfo.classList.add("zniknij");
            element.style = "";
        } else {
            element.classList.remove("moveUp");
            element.classList.add("moveDown");
            CCCInfo.classList.remove("zniknij");
            CCCInfo.classList.add("fadeIn");
            element.style = "";
        }
    });
    elementyPepCo.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            PepCoInfo.classList.add("zniknij");
        };
    });
    elementyMartesSport.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            MartesSportInfo.classList.add("zniknij");
        };
    });
    elementyInterMarche.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            InterMarcheInfo.classList.add("zniknij");
        };
    });
    elementyNeoNet.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            NeoNetInfo.classList.add("zniknij");
        };
    });
});

// var MartesSportButton = document.getElementById("MartesSport");
var elementyMartesSport = [MartesSportGora, MartesSportBok, MartesSportPrzod];

MartesSport.addEventListener("click", function () {

        elementyMartesSport.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            MartesSportInfo.classList.add("zniknij");
            element.style = "";
        } else {
            element.classList.remove("moveUp");
            element.classList.add("moveDown");
            MartesSportInfo.classList.remove("zniknij");
            MartesSportInfo.classList.add("fadeIn");
            element.style = "";
        }
    });
    elementyPepCo.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            PepCoInfo.classList.add("zniknij");
        };
    });
    elementyInterMarche.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            InterMarcheInfo.classList.add("zniknij");
        };
    });
    elementyCCC.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            CCCInfo.classList.add("zniknij");
        };
    });
    elementyNeoNet.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            NeoNetInfo.classList.add("zniknij");
        };
    });
});

// var NeoNetButton = document.getElementById("NeoNet");
var elementyNeoNet = [NeoNetGora, NeoNetBok, NeoNetPrzod];

NeoNet.addEventListener("click", function () {

    elementyNeoNet.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            NeoNetInfo.classList.add("zniknij");
            element.style = "";
        } else {
            element.classList.remove("moveUp");
            element.classList.add("moveDown");
            NeoNetInfo.classList.remove("zniknij");
            NeoNetInfo.classList.add("fadeIn");
            element.style = "";
        }
    });
    elementyPepCo.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            PepCoInfo.classList.add("zniknij");
        };
    });
    elementyMartesSport.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            MartesSportInfo.classList.add("zniknij");
        };
    });
    elementyInterMarche.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            InterMarcheInfo.classList.add("zniknij");
        };
    });
    elementyCCC.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            CCCInfo.classList.add("zniknij");
        };
    });
});

// var PepCoButton = document.getElementById("PepCo");
var elementyPepCo = [PepCoGora, PepCoBok, PepCoPrzod]; //these are 3 elements from SVG that define one shop

PepCo.addEventListener("click", function () {

        elementyPepCo.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            PepCoInfo.classList.add("zniknij");
            element.style = "";
        } else {
            element.classList.remove("moveUp");
            element.classList.add("moveDown");
            PepCoInfo.classList.remove("zniknij");
            PepCoInfo.classList.add("fadeIn");
            element.style = "";
        }
    });
    elementyMartesSport.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            MartesSportInfo.classList.add("zniknij");
        };
    });
    elementyInterMarche.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            InterMarcheInfo.classList.add("zniknij");
        };
    });
    elementyCCC.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            CCCInfo.classList.add("zniknij");
        };
    });
    elementyNeoNet.forEach(function (element, index, array) {
        if (element.classList.contains("moveDown")) {
            element.classList.remove("moveDown");
            element.classList.add("moveUp");
            NeoNetInfo.classList.add("zniknij");
        };
    });
});


var NeoNetX = document.getElementById("NeoNetX"); 
NeoNetX.addEventListener("click", function () {
    elementyNeoNet.forEach(function (element, index, array) {
        element.classList.add("moveUp");
        NeoNetInfo.classList.add("zniknij");
});
elementyPepCo.forEach(function (element, index, array) {
    if (element.classList.contains("moveDown")) {
        element.classList.remove("moveDown");
        element.classList.add("moveUp");
        PepCoInfo.classList.add("zniknij");
    };
});
elementyMartesSport.forEach(function (element, index, array) {
    if (element.classList.contains("moveDown")) {
        element.classList.remove("moveDown");
        element.classList.add("moveUp");
        MartesSportInfo.classList.add("zniknij");
    };
});
elementyInterMarche.forEach(function (element, index, array) {
    if (element.classList.contains("moveDown")) {
        element.classList.remove("moveDown");
        element.classList.add("moveUp");
        InterMarcheInfo.classList.add("zniknij");
    };
});
elementyCCC.forEach(function (element, index, array) {
    if (element.classList.contains("moveDown")) {
        element.classList.remove("moveDown");
        element.classList.add("moveUp");
        CCCInfo.classList.add("zniknij");
    };
});
});

var MartesSportX = document.getElementById("MartesSportX"); 
MartesSportX.addEventListener("click", function () {
    elementyMartesSport.forEach(function (element, index, array) {
        element.classList.add("moveUp");
        MartesSportInfo.classList.add("zniknij");
});
});

var IntermarcheX = document.getElementById("IntermarcheX"); 
IntermarcheX.addEventListener("click", function () {
    elementyInterMarche.forEach(function (element, index, array) {
        element.classList.add("moveUp");
        InterMarcheInfo.classList.add("zniknij");
});
});

var CCCX = document.getElementById("CCCX"); 
CCCX.addEventListener("click", function () {
    elementyCCC.forEach(function (element, index, array) {
        element.classList.add("moveUp");
        CCCInfo.classList.add("zniknij");
});
});

var PepCoX = document.getElementById("PepCoX"); 
PepCoX.addEventListener("click", function () {
    elementyPepCo.forEach(function (element, index, array) {
        element.classList.add("moveUp");
        PepCoInfo.classList.add("zniknij");
});
});

