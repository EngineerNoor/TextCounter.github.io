const characterValue = document.getElementById("textarea");
const totalCharacter = document.getElementById('totalCharacter');
const remainingCharacter = document.getElementById('remainingCharacter');
const copyText = document.getElementById("copyText");

let character = 0;
// let charactervalue;
const updateValue=()=>{
    // charactervalue = character.value;
    character = characterValue.value.length;
    console.log(character);
    totalCharacter.innerText = character;
    remainingCharacter.innerText = 150 - character;
}

characterValue.addEventListener("keyup",()=>{
    updateValue();
})
copyText.addEventListener("click",()=>{
    characterValue.select();
    navigator.clipboard.writeText(characterValue.value);
})