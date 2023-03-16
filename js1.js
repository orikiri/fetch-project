// ------ V A L U E S ------ //
const body = document.querySelector('body')
const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const frontPic1 = document.querySelector('.frontPic1');
const backPic1 = document.querySelector('.backPic1');
const frontPic2 = document.querySelector('.frontPic2');
const backPic2 = document.querySelector('.backPic2');
const atkNum1 = document.querySelector('.atkNum1');
const spAtkNum1 = document.querySelector('.spAtkNum1');
const defNum1 = document.querySelector('.defNum1');
const spDefNum1 = document.querySelector('.spDefNum1');
const atkNum2 = document.querySelector('.atkNum2');
const spAtkNum2 = document.querySelector('.spAtkNum2');
const defNum2 = document.querySelector('.defNum2');
const spDefNum2 = document.querySelector('.spDefNum2');


// ------ F E T C H ------ //

const getPokemon1 = function(name1) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name1}`) // вызываем переменную, которую обязательно прописать в параметре функции большой
    .then((data1) => data1.json()) 
    .then(data1 => { 
        // аватар персонажа
        let frontImg = frontPic1.querySelector('img');
            if(!frontImg){
                frontImg = document.createElement('img');
                frontImg.style = 'width: 100px; height:100px';
                frontPic1.append(frontImg);
            }
        frontImg.src = data1.sprites.front_default;
            let backImg = backPic1.querySelector('img');
            if(!backImg){
                backImg = document.createElement('img');
                backImg.style = 'width: 100px; height: 100px';
                backPic1.append(backImg);
            }
        backImg.src = data1.sprites.back_default;
        // статы персонажа ATK
        let pokATK = atkNum1.querySelector('p');
            if(!pokATK){
                pokATK = document.createElement('p')
                atkNum1.append(pokATK)
            }
        pokATK.innerHTML = `${Object.values(data1.stats[1]).slice(0,1)}`
        // stats spATK
        let pokSpATK = spAtkNum1.querySelector('p');
            if(!pokSpATK){
                pokSpATK = document.createElement('p')
                spAtkNum1.append(pokSpATK)
            }
        pokSpATK.innerHTML = `${Object.values(data1.stats[3]).slice(0,1)}`
        // stats Defence
        let pokDef = defNum1.querySelector('p');
            if(!pokDef){
                pokDef = document.createElement('p')
                defNum1.append(pokDef)
            }
        pokDef.innerHTML = `${Object.values(data1.stats[2]).slice(0,1)}`
        // stats spDefence
        let pokSpDef = spDefNum1.querySelector('p');
            if(!pokSpDef){
                pokSpDef = document.createElement('p');
                spDefNum1.append(pokSpDef)
            }  
        pokSpDef.innerHTML = `${Object.values(data1.stats[4]).slice(0,1)}`
        })
    .catch((err) => {
        console.error(err);
        alert(`Wait a sec... Is this ${name1.toUpperCase()} Pokemon a new one? Check name again! Check the console for more information`)
    })
    
};
const getPokemon2 = function(name2) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name2}`) // вызываем переменную, которую обязательно прописать в параметре функции большой
    .then((data2) => data2.json()) // лучше использовать стрелочную функцию
    .then(data2 => { 
        // аватар персонажа
        let frontImg1 = frontPic2.querySelector('img');
        if(!frontImg1) {
            frontImg1 = document.createElement('img');
            frontImg1.style = 'width: 100px; height:100px';
            frontPic2.append(frontImg1);
        }
        frontImg1.src = data2.sprites.front_default;
        let backImg1 = backPic2.querySelector('img');
        if(!backImg1){
            backImg1 = document.createElement('img');
            backImg1.style = 'width: 100px; height: 100px';
            backPic2.append(backImg1);
        }
        backImg1.src = data2.sprites.back_default;
        // статы персонажа ATK
        let pokATK1 = atkNum2.querySelector('p');
        if(!pokATK1){
            pokATK1 = document.createElement('p')
            atkNum2.append(pokATK1)
        }
        pokATK1.innerHTML = `${Object.values(data2.stats[1]).slice(0,1)}`
        // stats spATK
        let pokSpATK1 = spAtkNum2.querySelector('p');
        if(!pokSpATK1){
            pokSpATK1 = document.createElement('p')
            spAtkNum2.append(pokSpATK1)
        }
        pokSpATK1.innerHTML = `${Object.values(data2.stats[3]).slice(0,1)}`
        // stats Defence
        let pokDef1 = defNum2.querySelector('p');
        if(!pokDef1) {
            pokDef1 = document.createElement('p')
            defNum2.append(pokDef1)
        }
        pokDef1.innerHTML = `${Object.values(data2.stats[2]).slice(0,1)}`
        // stats spDefence
        let pokSpDef1 = spDefNum2.querySelector('p');
        if(!pokSpDef1){
            pokSpDef1 = document.createElement('p')
            spDefNum2.append(pokSpDef1)
        }
        pokSpDef1.innerHTML = `${Object.values(data2.stats[4]).slice(0,1)}`
        })
    .catch((err) => {
        console.error(err);
        alert(`Wait a sec... Is this ${name2.toUpperCase()} Pokemon a new one? Check name again! Check the console for more information`) 
    })
    
};

// ------ E V E N T S ------ //



btn1.addEventListener('click', () => {
    const name1 = inp1.value.toLowerCase()
    getPokemon1(name1)
});
btn2.addEventListener('click', () => {
    const name2 = inp2.value.toLowerCase();
    getPokemon2(name2);
});