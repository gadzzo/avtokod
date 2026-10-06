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
{name:"Ford GT",power:660,year:2022,price:100000000,rarity:"МИФИЧЕСКИЙ",chance:"0.03%",emoji:"🏎️",cls:"mythic"},
{name:"Bugatti La Voiture Noire",power:1500,year:2021,price:1200000000,rarity:"ЭКСКЛЮЗИВНЫЙ",chance:"0.004%",emoji:"🏎️",cls:"exclusive"},
{name:"Rolls-Royce La Rose Noire Droptail",power:601,year:2024,price:2500000000,rarity:"ЭКСКЛЮЗИВНЫЙ",chance:"0.002%",emoji:"🚘",cls:"exclusive"},
{name:"Pagani Zonda HP Barchetta",power:789,year:2017,price:1500000000,rarity:"ЭКСКЛЮЗИВНЫЙ",chance:"0.003%",emoji:"🏎️",cls:"exclusive"},
{name:"Mercedes-Maybach Exelero",power:690,year:2005,price:800000000,rarity:"ЭКСКЛЮЗИВНЫЙ",chance:"0.005%",emoji:"🚘",cls:"exclusive"},
{name:"Ferrari FXX-K Evo",power:1050,year:2018,price:300000000,rarity:"ЭКСКЛЮЗИВНЫЙ",chance:"0.006%",emoji:"🏎️",cls:"exclusive"},
{name:"McLaren Solus GT",power:840,year:2023,price:180000000,rarity:"ЭКСКЛЮЗИВНЫЙ",chance:"0.008%",emoji:"🏎️",cls:"exclusive"}
];
const KEY={balance:"ak_balance",garage:"ak_garage",collection:"ak_collection",streak:"ak_streak",daily:"ak_daily",favs:"ak_favs",bonusDaily:"ak_bonus_daily",bonusStreak:"ak_bonus_streak",bonusCollection:"ak_bonus_collection",bonusLevel:"ak_bonus_level"};
let balance=Number(localStorage.getItem(KEY.balance)||2500000);
let garage=JSON.parse(localStorage.getItem(KEY.garage)||"[]");
let collection=JSON.parse(localStorage.getItem(KEY.collection)||"[]");
let streak=Number(localStorage.getItem(KEY.streak)||0);
let favs=JSON.parse(localStorage.getItem(KEY.favs)||"[]");
let bonusDaily=localStorage.getItem(KEY.bonusDaily)||"";
let bonusStreak=Number(localStorage.getItem(KEY.bonusStreak)||0);
let bonusCollection=Number(localStorage.getItem(KEY.bonusCollection)||0);
let bonusLevel=Number(localStorage.getItem(KEY.bonusLevel)||0);
let selected=null, selectedCarIndex=null, spinning=false, resultActionDone=false;
const GAMEKEY={stats:"ak_stats_v11",pity:"ak_pity_v11",bank:"ak_bank_v11",tasks:"ak_tasks_v11",wheel:"ak_wheel_v11",season:"ak_season_v11",tune:"ak_tune_v11",race:"ak_race_v11",marketDay:"ak_market_day_v11"};
let stats=JSON.parse(localStorage.getItem(GAMEKEY.stats)||'{"spins":0,"spent":0,"sold":0,"earned":0,"best":0,"combo":0,"wins":0}');
let pity=JSON.parse(localStorage.getItem(GAMEKEY.pity)||'{"rare":0,"epic":0,"legendary":0,"exclusive":0}');
let bank=Number(localStorage.getItem(GAMEKEY.bank)||0);
let taskState=JSON.parse(localStorage.getItem(GAMEKEY.tasks)||'{}');
let tune=JSON.parse(localStorage.getItem(GAMEKEY.tune)||'{}');
let season=JSON.parse(localStorage.getItem(GAMEKEY.season)||'{"xp":0,"claimed":[]}');
function persistExtra(){localStorage.setItem(GAMEKEY.stats,JSON.stringify(stats));localStorage.setItem(GAMEKEY.pity,JSON.stringify(pity));localStorage.setItem(GAMEKEY.bank,String(bank));localStorage.setItem(GAMEKEY.tasks,JSON.stringify(taskState));localStorage.setItem(GAMEKEY.tune,JSON.stringify(tune));localStorage.setItem(GAMEKEY.season,JSON.stringify(season));}
function countryOf(c){const n=c.name.toLowerCase();if(/toyota|lexus|nissan|honda|acura|mazda|mitsubishi|subaru|suzuki/.test(n))return 'Япония';if(/bmw|mercedes|audi|porsche|volkswagen|skoda|maybach/.test(n))return 'Германия';if(/ferrari|lamborghini|maserati|alfa|fiat|abarth|pagani/.test(n))return 'Италия';if(/bugatti|renault|peugeot|citroen/.test(n))return 'Франция';if(/ford|chevrolet|cadillac|dodge|tesla|rivian|lucid|gmc|jeep/.test(n))return 'США';if(/lada|uaz|aurus|moskvich|gaz/.test(n))return 'Россия';if(/hyundai|kia|genesis|kgm|daewoo/.test(n))return 'Южная Корея';if(/byd|nio|xpeng|geely|chery|exeed|omoda|jaecoo|haval|tank|gac|hongqi|changan|faw|dongfeng|voyah|avatr|leapmotor|xiaomi|zeekr|li auto/.test(n))return 'Китай';return 'Другое'}
function brandOf(c){return c.name.split(' ')[0]}
function levelNow(){return Math.max(1,Math.floor((collection.length+stats.spins)/10)+1)}

