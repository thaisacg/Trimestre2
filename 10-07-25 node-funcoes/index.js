function funcao1(){
    let a = 53;
    const b = a * 2;
    console.log(b);
}

const funcao2 = function(){
    const equipe = 'Real Madrid';
    console.log(equipe);
}

const funcao3 = () => {
    const v = [12, 23, 25, 69, 32];
    console.log(v);
}

const funcao4 = (a, b) => a + b;

funcao1();
funcao2();
funcao3();
console.log(funcao4(2, 4));