const materialSymbolsOutlined = document.querySelector('.material-symbols-outlined');
const Menu =  document.querySelector('.menu');
const Frio =  document.querySelector('.frio');
const Caliente =  document.querySelector('.caliente');

materialSymbolsOutlined.addEventListener('click',toggleSymbolsOutlined);
Menu.addEventListener('click',toggleMenu);

function toggleSymbolsOutlined(){
    Menu.classList.toggle('inactive');
   
}

function toggleMenu(){

}