const $=s=>document.querySelector(s), fmt=n=>Math.round(n).toLocaleString("ru-RU")+" ₽";
const clsFor=c=>({"ОБЫЧНЫЙ":"","РЕДКИЙ":"rare","ЭПИЧЕСКИЙ":"epic","ЛЕГЕНДАРНЫЙ":"legendary","МИФИЧЕСКИЙ":"mythic","ЭКСКЛЮЗИВНЫЙ":"exclusive"}[c.rarity]||"");
const idFor=c=>c.name;
function save(){localStorage.setItem(KEY.balance,balance);localStorage.setItem(KEY.garage,JSON.stringify(garage));localStorage.setItem(KEY.collection,JSON.stringify(collection));localStorage.setItem(KEY.streak,streak);localStorage.setItem(KEY.favs,JSON.stringify(favs));localStorage.setItem(KEY.bonusDaily,bonusDaily);localStorage.setItem(KEY.bonusStreak,String(bonusStreak));localStorage.setItem(KEY.bonusCollection,String(bonusCollection));localStorage.setItem(KEY.bonusLevel,String(bonusLevel));}
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
function marketPrice(c){const day=Math.floor(Date.now()/86400000);const wave=1+((((c.name.length*13)+day)%21)-10)/100;return Math.round(c.price*wave)}
const limitedNames=["Bugatti La Voiture Noire","Ferrari FXX-K Evo","Lexus LFA","Nissan Skyline GT-R R34","Mercedes-Maybach Exelero"];
function card(c,mode){const d=document.createElement("div");d.className="car-card "+clsFor(c)+(mode==="market"&&limitedNames.includes(c.name)?" limited":"");const fav=favs.includes(idFor(c));const shownPrice=mode==="market"?marketPrice(c):c.price;const limited=mode==="market"&&limitedNames.includes(c.name)?'<span class="badge-mini">🔥 ОГРАНИЧЕННО</span>':'';d.innerHTML=`<button class="fav ${fav?"on":""}">★</button><div class="emoji">${c.emoji}</div><b>${c.name}</b><small>${c.rarity} · ${c.power} л.с. · ${c.year}</small>${limited}<div class="card-price">${fmt(shownPrice)}</div><div class="card-actions">${mode==="market"?`<button class="buy">КУПИТЬ</button>`:`<button class="sell">ПРОДАТЬ</button>`}</div>`;
  d.querySelector('.fav').onclick=e=>{e.stopPropagation();fav?favs=favs.filter(x=>x!==idFor(c)):favs.push(idFor(c));save();renderAll()};
  const action=d.querySelector('.buy,.sell');if(action)action.onclick=()=>mode==="market"?buy(c):sellFromGarage(c);return d}
