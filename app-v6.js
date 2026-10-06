const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand()}
const cars=[
{name:"LADA Vesta Sport",power:145,year:2025,price:1250000,rarity:"ОБЫЧНЫЙ",chance:"12%",emoji:"🚗",cls:""},
{name:"LADA Niva Travel",power:106,year:2025,price:1100000,rarity:"ОБЫЧНЫЙ",chance:"8%",emoji:"🚙",cls:""},
{name:"UAZ Patriot",power:150,year:2025,price:1800000,rarity:"ОБЫЧНЫЙ",chance:"5%",emoji:"🚙",cls:""},
{name:"Aurus Senat",power:598,year:2025,price:45000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.8%",emoji:"🚘",cls:"legendary"},
{name:"Moskvich 6",power:174,year:2025,price:2500000,rarity:"ОБЫЧНЫЙ",chance:"4%",emoji:"🚗",cls:""},
{name:"Toyota Camry",power:249,year:2024,price:2950000,rarity:"ОБЫЧНЫЙ",chance:"8%",emoji:"🚙",cls:""},
{name:"Toyota Supra GR",power:387,year:2025,price:8500000,rarity:"РЕДКИЙ",chance:"2.5%",emoji:"🏎️",cls:"rare"},
{name:"Lexus LX 600",power:415,year:2025,price:15000000,rarity:"ЭПИЧЕСКИЙ",chance:"1.2%",emoji:"🚙",cls:""},
{name:"Nissan GT-R",power:570,year:2024,price:14000000,rarity:"ЭПИЧЕСКИЙ",chance:"1.1%",emoji:"🏎️",cls:""},
{name:"Nissan Skyline GT-R R34",power:280,year:2002,price:18000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.5%",emoji:"🏎️",cls:"legendary"},
{name:"Honda Civic Type R",power:329,year:2025,price:6500000,rarity:"РЕДКИЙ",chance:"2.2%",emoji:"🚗",cls:"rare"},
{name:"Honda NSX",power:573,year:2022,price:16000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.9%",emoji:"🏎️",cls:""},
{name:"Acura Integra Type S",power:320,year:2025,price:5500000,rarity:"РЕДКИЙ",chance:"1.8%",emoji:"🚗",cls:"rare"},
{name:"Mazda RX-7",power:280,year:2002,price:9000000,rarity:"ЭПИЧЕСКИЙ",chance:"1%",emoji:"🏎️",cls:""},
{name:"Mitsubishi Lancer Evolution IX",power:291,year:2007,price:8500000,rarity:"ЭПИЧЕСКИЙ",chance:"1%",emoji:"🚗",cls:""},
{name:"Subaru WRX STI",power:310,year:2021,price:7500000,rarity:"РЕДКИЙ",chance:"2%",emoji:"🚗",cls:"rare"},
{name:"Suzuki Jimny",power:102,year:2025,price:3000000,rarity:"ОБЫЧНЫЙ",chance:"2.5%",emoji:"🚙",cls:""},
{name:"BMW M3",power:510,year:2024,price:7600000,rarity:"РЕДКИЙ",chance:"2.5%",emoji:"🏎️",cls:"rare"},
{name:"BMW M5 CS",power:635,year:2022,price:17000000,rarity:"ЭПИЧЕСКИЙ",chance:"1%",emoji:"🏎️",cls:""},
{name:"Mercedes-AMG GT",power:585,year:2025,price:18900000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.8%",emoji:"🚘",cls:"legendary"},
{name:"Mercedes-Benz G 63 AMG",power:585,year:2025,price:30000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.7%",emoji:"🚙",cls:"legendary"},
{name:"Audi RS6 Avant",power:630,year:2025,price:17000000,rarity:"ЭПИЧЕСКИЙ",chance:"1%",emoji:"🚗",cls:""},
{name:"Porsche 911 Turbo S",power:650,year:2025,price:24500000,rarity:"ЭПИЧЕСКИЙ",chance:"1%",emoji:"🏎️",cls:""},
{name:"Porsche 918 Spyder",power:887,year:2015,price:150000000,rarity:"МИФИЧЕСКИЙ",chance:"0.08%",emoji:"🏎️",cls:"mythic"},
{name:"Volkswagen Golf R",power:333,year:2025,price:6000000,rarity:"РЕДКИЙ",chance:"1.8%",emoji:"🚗",cls:"rare"},
{name:"Skoda Octavia RS",power:265,year:2025,price:4500000,rarity:"ОБЫЧНЫЙ",chance:"2%",emoji:"🚗",cls:""},
{name:"Renault Megane RS",power:300,year:2023,price:4500000,rarity:"РЕДКИЙ",chance:"1.5%",emoji:"🚗",cls:"rare"},
{name:"Peugeot 508 PSE",power:360,year:2024,price:6500000,rarity:"РЕДКИЙ",chance:"1.2%",emoji:"🚘",cls:"rare"},
{name:"Citroen C5 X",power:180,year:2025,price:4000000,rarity:"ОБЫЧНЫЙ",chance:"1.5%",emoji:"🚗",cls:""},
{name:"Alfa Romeo Giulia Quadrifoglio",power:520,year:2024,price:12000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.7%",emoji:"🏎️",cls:""},
{name:"Fiat 500 Abarth",power:180,year:2024,price:3500000,rarity:"РЕДКИЙ",chance:"1.5%",emoji:"🚗",cls:"rare"},
{name:"Ferrari 488 Pista",power:720,year:2020,price:38000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.45%",emoji:"🏎️",cls:"legendary"},
{name:"Ferrari SF90 Stradale",power:1000,year:2025,price:65000000,rarity:"МИФИЧЕСКИЙ",chance:"0.12%",emoji:"🏎️",cls:"mythic"},
{name:"Lamborghini Huracan STO",power:640,year:2024,price:45000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.5%",emoji:"🏎️",cls:"legendary"},
{name:"Lamborghini Revuelto",power:1015,year:2025,price:75000000,rarity:"МИФИЧЕСКИЙ",chance:"0.1%",emoji:"🏎️",cls:"mythic"},
{name:"Maserati MC20",power:630,year:2025,price:30000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.45%",emoji:"🏎️",cls:"legendary"},
{name:"Bugatti Chiron",power:1600,year:2024,price:450000000,rarity:"МИФИЧЕСКИЙ",chance:"0.04%",emoji:"🏎️",cls:"mythic"},
{name:"Bugatti Tourbillon",power:1800,year:2026,price:500000000,rarity:"МИФИЧЕСКИЙ",chance:"0.02%",emoji:"🏎️",cls:"mythic"},
{name:"Koenigsegg Jesko",power:1600,year:2025,price:350000000,rarity:"МИФИЧЕСКИЙ",chance:"0.02%",emoji:"🏎️",cls:"mythic"},
{name:"Pagani Huayra",power:864,year:2022,price:250000000,rarity:"МИФИЧЕСКИЙ",chance:"0.03%",emoji:"🏎️",cls:"mythic"},
{name:"McLaren 750S",power:750,year:2025,price:40000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.35%",emoji:"🏎️",cls:"legendary"},
{name:"Aston Martin DB12",power:680,year:2025,price:30000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.35%",emoji:"🚘",cls:"legendary"},
{name:"Bentley Continental GT",power:782,year:2025,price:35000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.25%",emoji:"🚘",cls:"legendary"},
{name:"Rolls-Royce Ghost",power:563,year:2025,price:45000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.2%",emoji:"🚘",cls:"legendary"},
{name:"Lotus Emira",power:400,year:2025,price:9000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.6%",emoji:"🏎️",cls:""},
{name:"Volvo S90",power:455,year:2025,price:7000000,rarity:"РЕДКИЙ",chance:"1.2%",emoji:"🚘",cls:"rare"},
{name:"Polestar 4",power:544,year:2025,price:7500000,rarity:"ЭПИЧЕСКИЙ",chance:"0.5%",emoji:"🚘",cls:""},
{name:"Jaguar F-Type R",power:575,year:2024,price:14000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.6%",emoji:"🏎️",cls:""},
{name:"Land Rover Defender V8",power:635,year:2025,price:18000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.7%",emoji:"🚙",cls:""},
{name:"Ford Mustang Dark Horse",power:507,year:2025,price:7500000,rarity:"РЕДКИЙ",chance:"1.6%",emoji:"🏎️",cls:"rare"},
{name:"Chevrolet Corvette Z06",power:670,year:2025,price:15000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.7%",emoji:"🏎️",cls:""},
{name:"Dodge Challenger SRT Hellcat",power:717,year:2023,price:12000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.7%",emoji:"🏎️",cls:""},
{name:"Cadillac CT5-V Blackwing",power:668,year:2025,price:11000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.6%",emoji:"🚘",cls:""},
{name:"Jeep Grand Cherokee Trackhawk",power:717,year:2022,price:11000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.6%",emoji:"🚙",cls:""},
{name:"Tesla Model S Plaid",power:1020,year:2025,price:12000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.4%",emoji:"🚘",cls:"legendary"},
{name:"Rivian R1T",power:835,year:2025,price:11000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.3%",emoji:"🛻",cls:""},
{name:"Lucid Air Sapphire",power:1234,year:2025,price:18000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.2%",emoji:"🚘",cls:"legendary"},
{name:"Lexus LFA",power:560,year:2012,price:90000000,rarity:"МИФИЧЕСКИЙ",chance:"0.05%",emoji:"🏎️",cls:"mythic"},
{name:"Hyundai i30 N",power:280,year:2025,price:4000000,rarity:"РЕДКИЙ",chance:"1.8%",emoji:"🚗",cls:"rare"},
{name:"Kia Stinger GT",power:368,year:2023,price:5500000,rarity:"РЕДКИЙ",chance:"1.4%",emoji:"🚗",cls:"rare"},
{name:"Genesis G80 Sport",power:375,year:2025,price:8000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.7%",emoji:"🚘",cls:""},
{name:"KGM Torres",power:163,year:2025,price:3500000,rarity:"ОБЫЧНЫЙ",chance:"1.3%",emoji:"🚙",cls:""},
{name:"Daewoo Nexia",power:109,year:2011,price:600000,rarity:"ОБЫЧНЫЙ",chance:"2%",emoji:"🚗",cls:""},
{name:"BYD Seal",power:530,year:2025,price:6500000,rarity:"РЕДКИЙ",chance:"1.5%",emoji:"🚘",cls:"rare"},
{name:"BYD Yangwang U9",power:1306,year:2025,price:22000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.2%",emoji:"🏎️",cls:"legendary"},
{name:"NIO ET5",power:490,year:2025,price:6000000,rarity:"РЕДКИЙ",chance:"1.1%",emoji:"🚘",cls:"rare"},
{name:"XPeng P7",power:473,year:2025,price:5500000,rarity:"РЕДКИЙ",chance:"1.1%",emoji:"🚘",cls:"rare"},
{name:"Li Auto L9",power:449,year:2025,price:8000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.8%",emoji:"🚙",cls:""},
{name:"Zeekr 001 FR",power:1265,year:2025,price:12000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.3%",emoji:"🏎️",cls:"legendary"},
{name:"Geely Monjaro",power:238,year:2025,price:4500000,rarity:"ОБЫЧНЫЙ",chance:"1.8%",emoji:"🚙",cls:""},
{name:"Chery Tiggo 8 Pro Max",power:245,year:2025,price:4000000,rarity:"ОБЫЧНЫЙ",chance:"1.5%",emoji:"🚙",cls:""},
{name:"Exeed VX",power:249,year:2025,price:5000000,rarity:"РЕДКИЙ",chance:"1.1%",emoji:"🚙",cls:"rare"},
{name:"Omoda C5 GT",power:147,year:2025,price:3000000,rarity:"ОБЫЧНЫЙ",chance:"1.1%",emoji:"🚗",cls:""},
{name:"Jaecoo J8",power:249,year:2025,price:5000000,rarity:"РЕДКИЙ",chance:"0.8%",emoji:"🚙",cls:"rare"},
{name:"Haval F7",power:192,year:2025,price:3500000,rarity:"ОБЫЧНЫЙ",chance:"1.4%",emoji:"🚙",cls:""},
{name:"Tank 700",power:360,year:2025,price:8000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.5%",emoji:"🚙",cls:""},
{name:"GAC GS8",power:252,year:2025,price:5000000,rarity:"РЕДКИЙ",chance:"0.9%",emoji:"🚙",cls:"rare"},
{name:"Hongqi H9",power:252,year:2025,price:7000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.5%",emoji:"🚘",cls:""},
{name:"Changan UNI-K",power:233,year:2025,price:4500000,rarity:"ОБЫЧНЫЙ",chance:"1.2%",emoji:"🚙",cls:""},
{name:"FAW Bestune B70",power:224,year:2025,price:3000000,rarity:"ОБЫЧНЫЙ",chance:"0.8%",emoji:"🚗",cls:""},
{name:"Dongfeng M-Hero 917",power:816,year:2025,price:12000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.2%",emoji:"🚙",cls:"legendary"},
{name:"Voyah Free",power:489,year:2025,price:7000000,rarity:"РЕДКИЙ",chance:"0.7%",emoji:"🚙",cls:"rare"},
{name:"Avatr 12",power:578,year:2025,price:8000000,rarity:"ЭПИЧЕСКИЙ",chance:"0.4%",emoji:"🚘",cls:""},
{name:"Leapmotor C10",power:231,year:2025,price:4000000,rarity:"ОБЫЧНЫЙ",chance:"0.7%",emoji:"🚙",cls:""},
{name:"Xiaomi SU7 Max",power:673,year:2025,price:7500000,rarity:"ЭПИЧЕСКИЙ",chance:"0.5%",emoji:"🚘",cls:""},
{name:"Tata Nexon EV",power:145,year:2025,price:2500000,rarity:"ОБЫЧНЫЙ",chance:"0.6%",emoji:"🚙",cls:""},
{name:"Mahindra Thar",power:177,year:2025,price:2500000,rarity:"ОБЫЧНЫЙ",chance:"0.6%",emoji:"🚙",cls:""},
{name:"Togg T10X",power:218,year:2025,price:4000000,rarity:"ОБЫЧНЫЙ",chance:"0.5%",emoji:"🚙",cls:""},
{name:"Proton X90",power:190,year:2025,price:2500000,rarity:"ОБЫЧНЫЙ",chance:"0.5%",emoji:"🚙",cls:""},
{name:"VinFast VF 8",power:402,year:2025,price:6000000,rarity:"РЕДКИЙ",chance:"0.4%",emoji:"🚙",cls:"rare"},
{name:"W Motors Lykan Hypersport",power:780,year:2015,price:250000000,rarity:"МИФИЧЕСКИЙ",chance:"0.01%",emoji:"🏎️",cls:"mythic"},
{name:"Iran Khodro Dena",power:150,year:2025,price:1800000,rarity:"ОБЫЧНЫЙ",chance:"0.3%",emoji:"🚗",cls:""},
{name:"SAIPA Shahin",power:110,year:2025,price:1600000,rarity:"ОБЫЧНЫЙ",chance:"0.3%",emoji:"🚗",cls:""},
{name:"Abarth 695",power:180,year:2024,price:3500000,rarity:"РЕДКИЙ",chance:"0.4%",emoji:"🚗",cls:"rare"},
{name:"Mini John Cooper Works",power:231,year:2025,price:5000000,rarity:"РЕДКИЙ",chance:"0.6%",emoji:"🚗",cls:"rare"},
{name:"GMC Hummer EV",power:1014,year:2025,price:13000000,rarity:"ЛЕГЕНДАРНЫЙ",chance:"0.15%",emoji:"🛻",cls:"legendary"},
{name:"Ford GT",power:660,year:2022,price:100000000,rarity:"МИФИЧЕСКИЙ",chance:"0.03%",emoji:"🏎️",cls:"mythic"}
];
const KEY={balance:"ak_balance",garage:"ak_garage",collection:"ak_collection",streak:"ak_streak",daily:"ak_daily",favs:"ak_favs"};
let balance=Number(localStorage.getItem(KEY.balance)||2500000);
let garage=JSON.parse(localStorage.getItem(KEY.garage)||"[]");
let collection=JSON.parse(localStorage.getItem(KEY.collection)||"[]");
let streak=Number(localStorage.getItem(KEY.streak)||0);
let favs=JSON.parse(localStorage.getItem(KEY.favs)||"[]");
let selected=null, selectedCarIndex=null, spinning=false, resultActionDone=false;
const $=s=>document.querySelector(s), fmt=n=>Math.round(n).toLocaleString("ru-RU")+" ₽";
const clsFor=c=>({"ОБЫЧНЫЙ":"","РЕДКИЙ":"rare","ЭПИЧЕСКИЙ":"epic","ЛЕГЕНДАРНЫЙ":"legendary","МИФИЧЕСКИЙ":"mythic"}[c.rarity]||"");
const idFor=c=>c.name;
function save(){localStorage.setItem(KEY.balance,balance);localStorage.setItem(KEY.garage,JSON.stringify(garage));localStorage.setItem(KEY.collection,JSON.stringify(collection));localStorage.setItem(KEY.streak,streak);localStorage.setItem(KEY.favs,JSON.stringify(favs));}
function renderTop(){
  $("#balance").textContent=fmt(balance);$("#cars").textContent=garage.length;$("#streak").textContent=streak;
  $("#level").textContent=Math.max(1,Math.floor(collection.length/5)+1);$("#collectionCount").textContent=collection.length+" / "+cars.length;
  $("#garageValue").textContent=fmt(garage.reduce((s,c)=>s+c.price,0));
}
function setResultActions(enabled){
  [$("#keep"),$("#sell")].forEach(b=>{b.disabled=!enabled;b.style.opacity=enabled?"1":".45";b.style.pointerEvents=enabled?"auto":"none"});
  $("#spinResult").classList.toggle("hidden-result", !enabled);
}
function renderResult(c){
  selected=c; selectedCarIndex=cars.indexOf(c); resultActionDone=false; setResultActions(true);
  $("#rarity").textContent=c.rarity;$("#rarity").className="result-rarity "+clsFor(c);$("#carName").textContent=c.name;$("#price").textContent=fmt(c.price);
  const effect=clsFor(c); if(effect){$("#spinResult").classList.add(effect);setTimeout(()=>$("#spinResult").classList.remove(effect),900)}
}
function weightedDraw(){let weights=cars.map(c=>Math.max(.001,parseFloat(c.chance)));let total=weights.reduce((a,b)=>a+b,0),r=Math.random()*total;for(let i=0;i<cars.length;i++){r-=weights[i];if(r<=0)return cars[i]}return cars[0]}
function card(c,mode){const d=document.createElement("div");d.className="car-card "+clsFor(c);const fav=favs.includes(idFor(c));d.innerHTML=`<button class="fav ${fav?"on":""}">★</button><div class="emoji">${c.emoji}</div><b>${c.name}</b><small>${c.rarity} · ${c.power} л.с. · ${c.year}</small><div class="card-price">${fmt(c.price)}</div><div class="card-actions">${mode==="market"?`<button class="buy">КУПИТЬ</button>`:`<button class="sell">ПРОДАТЬ</button>`}</div>`;
  d.querySelector('.fav').onclick=e=>{e.stopPropagation();fav?favs=favs.filter(x=>x!==idFor(c)):favs.push(idFor(c));save();renderAll()};
  const action=d.querySelector('.buy,.sell');if(action)action.onclick=()=>mode==="market"?buy(c):sellFromGarage(c);return d}
function filter(list,search,rarity){const q=(search||"").toLowerCase().trim();return list.filter(c=>(!q||c.name.toLowerCase().includes(q))&&(!rarity||c.rarity===rarity))}
function renderGarage(){const list=filter(garage,$("#garageSearch").value,$("#garageRarity").value),g=$("#garageGrid");g.innerHTML="";list.forEach(c=>g.appendChild(card(c,"garage")));if(!list.length)g.innerHTML='<div class="empty">Гараж пуст. Крути рулетку или купи машину на рынке.</div>'}
function renderCollection(){let list=filter(collection,$("#collectionSearch").value,$("#collectionRarity").value);const sort=$("#collectionSort").value;if(sort==="price")list.sort((a,b)=>b.price-a.price);else if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));else{const order={МИФИЧЕСКИЙ:5,ЛЕГЕНДАРНЫЙ:4,ЭПИЧЕСКИЙ:3,РЕДКИЙ:2,ОБЫЧНЫЙ:1};list.sort((a,b)=>(order[b.rarity]||0)-(order[a.rarity]||0))}const g=$("#collectionGrid");g.innerHTML="";list.forEach(c=>g.appendChild(card(c,"collection")));if(!list.length)g.innerHTML='<div class="empty">Пока ничего не собрано.</div>'}
function renderMarket(){const list=filter(cars,$("#marketSearch").value,$("#marketRarity").value),g=$("#marketGrid");g.innerHTML="";list.forEach(c=>g.appendChild(card(c,"market")))}
function renderAchievements(){const rare=collection.filter(c=>["ЛЕГЕНДАРНЫЙ","МИФИЧЕСКИЙ"].includes(c.rarity)).length;const myth=collection.filter(c=>c.rarity==="МИФИЧЕСКИЙ").length;const ach=[['Первый автомобиль',collection.length>=1],['10 машин',collection.length>=10],['50 машин',collection.length>=50],['Первая легенда',rare>=1],['Охотник за мифами',myth>=1],['Богач гаража',garage.reduce((s,c)=>s+c.price,0)>=100000000]];$("#achList").innerHTML=ach.map(a=>`<div class="ach"><span>${a[0]}</span><b class="${a[1]?"done":""}">${a[1]?"✓":"○"}</b></div>`).join('')}
function renderAll(){renderTop();renderGarage();renderCollection();renderMarket();renderAchievements()}
function addToCollection(c){if(!collection.some(x=>idFor(x)===idFor(c)))collection.unshift(c)}
function keepSelected(){
  if(resultActionDone || selectedCarIndex===null) return;
  const c=cars[selectedCarIndex];
  if(!c) return;
  resultActionDone=true;
  garage.unshift({...c});
  addToCollection({...c});
  selected=null;
  selectedCarIndex=null;
  setResultActions(false);
  save();
  renderAll();
  tg?.HapticFeedback?.notificationOccurred("success");
  $("#hint").textContent=`${c.name} добавлен в гараж. Решение по этой находке уже принято.`;
}
function sellFromGarage(c){
  const i=garage.findIndex(x=>idFor(x)===idFor(c));
  if(i<0)return;
  garage.splice(i,1); balance+=Math.round(c.price*.65); save(); renderAll();
  tg?.HapticFeedback?.notificationOccurred("success"); $("#hint").textContent=`Продано за ${fmt(c.price*.65)}.`;
}
function sellSelected(){
  if(resultActionDone || !selected) return;
  const c={...selected};
  resultActionDone=true;
  // Продажа выигрыша происходит сразу — машина не добавляется в гараж.
  // Но она остаётся в коллекции как когда-либо полученная.
  addToCollection(c);
  const payout=Math.round(c.price*.65);
  balance+=payout;
  selected=null;
  selectedCarIndex=null;
  setResultActions(false);
  save();
  renderAll();
  tg?.HapticFeedback?.notificationOccurred("success");
  $("#hint").textContent=`${c.name} продан сразу за ${fmt(payout)}. В гараж машина не добавлена.`;
}

function buy(c){if(balance<c.price){tg?.showAlert?.("Не хватает денег");return}balance-=c.price;garage.unshift(c);addToCollection(c);save();renderAll();tg?.HapticFeedback?.notificationOccurred("success");$("#hint").textContent=`${c.name} куплен и добавлен в гараж.`}
function buildReel(win){
  const track=$("#rouletteTrack"); track.innerHTML=""; const arr=[];
  for(let i=0;i<62;i++)arr.push(cars[Math.floor(Math.random()*cars.length)]);
  const winnerIndex=52; arr[winnerIndex]=win;
  arr.forEach((c,i)=>{
    const d=document.createElement("div"); d.className="roulette-card "+clsFor(c)+(i===winnerIndex?" reel-winner":"");
    d.dataset.carIndex=String(cars.indexOf(c));
    d.innerHTML=`<div class="emoji">${c.emoji}</div><b>${c.name}</b><small>${c.rarity}<br>${fmt(c.price)}</small>`;
    track.appendChild(d);
  });
  return track.children[winnerIndex];
}
function spin(){
  if(spinning)return;
  if(balance<150000){tg?.showAlert?.("Не хватает 150 000 ₽");return}
  balance-=150000; save(); spinning=true; selected=null; setResultActions(false);
  $("#spinBtn").disabled=true; $("#spinBtn").style.opacity=.55;
  const win=weightedDraw(), winnerEl=buildReel(win), track=$("#rouletteTrack"), viewport=$(".roulette-viewport");
  track.style.transition="none"; track.style.transform="translateX(0px)"; void track.offsetWidth;
  const target=winnerEl.offsetLeft + winnerEl.offsetWidth/2 - viewport.clientWidth/2;
  track.style.transition="transform 5.2s cubic-bezier(.08,.72,.12,1)";
  track.style.transform=`translateX(-${Math.max(0,target)}px)`;
  setTimeout(()=>{
    // Берём машину, которая ФАКТИЧЕСКИ находится под стрелкой после остановки.
    const vr=viewport.getBoundingClientRect();
    const center=vr.left + vr.width/2;
    let best=null, bestDist=Infinity;
    track.querySelectorAll(".roulette-card").forEach(el=>{
      const r=el.getBoundingClientRect();
      const d=Math.abs((r.left+r.width/2)-center);
      if(d<bestDist){bestDist=d;best=el;}
    });
    const actualIndex=best ? Number(best.dataset.carIndex) : Number(winnerEl.dataset.carIndex);
    const actualWin=cars[actualIndex];
    selectedCarIndex=actualIndex;
    spinning=false; $("#spinBtn").disabled=false; $("#spinBtn").style.opacity=1;
    renderResult(actualWin); $("#hint").textContent=`Выпала ${actualWin.rarity.toLowerCase()} машина. Решай: в гараж или продать.`;
    tg?.HapticFeedback?.notificationOccurred(actualWin.rarity==="МИФИЧЕСКИЙ"?"success":"warning");
  },5350);
}
$("#spinBtn").onclick=spin;
$("#keep").onclick=keepSelected;$("#sell").onclick=sellSelected;
$("#free").onclick=()=>{const today=new Date().toDateString();if(localStorage.getItem(KEY.daily)===today){tg?.showAlert?.("Ежедневное открытие уже использовано");return}localStorage.setItem(KEY.daily,today);const c=weightedDraw();streak++;selectedCarIndex=cars.indexOf(c);renderResult(c);$("#hint").textContent="🎁 Бесплатное открытие! Выбери судьбу машины.";save();renderAll();tg?.HapticFeedback?.notificationOccurred("success")};

document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active-panel'));$("#"+b.dataset.tab).classList.add('active-panel')});
['#garageSearch','#garageRarity','#collectionSearch','#collectionRarity','#collectionSort','#marketSearch','#marketRarity'].forEach(s=>$(s).addEventListener(s.includes('Search')?'input':'change',renderAll));
setResultActions(false); renderAll();
