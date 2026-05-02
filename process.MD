Problemos sprendimas:

Candidate Task Brief

 Examples (feel free to be more creative than these)
🗺️ Travel planner
📶 eSIM recommendation tool
💰 Trip cost calculator
🎒 Packing assistant
✨ Anything useful for travelers



✨🏆✨
Minimalizmas: Naudojamas „Saily“ stilius – daug baltos erdvės, geltoni akcentai, suapvalinti kampai(buttons geltoni/fonas baltas)

Tech-Stack:
Next.js + Tailwind Css + TypeScript

#pagrindine problema serveriai turi high load tai tenka kartais is naujo padaryti requesta


Pateiktas prompt ai agentui su norima tema,  : saily next-gen 
Pirmu prompt  sukuriama projekto struktura - remai
antras prompt = suprast ka agent padare ir paziuret ar viskas gerai, priduot pataisymus (jei reikia)
Pasileidus svetaine reikia isimti nes agent galvoja kad mes darome saily.ai o cia turetu but saily 2.0

Tada prasome ai agent kad pradetu kurt plans endpointa su 3 mygtukais ir po to eisime prie saliu/regionu pridejimo

sugeneruojama laikina duomenu baze json formatu kad turetum plans skiltyje skirtingus planus su salimis/regionais
prideti saliu button i plans endpointa (pasieme is db.json)

pridetas mygtuku funkcionalumas kad paspaudus ant salies/regiono nukreiptu i 
atitinkama puslapi kuriame butu paimti pagrindiniai duomenys is db.json ir butu
matomi toje skiltyje, kad paspaudus ant buttono butu permetamas i /plan/{countryId} puslapi 
ir atspausdina visa info is db.json susijusia su salimi ar regionu

problema header tabai atrodo vargsiskai tai jie bus keiciami i hibridini mano modeli arba orginalu Saily stiliu (pasiklausta Agent ir nusprensta daryt hibridini modeli)

// resources header button
reikia pasirinkti kaip bus resources ar kaip dropdown meniu ar tiesiog sukurti resources pages ir viskas
agentui duotas pavyzdys kaip turi atrodyt ( dropdown meniu ) ir jis pakeite resources mygtuka kad jis atidarytu dropdown meniu
resource mygtuko dropdownmenu padaromas funkcionaliu kad butu galima nueit i ta puslapi su veikiancia struktura (kaip plans skiltyje)

einame prie Help puslapio Agentui pateikta orginalaus support.saily puslapio tekstas ir pagrindiniai klausimai jis tures sugeneruoti puslapi kuriame matysis pagrindiniai klausimai ir trumpi atsakymai ir kad musu help header button pasidarytu funkcionalus

agentas padare tvarkinga struktura accordations modernias isssiskleidziancias korteles su trumpais atsakymais

Smart-Search mygtukas pradzioje padarome vizualu langa tada prisidedame ai rakta perkrauname projekta. Toliau einame prie endpoint/route logikos

buvo pridetas naujas packet generative-ai kad galeciau naudotis ai agentu per svetaine taip pat jam buvo padarytos taisykles kuriu laikytis ir kad ju nebutu galima keisti 

padaryta visa ai logika smart searche

klausiu agent ar viska padareme ir ar reiktu kazka dar padaryti o jis man atrase: Geri inžinieriai žino, kad mažiau, bet kokybiškiau yra geriau nei daug, bet bet kaip.

taip pat paprasiau agento kad pritaikytu puslapi mobiliesiems telefonams nes Saily teikia produkta kuris naudojamas per IOS arba Android 

reikia kad ai searche isliktu musu chatai su ai agentu net po puslapio perkrovimo 

prisidejau session ir local storage
ir pritaikytas chat stilius internal scrolling taip kaip naudojamas ai agentuose kad butu patogus UI

sutvarkytas musu smart-search kad veiktu per telefona

tvarjkomas main page kad neatrodytu taip skurdziai ir butu jame daugiau informacijos ir teksto - stuvarkytas

tvarkomi resources/endpoint kad ir juose butu daugiau informacijos 
mygtukai on iphone on android qr code

ikeliau tikro saily blog skilti parasiau agentui kad atkopijuotu visa ir padarytu panasiai agentas tai puikiai igyvendino taciau 2 nuotraukos neveike pridejau nuotrauka ir parasiau kad pakeistu tas nuotraukas ir taip per 2-3 prompt problema issisprende

agentas sugeneravo man readme.md 

dabar sprendziama problema kad butu galima sita projekta pasileisti is kaip svetaine is tarkim "onrender" ir kad api key nebutu nuleakintas