function filter(list,search,rarity){const q=(search||"").toLowerCase().trim();return list.filter(c=>(!q||c.name.toLowerCase().includes(q))&&(!rarity||c.rarity===rarity))}
function renderGarage(){const list=filter(garage,$("#garageSearch").value,$("#garageRarity").value),g=$("#garageGrid");g.innerHTML="";list.forEach(c=>g.appendChild(card(c,"garage")));if(!list.length)g.innerHTML='<div class="empty">Гараж пуст. Крути рулетку или купи машину на рынке.</div>'}
function renderCollection(){let list=filter(collection,$("#collectionSearch").value,$("#collectionRarity").value);const sort=$("#collectionSort").value;if(sort==="price")list.sort((a,b)=>b.price-a.price);else if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));else{const order={МИФИЧЕСКИЙ:5,ЛЕГЕНДАРНЫЙ:4,ЭПИЧЕСКИЙ:3,РЕДКИЙ:2,ОБЫЧНЫЙ:1};list.sort((a,b)=>(order[b.rarity]||0)-(order[a.rarity]||0))}const g=$("#collectionGrid");g.innerHTML="";list.forEach(c=>g.appendChild(card(c,"collection")));if(!list.length)g.innerHTML='<div class="empty">Пока ничего не собрано.</div>'}
function renderMarket(){const list=filter(cars,$("#marketSearch").value,$("#marketRarity").value),g=$("#marketGrid");g.innerHTML="";list.forEach(c=>g.appendChild(card(c,"market")))}
function renderAchievements(){const rare=collection.filter(c=>["ЛЕГЕНДАРНЫЙ","МИФИЧЕСКИЙ"].includes(c.rarity)).length;const myth=collection.filter(c=>c.rarity==="МИФИЧЕСКИЙ").length;const ach=[['Первый автомобиль',collection.length>=1],['10 машин',collection.length>=10],['50 машин',collection.length>=50],['Первая легенда',rare>=1],['Охотник за мифами',myth>=1],['Богач гаража',garage.reduce((s,c)=>s+c.price,0)>=100000000]];$("#achList").innerHTML=ach.map(a=>`<div class="ach"><span>${a[0]}</span><b class="${a[1]?"done":""}">${a[1]?"✓":"○"}</b></div>`).join('')}
function renderAll(){renderTop();renderGarage();renderCollection();renderMarket();renderAchievements();renderBonuses()}
function addToCollection(c){if(!collection.some(x=>idFor(x)===idFor(c)))collection.unshift(c)}
function keepSelected(){
  if(resultActionDone || selectedCarIndex===null) return;
  const c=cars[selectedCarIndex];
  if(!c) return;
  resultActionDone=true;
  garage.unshift({...c}); season.xp+=4; updateTask("garage",1);
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
  garage.splice(i,1); const payout=salePayout(c); balance+=payout; stats.sold++; stats.earned+=payout; updateTask("sell",1); persistExtra(); save(); renderAll();
  tg?.HapticFeedback?.notificationOccurred("success"); $("#hint").textContent=`Продано за ${fmt(payout)}.`;
}
function sellSelected(){
  if(resultActionDone || !selected) return;
  const c={...selected};
  resultActionDone=true;
  // Продажа выигрыша происходит сразу — машина не добавляется в гараж.
  // Но она остаётся в коллекции как когда-либо полученная.
  addToCollection(c);
  const payout=Math.round(c.price*.65);
  balance+=payout; stats.sold++; stats.earned+=payout; season.xp+=2; updateTask("sell",1); persistExtra();
  selected=null;
  selectedCarIndex=null;
  setResultActions(false);
  save();
  renderAll();
  tg?.HapticFeedback?.notificationOccurred("success");
  $("#hint").textContent=`${c.name} продан сразу за ${fmt(payout)}. В гараж машина не добавлена.`;
}

function buy(c){const price=marketPrice(c);if(balance<price){tg?.showAlert?.("Не хватает денег");return}balance-=price;garage.unshift(c);addToCollection(c);save();renderAll();tg?.HapticFeedback?.notificationOccurred("success");$("#hint").textContent=`${c.name} куплен и добавлен в гараж.`}

