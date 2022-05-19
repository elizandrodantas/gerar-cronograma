const days = [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado"
];

const orderD = [];
const orderN = [];

// ORDER.LENGTH = DAYS.LENGTH * 2
// 0 = 3
// 1 = 2
// 2 = 2
// 3 = 2
// 4 = 1
// 5 = 1
// 6 (REDACAO) = 1

const rulesN = [
    "matematica",
    "portugues",
    "geografia",
    "historia",
    "ingles",
    "literatura",
    "redacao"
];

// = 12

var rulesO = 2;

const rulesD = {
    0: rulesO+1,
    1: rulesO,
    2: rulesO,
    3: rulesO,
    4: rulesO-1,
    5: rulesO-1,
    6: rulesO-1
}

function numberSort(){
    return Math.floor(Math.random() * 7);
}

function created(){
    let rulesLK = rulesO;
    for(let _ of days){
        for(;;){
            let r = numberSort();
            if(rulesO !== 0){
                if(rulesD[r] !== 0 && orderN[orderN.length - 1] !== r){
                    rulesD[r] = rulesD[r] - 1;
                    rulesO--;
                    orderD.push(r);
                }
            }else{
                rulesO = rulesLK;
                break;
            }
        }
    }

    orderD.forEach(v => orderN.push(rulesN[v]));

    console.log(`AULAS SEPARADAS POR DIA!`);

    console.table(TwoByTwo());

    console.log(``);

    console.log(`Aulas diarias: [${rulesO}]`); 
}

function TwoByTwo(){
    let d = 0, a = 0,s = 0, r = {};
    for(let i of days){
        for(;;){
            if(s !== rulesO){
                typeof r[i] !== "object" ? r[i] = [] : false;
                r[i].push(orderN[a]);
                a++;
                s++;
            }else{
                d++;
                s = 0;
                break;
            }
        }
    }
    return r;
}

created();