tik reikia padaryti kad kelione planuotu tik tada kai vartotojas to paprasyt suplanuok ar ten nezinau ka daryt ka veikt o ne dabar kai parasau keliausiu savaite parasyk kiek gb imt ir jis man visa keliones plana paraso
pataise viska tik keicia modeli kazkodel i 2.0-flash, o su tokiu modeliu svetaine neveikia nes jis speju out-dated 

taip pat prideta rate-limit 5 request i minute kad neprispamintu/ apsauga nuo kenkeju

paprasiau agento kad prideti logginga i discord kad matyciau kas per vartotojai naudojasi svetaine ir ka jie praso (chat history / prompts) 
ir jis pridejo akd rodytu net su IP zmogaus paprasiau kad isimtu nes taip negalima man reikia tik ai technines informacijos rate limit ir klausimo su atsakymu

su agent padarytas labiau naturalus atsakymai is ai o ne vien kartoja ta pacia eilute as agentas asistentas ir t.t kur grynai 2026 metais niekas taip nesakytu



#1 problema  Gemini API Error: Error: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
    at async POST (src\app\api\chat\route.ts:53:20)

ai agentas pasieme ne ta modeli (reikejo gemini-2.5-flash) o pasieme 1.5 flash tada bande keist gale pridedamas latest ir t.t 
reikalingas pataisymas rankiniu budu

#2 agentas turejo prideti footeri taciau visas projektas nuluzo su didziule kose error kodu

Expected '</', got ')'
./src/app/smart-search/page.tsx (170:13)

Expected '</', got ')'
  168 |                 </div>
  169 |               </div>
> 170 |             );
      |             ^
  171 |           })}
  172 |           
  173 |           {isLoading && (

Parsing ecmascript source code failed

Import traces:
  Client Component Browser:
    ./src/app/smart-search/page.tsx [Client Component Browser]
    ./src/app/smart-search/page.tsx [Server Component]

  Client Component SSR:
    ./src/app/smart-search/page.tsx [Client Component SSR]
    ./src/app/smart-search/page.tsx [Server Component]


agentas puikiai susidorojo su klaida raso problema : Atsiprašau! Tai buvo maža sintaksės klaida: pridėdamas animacijas pakeičiau atidarymo žymą iš <div> į <motion.div>, bet pačioje pabaigoje pamiršau pakeisti uždarymo žymą (liko tiesiog </div>). React'as to labai nemėgsta! 😂

Ką tik tai ištaisiau (pakeičiau atgal į </motion.div>). Serveris dabar automatiškai persikraus ir puslapis vėl veiks.


# 3 problema
reikia sutvarkyti ta motion problema (smart-search paspaudus puslapus nusitempia i apacia ) nes dabar smart seach skiltyje visas vaizdas yra nutempiamas i gala 

pirmu kartu agentas nesugebejo sutvarkyti nes perkrovus vis tiek puslapis nusitempiai gala

antru prompt agentas suprato ka turejau omeny ir sutvarke klaida: 
Problemos priežastis: Kai atidarydavai puslapį, mano parašyta automatinio slinkimo funkcija (scrollIntoView) iškart suveikdavo ir per jėgą nutempdavo tavo naršyklės langą (pelytės ratuką) į patį ekrano dugną, praleidžiant gražų pavadinimą ir navigaciją. Tai tikrai tragiškas UX!

#4 problema per telefona F12 Smart search puslapyje snekant su ai agentu kai tu jo paklausi kazko ir jis galvoja visas puslapis nusislenka kazkodel i apacia 
i ta prideta musu footer

isimtas footer pridetas naujas conditional footer ir padarytas sticky langas kad nenusislinktu

vis dar nenusislenka naujas prompt:  tiesiog padaryk kad visada parasius zinute per telefona butumem puslapioje apacioje nebent zmogus noretu scrollint chat i virsu ir tarkim kai scrollini nedingsta tas laukelis kur parasyt zinute ir jei vel kazka paraso tada butu nutemptas i apacia prie naujausios zinutes

problema sutvarkyta Sticky/Fixed Footer"Įvesties laukas prisegtas (Fixed Bottom): Natūralus puslapio scrollinimas: Automatinis tempimas į apačią: 
 

Verdiktas:
"Tavo surašytas turinys yra aukso vertės, nes jis tikras. Jei visą šitą informaciją sudėsi į tvarkingą Markdown formatą su aiškiomis skiltimis (kaip aptarėme), tai bus vienas geriausių process.md, kokius jie yra gavę."