const SPIN_MODES={
  ordinary:{label:"ОБЫЧНАЯ ПРОКРУТКА",price:2000000,min:0,cls:"mode-ordinary"},
  rare:{label:"РЕДКАЯ И ВЫШЕ",price:10000000,min:1,cls:"mode-rare"},
  epic:{label:"ЭПИЧЕСКАЯ И ВЫШЕ",price:20000000,min:2,cls:"mode-epic"},
  legendary:{label:"ЛЕГЕНДАРНАЯ И ВЫШЕ",price:35000000,min:3,cls:"mode-legendary"},
  exclusive:{label:"ЭКСКЛЮЗИВНАЯ И ВЫШЕ",price:650000000,min:5,cls:"mode-exclusive"}
};
let spinMode="ordinary", spinTimer=null, currentWinnerEl=null, currentTarget=0, currentTrack=null, currentViewport=null;
const rarityRank={"ОБЫЧНЫЙ":0,"РЕДКИЙ":1,"ЭПИЧЕСКИЙ":2,"ЛЕГЕНДАРНЫЙ":3,"МИФИЧЕСКИЙ":4,"ЭКСКЛЮЗИВНЫЙ":5};
function poolForMode(mode=spinMode){
  const min=SPIN_MODES[mode].min;
  return cars.filter(c=> mode==="ordinary" ? c.rarity==="ОБЫЧНЫЙ" : (rarityRank[c.rarity]||0)>=min);
}
function weightedDraw(pool=cars){
  const weights=pool.map(c=>Math.max(.001,parseFloat(c.chance)||.001));
  const total=weights.reduce((a,b)=>a+b,0); let r=Math.random()*total;
  for(let i=0;i<pool.length;i++){r-=weights[i];if(r<=0)return pool[i]}
  return pool[pool.length-1];
}
function updateSpinModeUI(){
  const mode=SPIN_MODES[spinMode];
  $("#spinBtn").innerHTML=`🎰 КРУТИТЬ <span>${fmt(mode.price)}</span>`;
  document.querySelectorAll(".spin-mode").forEach(b=>{
    const m=SPIN_MODES[b.dataset.mode];
    b.classList.toggle("selected",b.dataset.mode===spinMode);
    if(m){ const priceEl=b.querySelector("b"); if(priceEl) priceEl.textContent=fmt(m.price); }
  });
  $("#spinModeLabel").textContent=mode.label;
}
function setSkipState(enabled){
  const b=$("#skipSpin"); if(!b)return;
  b.disabled=!enabled; b.style.opacity=enabled?"1":".45"; b.style.pointerEvents=enabled?"auto":"none";
}
function buildReel(win,pool){
  const track=$("#rouletteTrack"); track.innerHTML=""; const arr=[];
  for(let i=0;i<62;i++)arr.push(pool[Math.floor(Math.random()*pool.length)]);
  const winnerIndex=52; arr[winnerIndex]=win;
  arr.forEach((c,i)=>{
    const d=document.createElement("div"); d.className="roulette-card "+clsFor(c)+(i===winnerIndex?" reel-winner":"");
    d.dataset.carIndex=String(cars.indexOf(c));
    d.innerHTML=`<div class="emoji">${c.emoji}</div><b>${c.name}</b><small>${c.rarity}<br>${fmt(c.price)}</small>`;
    track.appendChild(d);
  });
  return track.children[winnerIndex];
}
function finishSpin(){
  if(!spinning)return;
  if(spinTimer){clearTimeout(spinTimer);spinTimer=null;}
  if(currentTrack && currentWinnerEl){
    currentTrack.style.transition="transform .28s cubic-bezier(.2,.8,.2,1)";
    currentTrack.style.transform=`translateX(-${Math.max(0,currentTarget)}px)`;
  }
  setTimeout(()=>{
    const viewport=currentViewport||$(".roulette-viewport"), track=currentTrack||$("#rouletteTrack");
    const vr=viewport.getBoundingClientRect(), center=vr.left+vr.width/2;
    let best=null,bestDist=Infinity;
    track.querySelectorAll(".roulette-card").forEach(el=>{const r=el.getBoundingClientRect();const d=Math.abs((r.left+r.width/2)-center);if(d<bestDist){bestDist=d;best=el}});
    const actualIndex=best?Number(best.dataset.carIndex):Number(currentWinnerEl.dataset.carIndex);
    const actualWin=cars[actualIndex];
    selectedCarIndex=actualIndex; spinning=false; setSkipState(false);
    stats.wins++; stats.best=Math.max(stats.best,actualWin.price);
    const rr=rarityRank[actualWin.rarity]||0; if(rr>=1)pity.rare=0; else pity.rare++; if(rr>=2)pity.epic=0; else pity.epic++; if(rr>=3)pity.legendary=0; else pity.legendary++; if(rr>=5)pity.exclusive=0; else pity.exclusive++;
    stats.combo++; if(rr===0)stats.combo=0; updateTask("rare",rr>=1?1:0); updateTask("legendary",rr>=3?1:0); updateTask("salesTarget",0); season.xp+=5; persistExtra();
    $("#spinBtn").disabled=false; $("#spinBtn").style.opacity=1;
    renderResult(actualWin); $("#hint").textContent=`Выпала ${actualWin.rarity.toLowerCase()} машина. Решай: в гараж или продать.`;
    tg?.HapticFeedback?.notificationOccurred(actualWin.rarity==="МИФИЧЕСКИЙ"||actualWin.rarity==="ЭКСКЛЮЗИВНЫЙ"?"success":"warning");
  },320);
}
function spin(){
  if(spinning)return;
  const mode=SPIN_MODES[spinMode], pool=poolForMode();
  if(!pool.length){tg?.showAlert?.("Для этой прокрутки пока нет доступных машин");return}
  if(balance<mode.price){tg?.showAlert?.(`Не хватает ${fmt(mode.price)}`);return}
  balance-=mode.price; stats.spins++; stats.spent+=mode.price; season.xp+=1; updateTask("spins",1); persistExtra(); save(); spinning=true; selected=null; setResultActions(false);
  $("#spinBtn").disabled=true; $("#spinBtn").style.opacity=.55; setSkipState(true);
  let drawPool=pool; if(spinMode!="ordinary" && pity[spinMode]>=({'rare':10,'epic':20,'legendary':30,'exclusive':40}[spinMode]||999)){const min=SPIN_MODES[spinMode].min; drawPool=pool.filter(c=>(rarityRank[c.rarity]||0)>=min); } const win=weightedDraw(drawPool), winnerEl=buildReel(win,pool), track=$("#rouletteTrack"), viewport=$(".roulette-viewport");
  currentWinnerEl=winnerEl; currentTrack=track; currentViewport=viewport;
  track.style.transition="none"; track.style.transform="translateX(0px)"; void track.offsetWidth;
  currentTarget=winnerEl.offsetLeft+winnerEl.offsetWidth/2-viewport.clientWidth/2;
  track.style.transition="transform 5.2s cubic-bezier(.08,.72,.12,1)";
  track.style.transform=`translateX(-${Math.max(0,currentTarget)}px)`;
  spinTimer=setTimeout(finishSpin,5350);
}
function bonusToday(){return new Date().toDateString()}
function renderBonuses(){
  const today=bonusToday(), level=Math.max(1,Math.floor(collection.length/5)+1);
  const dailyReady=bonusDaily!==today;
  const streakReward=Math.min(1000000,Math.max(0,streak)*100000);
  const collectionMilestone=Math.floor(collection.length/10)*250000;
  const levelMilestone=Math.floor(level/5)*500000;
  $("#dailyBonusAmount").textContent="+250 000 ₽";
  $("#streakBonusAmount").textContent=fmt(streakReward);
  $("#collectionBonusAmount").textContent=fmt(collectionMilestone);
  $("#levelBonusAmount").textContent=fmt(levelMilestone);
  const db=$("#claimDailyBonus"), sb=$("#claimStreakBonus"), cb=$("#claimCollectionBonus"), lb=$("#claimLevelBonus");
  db.disabled=!dailyReady; db.textContent=dailyReady?"ЗАБРАТЬ":"УЖЕ ПОЛУЧЕН";
  sb.disabled=streak<=0||bonusStreak>=streak; sb.textContent=(streak<=0?"НЕТ СЕРИИ":(bonusStreak>=streak?"УЖЕ ПОЛУЧЕН":"ЗАБРАТЬ"));
  cb.disabled=collectionMilestone<=bonusCollection; cb.textContent=collectionMilestone>bonusCollection?"ЗАБРАТЬ":"ЕЩЁ НЕТ НАГРАД";
  lb.disabled=levelMilestone<=bonusLevel; lb.textContent=levelMilestone>bonusLevel?"ЗАБРАТЬ":"ЕЩЁ НЕТ НАГРАД";
}
function claimDailyBonus(){const today=bonusToday();if(bonusDaily===today)return;balance+=250000;bonusDaily=today;save();renderAll();tg?.HapticFeedback?.notificationOccurred("success")}
function claimStreakBonus(){const reward=Math.min(1000000,Math.max(0,streak)*100000);if(!reward||bonusStreak>=streak)return;balance+=reward;bonusStreak=streak;save();renderAll();tg?.HapticFeedback?.notificationOccurred("success")}
function claimCollectionBonus(){const available=Math.floor(collection.length/10)*250000;if(available<=bonusCollection)return;balance+=available-bonusCollection;bonusCollection=available;save();renderAll();tg?.HapticFeedback?.notificationOccurred("success")}
function claimLevelBonus(){const level=Math.max(1,Math.floor(collection.length/5)+1),available=Math.floor(level/5)*500000;if(available<=bonusLevel)return;balance+=available-bonusLevel;bonusLevel=available;save();renderAll();tg?.HapticFeedback?.notificationOccurred("success")}
$("#claimDailyBonus").onclick=claimDailyBonus;$("#claimStreakBonus").onclick=claimStreakBonus;$("#claimCollectionBonus").onclick=claimCollectionBonus;$("#claimLevelBonus").onclick=claimLevelBonus;
$("#spinBtn").onclick=spin;
$("#skipSpin").onclick=()=>{if(spinning)finishSpin()};
document.querySelectorAll(".spin-mode").forEach(b=>b.onclick=()=>{if(spinning)return;spinMode=b.dataset.mode;updateSpinModeUI()});
$("#spinBtn").onclick=spin;
$("#keep").onclick=keepSelected;$("#sell").onclick=sellSelected;
$("#free").onclick=()=>{const today=new Date().toDateString();if(localStorage.getItem(KEY.daily)===today){tg?.showAlert?.("Ежедневное открытие уже использовано");return}localStorage.setItem(KEY.daily,today);const c=weightedDraw();streak++;selectedCarIndex=cars.indexOf(c);renderResult(c);$("#hint").textContent="🎁 Бесплатное открытие! Выбери судьбу машины.";save();renderAll();tg?.HapticFeedback?.notificationOccurred("success")};

