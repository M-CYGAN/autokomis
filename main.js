const addCar = document.querySelector('#addCar')
const searchCar = document.querySelector('#searchCar')
const displayAll = document.querySelector('#displayAll')
const displayList = document.querySelector('#displayList')

const arr = []
//function deleteElement(id,arr){
//    arr.splice
//}

addCar.addEventListener('click',evt=>{
    evt.preventDefault()
    const marka = document.querySelector('#marka').value
    const model = document.querySelector('#model').value
    const rokP = document.querySelector('#rokP').value
    const kolor = document.querySelector('#kolor').value
    const przebieg = document.querySelector('#przebieg').value

    const samochod={
        marka: marka,
        model: model,
        rokP: rokP,
        kolor: kolor,
        przebieg: przebieg
    };
    arr.push(samochod) 

    console.log(arr)

    const li=document.createElement('li')
    li.innerHTML=`
    <div>
    <h3>${samochod.marka}</h3>
    <p>model: ${samochod.model} , kolor: ${samochod.kolor} , rok produkcji: ${samochod.rokP} , przebieg: ${samochod.przebieg}  tyś. km</p>
    </div>
    <button>usuń</button>`
    li.addEventListener('click',()=>{
        const button = document.querySelector('button')
    })
    displayList.innerHTML = '';
    displayList.append(li)
})