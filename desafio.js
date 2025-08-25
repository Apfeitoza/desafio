function finalMatchResults (victory, defeat){
    let victoryBalance = victory - defeat
    return victoryBalance
};

function findRankLevel(victoryBalance){
   let level;
    if (victoryBalance <= 10){
        level = 'Ferro';
    }else if (victoryBalance > 10 && victoryBalance <= 20){
        level = 'Bronze';
    }else if (victoryBalance > 20 && victoryBalance <= 50){
        level = 'Prata';
    }else if (victoryBalance > 50 && victoryBalance <= 80){
        level = 'Ouro';
    }else if (victoryBalance > 80 && victoryBalance <= 90){
        level = 'Diamante';
    }else if (victoryBalance > 90 && victoryBalance <= 100){
        level = 'Lendário';
    }else{
        level = 'Imortal';
    }
    return level
};


const victoryBalance = finalMatchResults(75,15);
const rankLevel = findRankLevel(victoryBalance);

console.log(`O Herói tem de saldo de **${victoryBalance}** está no nível de **${rankLevel}**`)