document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active-panel'));$("#"+b.dataset.tab).classList.add('active-panel')});
['#garageSearch','#garageRarity','#collectionSearch','#collectionRarity','#collectionSort','#marketSearch','#marketRarity'].forEach(s=>$(s).addEventListener(s.includes('Search')?'input':'change',renderAll));

const TASKS=[['spins','Сделать 3 прокрутки',3,150000],['sell','Продать 2 машины',2,300000],['rare','Получить 2 редкие+',2,500000],['garage','Добавить 2 машины в гараж',2,250000]];
function updateTask(k,n){if(!n)return;taskState[k]=(taskState[k]||0)+n;persistExtra()}
function taskDay(){const d=new Date().toDateString();if(taskState.day!==d){taskState={day:d};persistExtra()}}
function renderActivities(){taskDay();const tb=$("#tasksBox");tb.innerHTML=TASKS.map(([k,t,max,reward])=>{const v=Math.min(max,taskState[k]||0),done=taskState['claimed_'+k];return `<div class="task"><span>${t}<br><small>${v}/${max} · +${fmt(reward)}</small></span><button ${v<max||done?'disabled':''} data-task="${k}">${done?'ПОЛУЧЕНО':'ЗАБРАТЬ'}</button></div>`}).join('');tb.querySelectorAll('[data-task]').forEach(b=>b.onclick=()=>{const k=b.dataset.task, x=TASKS.find(a=>a[0]===k);if(!x||taskState[k]<x[2]||taskState['claimed_'+k])return;balance+=x[3];taskState['claimed_'+k]=1;persistExtra();save();renderAll()});
const statsBox=$("#statsBox");statsBox.innerHTML=`<div class="stat-grid"><div>Прокруток<b>${stats.spins}</b></div><div>Потрачено<b>${fmt(stats.spent)}</b></div><div>Продано<b>${stats.sold}</b></div><div>Заработано<b>${fmt(stats.earned)}</b></div><div>Лучший приз<b>${fmt(stats.best)}</b></div><div>Комбо<b class="combo">x${Math.max(1,stats.combo)}</b></div></div>`;
const counts={};collection.forEach(c=>counts[countryOf(c)]=(counts[countryOf(c)]||0)+1);$("#countriesBox").innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k,v])=>`<div class="country-line"><span>${k}</span><b>${v}/${cars.filter(c=>countryOf(c)===k).length}</b></div>`).join('')||'<small>Начни собирать машины.</small>';
const brands={};collection.forEach(c=>{const b=brandOf(c);brands[b]=(brands[b]||0)+1});$("#brandsBox").innerHTML=Object.entries(brands).sort((a,b)=>b[1]-a[1]).slice(0,10).map(([k,v])=>`<div class="brand-line"><span>${k}</span><b>${v}</b></div>`).join('')||'<small>Коллекция пока пуста.</small>';
$("#bankBalance").textContent=fmt(bank);
const targets=[['rare','Редкая+',10],['epic','Эпическая+',20],['legendary','Легендарная+',30],['exclusive','Эксклюзивная+',40]];$("#pityBox").innerHTML=targets.map(([k,n,t])=>`<div class="progress-line"><span>${n}</span><b>${pity[k]||0}/${t}</b></div>`).join('');
const xp=season.xp||0, lvl=Math.floor(xp/25)+1, inLvl=xp%25;$("#seasonBox").innerHTML=`<div><b>Сезон 1 · Уровень ${lvl}</b><p>Прогресс ${inLvl}/25 XP</p><div class="season-progress"><i style="width:${inLvl*4}%"></i></div><p>Награда за следующий уровень: ${fmt(lvl*150000)}</p></div>`;
fillActivityCars();}
function fillActivityCars(){['#raceCar','#tuneCar'].forEach(sel=>{const el=$(sel);if(!el)return;const old=el.value;el.innerHTML=garage.map((c,i)=>`<option value="${i}">${c.name} · ${fmt(c.price)}</option>`).join('');if(old<el.options.length)el.value=old});}
function bankDeposit(){if(balance<10000000){tg?.showAlert?.('Нужно 10 000 000 ₽');return}balance-=10000000;bank+=10000000;save();persistExtra();renderAll()}
function bankWithdraw(){if(bank<10000000){tg?.showAlert?.('На вкладе недостаточно денег');return}bank-=10000000;balance+=10000000;save();persistExtra();renderAll()}
function bonusWheel(){const day=new Date().toDateString();if(localStorage.getItem(GAMEKEY.wheel)===day){tg?.showAlert?.('Колесо уже использовано сегодня');return}const rewards=[100000,250000,500000,1000000,2000000];const r=rewards[Math.floor(Math.random()*rewards.length)];balance+=r;localStorage.setItem(GAMEKEY.wheel,day);$("#wheelResult").textContent=`🎉 +${fmt(r)}`;save();renderAll()}
function race(){if(balance<500000){tg?.showAlert?.('Не хватает 500 000 ₽');return}if(!garage.length){tg?.showAlert?.('Нужна машина в гараже');return}const i=Number($("#raceCar").value),c=garage[i];if(!c)return;balance-=500000;const power=c.power+(tune[idFor(c)]||0)*25, opp=300+Math.random()*700;const win=power>=opp;const prize=win?Math.round(900000+power*1200):0;if(win)balance+=prize;$("#raceResult").textContent=win?`🏁 Победа! +${fmt(prize)}`:'💥 Проигрыш. Попробуй другую машину.';save();renderAll()}
function tuneCar(){if(balance<1000000){tg?.showAlert?.('Не хватает 1 000 000 ₽');return}const i=Number($("#tuneCar").value),c=garage[i];if(!c)return;const id=idFor(c);tune[id]=(tune[id]||0)+1;balance-=1000000;$("#tuneResult").textContent=`🔧 ${c.name}: уровень тюнинга ${tune[id]}`;save();persistExtra();renderAll()}
$("#bankDeposit").onclick=bankDeposit;$("#bankWithdraw").onclick=bankWithdraw;$("#bonusWheel").onclick=bonusWheel;$("#raceBtn").onclick=race;$("#tuneBtn").onclick=tuneCar;
const oldRenderAll=renderAll;renderAll=function(){oldRenderAll();renderActivities()};
setResultActions(false); renderAll();

