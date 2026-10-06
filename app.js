const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand()}
const cars=[
{name:"LADA Vesta Sport",power:145,year:2025,price:1250000,rarity:"ОБЫЧНЫЙ",chance:"55%",emoji:"🚗",cls:""},
{name:"Toyota Camry",power:249,year:2024,price:2950000,rarity:"ОБЫЧНЫЙ",chance:"25%",emoji:"🚙",cls:""},
{name:"BMW M3",power:510,year:2024,price:7600000,rarity:"РЕДКИЙ",chance:"12%",emoji:"🏎️",cls:"rare"},
{name:"Porsche 911 Turbo S",power:650,year:2025,price:24500000,rarity:"ЭПИЧЕСКИЙ",chance:"6%",emoji:"🏎️",cls:""},
{name:"Mercedes-AMG GT",power:585,year:2025,price:18900000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"1.8%",emoji:"🚘",cls:"legendary"},
{name:"Bugatti Chiron",power:1600,year:2024,price:450000000,rarity:"МИФИЧЕСКИЙ",chance:"0.2%",emoji:"🏎️",cls:"mythic"}
];
let balance=Number(localStorage.getItem("ak_balance")||2500000), collection=JSON.parse(localStorage.getItem("ak_collection")||"[]"), streak=Number(localStorage.getItem("ak_streak")||0);
const $=s=>document.querySelector(s), fmt=n=>Math.round(n).toLocaleString("ru-RU")+" ₽";
function render(c){$("#rarity").textContent=c.rarity;$("#rarity").className="rarity "+c.cls;$("#carArt").textContent=c.emoji;$("#carName").textContent=c.name;$("#power").textContent=c.power+" л.с.";$("#year").textContent=c.year;$("#chance").textContent="Шанс "+c.chance;$("#price").textContent=fmt(c.price);$("#balance").textContent=fmt(balance);$("#cars").textContent=collection.length;$("#streak").textContent=streak;$("#count").textContent=collection.length+" / 50";$("#level").textContent=Math.max(1,Math.floor(collection.length/5)+1)}
function draw(){let r=Math.random()*100,acc=0,cars2=cars;for(const c of cars2){acc+=parseFloat(c.chance);if(r<acc)return c}return cars[0]}
function openCar(cost=150000){if(balance<cost){tg?.showAlert?.("Не хватает денег на открытие");return}balance-=cost;streak++;const c=draw();collection.unshift(c);collection=collection.slice(0,50);localStorage.setItem("ak_balance",balance);localStorage.setItem("ak_collection",JSON.stringify(collection));localStorage.setItem("ak_streak",streak);$("#carArt").classList.add("shake");setTimeout(()=>$("#carArt").classList.remove("shake"),450);render(c);renderGrid();tg?.HapticFeedback?.impactOccurred("heavy")}
function renderGrid(){const g=$("#grid");g.innerHTML="";collection.slice(0,6).forEach(c=>{const d=document.createElement("div");d.className="mini";d.innerHTML=`<div class="emoji">${c.emoji}</div><b>${c.name.replace("Mercedes-AMG ","AMG ").replace("Porsche ","")}</b><small>${c.rarity}</small>`;g.appendChild(d)})}
$("#open").onclick=()=>openCar(150000);
$("#free").onclick=()=>{if(localStorage.getItem("ak_daily")==new Date().toDateString()){tg?.showAlert?.("Ежедневное открытие уже использовано");return}localStorage.setItem("ak_daily",new Date().toDateString());streak++;const c=draw();collection.unshift(c);collection=collection.slice(0,50);localStorage.setItem("ak_collection",JSON.stringify(collection));localStorage.setItem("ak_streak",streak);render(c);renderGrid();tg?.HapticFeedback?.notificationOccurred("success")};
render(cars[3]);renderGrid();