// v13: профиль, рейтинг, осколки, обмен, событие и машина дня
const V13={shards:'ak_shards_v13',event:'ak_event_v13'};
let shards=JSON.parse(localStorage.getItem(V13.shards)||'{"ОБЫЧНЫЙ":0,"РЕДКИЙ":0,"ЭПИЧЕСКИЙ":0,"ЛЕГЕНДАРНЫЙ":0,"МИФИЧЕСКИЙ":0,"ЭКСКЛЮЗИВНЫЙ":0}');
function saveV13(){localStorage.setItem(V13.shards,JSON.stringify(shards));}
const shardKey=r=>r;
const oldAddToCollection=addToCollection;
addToCollection=function(c){const existed=collection.some(x=>idFor(x)===idFor(c));oldAddToCollection(c);if(existed){shards[shardKey(c.rarity)]=(shards[shardKey(c.rarity)]||0)+1;saveV13();}return !existed};
const v13Day=Math.floor(Date.now()/86400000);
const v13EventCountries=['Япония','Германия','Италия','США','Россия'];
const v13EventCountry=v13EventCountries[v13Day%v13EventCountries.length];
const v13CarOfDay=cars[v13Day%cars.length];
const baseMarketPrice=marketPrice;
marketPrice=function(c){let p=baseMarketPrice(c);if(c.name===v13CarOfDay.name)p=Math.round(p*.85);return p};
function salePayout(c){let mult=.65;if(countryOf(c)===v13EventCountry)mult+=.10;return Math.round(c.price*mult)}
function renderProfile(){
 const lvl=Math.max(1,Math.floor((collection.length+stats.spins)/10)+1);
 const title=lvl>=20?'Король автокода':lvl>=10?'Профи коллекционер':lvl>=5?'Продвинутый коллекционер':'Начинающий коллекционер';
 $('#profileTitle').textContent=title;$('#profileSubtitle').textContent=`Уровень ${lvl} · ${collection.length} уникальных машин`;
 $('#profileStats').innerHTML=`<div>💰 Баланс<b>${fmt(balance)}</b></div><div>🚘 В гараже<b>${garage.length}</b></div><div>🎰 Прокруток<b>${stats.spins}</b></div><div>💸 Потрачено<b>${fmt(stats.spent)}</b></div><div>💵 Продано<b>${stats.sold}</b></div><div>🏆 Лучший приз<b>${fmt(stats.best)}</b></div><div>🔥 Серия<b>${streak}</b></div><div>⭐ Уровень<b>${lvl}</b></div>`;
 const order=['ОБЫЧНЫЙ','РЕДКИЙ','ЭПИЧЕСКИЙ','ЛЕГЕНДАРНЫЙ','МИФИЧЕСКИЙ','ЭКСКЛЮЗИВНЫЙ'];
 const labels={ОБЫЧНЫЙ:'⚪ Обычные',РЕДКИЙ:'🔵 Редкие',ЭПИЧЕСКИЙ:'🟣 Эпические',ЛЕГЕНДАРНЫЙ:'🟠 Легендарные',МИФИЧЕСКИЙ:'🔴 Мифические',ЭКСКЛЮЗИВНЫЙ:'💎 Эксклюзивные'};
 $('#shardsBox').innerHTML='<div class="shard-grid">'+order.map(r=>`<div class="shard">${labels[r]}<b>${shards[r]||0} 🧩</b></div>`).join('')+'</div>';
 const vals=[{n:'Ты',v:garage.reduce((s,c)=>s+c.price,0)},{n:'TurboCollector',v:7800000000},{n:'GarageKing',v:4200000000},{n:'AutoHunter',v:1950000000},{n:'RoadWolf',v:870000000}].sort((a,b)=>b.v-a.v);
 $('#leaderboardBox').innerHTML=vals.map((x,i)=>`<div class="leader-row"><span class="leader-rank">${['🥇','🥈','🥉','4','5'][i]}</span><span class="leader-name">${x.n}</span><span class="leader-value">${fmt(x.v)}</span></div>`).join('');
 const day=Math.floor(Date.now()/86400000), eventNames=['🇯🇵 Японская неделя','🇩🇪 Немецкая неделя','🇮🇹 Итальянская неделя','🇺🇸 Американская неделя','🇷🇺 Российская неделя'];
 const event=eventNames[day%eventNames.length]; const car=cars[day%cars.length];
 $('#eventBox').innerHTML=`<div class="event-box"><div class="event-title">${event}</div><small>Машины этой страны получают +10% к стоимости при продаже. Машина дня получает скидку 15% на рынке.</small><div class="event-car"><div class="emoji">${car.emoji}</div><div><b>${car.name}</b><span>Машина дня · ${fmt(Math.round(marketPrice(car)*.85))}</span></div></div></div>`;
 document.querySelectorAll('[data-exchange]').forEach(btn=>{const r=btn.dataset.exchange.toUpperCase();const req={ordinary:5,rare:10,epic:20,legendary:30,mythic:40,exclusive:50}[btn.dataset.exchange];btn.disabled=(shards[r]||0)<req;});
}
function exchange(r){const req={ordinary:5,rare:10,epic:20,legendary:30,mythic:40,exclusive:50}[r];const rarity={'ordinary':'ОБЫЧНЫЙ','rare':'РЕДКИЙ','epic':'ЭПИЧЕСКИЙ','legendary':'ЛЕГЕНДАРНЫЙ','mythic':'МИФИЧЕСКИЙ','exclusive':'ЭКСКЛЮЗИВНЫЙ'}[r];const reward={ordinary:500000,rare:2000000,epic:5000000,legendary:15000000,mythic:40000000,exclusive:150000000}[r];if((shards[rarity]||0)<req)return;shards[rarity]-=req;balance+=reward;saveV13();save();renderAll();tg?.HapticFeedback?.notificationOccurred('success');}
document.querySelectorAll('[data-exchange]').forEach(b=>b.onclick=()=>exchange(b.dataset.exchange));
const baseRenderAll=renderAll;renderAll=function(){baseRenderAll();renderProfile();};
renderProfile();
