import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';



const Weapon = (props) => {
  const {id} = props.match.params
  // const [weapons, setList] = useState([])

  const weapons = 
  [{
    "name": "Flagnum",
    "description": null,
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/flagnum-282503fb5260409a844e29eeae45bbca.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fflagnum-282503fb5260409a844e29eeae45bbca.png&width=332&hash=376WQLPQ8ra7Xbij6jhSp6avT3QG3ccjBS%2fKVFs4Efw%3d",
    "isUsableByPlayer": true,
    "id": "2244200496",
    "contentId": "cc556937-465f-4286-a989-e4ac28e6988b"
  }, {
    "name": "Spartan",
    "description": null,
    "type": "Unknown",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/spartan-7d33bbefeee740f8a43e3e081a5b7aea.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fspartan-7d33bbefeee740f8a43e3e081a5b7aea.png&width=332&hash=dwLka%2fmOgqyoZhE4czunU6Awgo3XClrV1M%2bWFof83rE%3d",
    "isUsableByPlayer": false,
    "id": "3168248199",
    "contentId": "447b227e-18eb-4060-904a-1cf709638958"
  }, {
    "name": "SHADE AA TURRET",
    "description": "Shade AA Turret deployable for campaign and warzone",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/shade-plasma-turret-type2-43a3e7bd5506473d8b21db5529132500.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fshade-plasma-turret-type2-43a3e7bd5506473d8b21db5529132500.png&width=332&hash=DMp8f6sqvTQQdtdrMktKI8osrwk9VUAwO21qfUV7dtc%3d",
    "isUsableByPlayer": true,
    "id": "2989142719",
    "contentId": "0a98a07c-51df-44b8-9359-982458bff2ae"
  }, {
    "name": "SHADE PLASMA TURRET",
    "description": "Shade Plasma Turret deployable for campaign and warzone",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/shade-plasma-turret-a46b99d2048c46f18511568c722ad301.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fshade-plasma-turret-a46b99d2048c46f18511568c722ad301.png&width=332&hash=yReKqrjSq2RAGw6N3L4r27Ch0MXbKCaAfgZ5c%2bQTg0w%3d",
    "isUsableByPlayer": true,
    "id": "698769165",
    "contentId": "8d6b0d58-f536-4685-b19c-0bbe6bd7fc96"
  }, {
    "name": "Environmental Explosives",
    "description": null,
    "type": "Unknown",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/explosives/explosives-040c30c3a5f3402abfb616e7d18c2395.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fexplosives%2fexplosives-040c30c3a5f3402abfb616e7d18c2395.png&width=332&hash=tv3HlwTBv5ChH2KebQAHYTNmOo7ADIksqKIhIu6W13M%3d",
    "isUsableByPlayer": true,
    "id": "47178948",
    "contentId": "fd412929-4a3f-49c0-b392-5521012f33fc"
  }, {
    "name": "Gauss Turret",
    "description": "Precision anti-tank coilgun.",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/gauss-turret-5f9a751679634bce91a77bf95c7e2d67.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fgauss-turret-5f9a751679634bce91a77bf95c7e2d67.png&width=332&hash=ty4y%2f1sEuT8eMQwX6cVXuZ3KL9bAHaf1A0LPabuLpzE%3d",
    "isUsableByPlayer": true,
    "id": "4233134183",
    "contentId": "cfa92e74-82be-4b25-a0cd-4f7a97f2bf8c"
  }, {
    "name": "ROCKET POD TURRET",
    "description": "Multirole missile launcher.",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/missile-rocket-turret-12e04f30fdbf4dc2b9a1f37a907f5234.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fmissile-rocket-turret-12e04f30fdbf4dc2b9a1f37a907f5234.png&width=332&hash=EuZSiblHWcj3CRx3LzuVo1Fw2jq9HnCS6NOTBPNYkgQ%3d",
    "isUsableByPlayer": true,
    "id": "2907783784",
    "contentId": "ec137dd1-82d1-4ef4-809a-f838420416c1"
  }, {
    "name": "Chaingun Turret",
    "description": "Rotary autocannon.",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/chaingun-turret-0cbad9f5d3a74313adba3d6faf43592e.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fchaingun-turret-0cbad9f5d3a74313adba3d6faf43592e.png&width=332&hash=P70p8qnHLXmbuf7tPzofDzeiIXYThkFjMB74JqyD0vk%3d",
    "isUsableByPlayer": true,
    "id": "2988661926",
    "contentId": "fc78a02f-5f48-4134-a5a8-a92e34d9142d"
  }, {
    "name": "Incineration Cannon",
    "description": "Heavy cannon that fires a powerful energy charge. Main charge spawns submunitions on impact.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/incineration-cannon-2caa0e0e074543c79c9ff8d0fe289752.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fincineration-cannon-2caa0e0e074543c79c9ff8d0fe289752.png&width=332&hash=8T1ASpOwRZxeUIlLWGn39KDYwvUNVEYdvHRpe1w%2blVw%3d",
    "isUsableByPlayer": true,
    "id": "4086418184",
    "contentId": "f26f8097-a383-4038-ba31-70de7b994c73"
  }, {
    "name": "Splinter Turret",
    "description": "Fires hardlight projectiles that break apart and detonate after impact.",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/splinter-turret-6a1cad04de8a49ea9370d6bf285f9b29.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsplinter-turret-6a1cad04de8a49ea9370d6bf285f9b29.png&width=332&hash=OR%2baWnYY76UZOtWm4BVXMYAPJQquCBFJDlRx47RxoEQ%3d",
    "isUsableByPlayer": true,
    "id": "1749823285",
    "contentId": "890bf973-addf-45a1-80c9-71fecc38f77f"
  }, {
    "name": "UNSC AUTO TURRET",
    "description": "UNSC Auto Turret deployable for campaign and warzone",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-turret-332x132-c3db09f21ee242589b5277004462d27e.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-turret-332x132-c3db09f21ee242589b5277004462d27e.png&width=332&hash=M89098C3LTFFiK9wiIUdjWSNxlXvoKTGlmRoBEmd6RU%3d",
    "isUsableByPlayer": false,
    "id": "2031824349",
    "contentId": "65289c8a-cc54-4503-b1aa-29938b20d436"
  }, {
    "name": "SCORPION ANTI INFANTRY TURRET",
    "description": "Scorpion Infantry Turret deployable for campaign and warzone",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/scorpion-turret-3acbd9d1a40d4f71ba4721b1ac1c230e.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fscorpion-turret-3acbd9d1a40d4f71ba4721b1ac1c230e.png&width=332&hash=Vv2qdYARoN%2bkGscXEQz1ntxVZ071UbMVmuVjK3b3xoI%3d",
    "isUsableByPlayer": true,
    "id": "244872079",
    "contentId": "b504ed6b-8335-477a-9834-42c90b4a2d88"
  }, {
    "name": "WRAITH ANTI INFANTRY TURRET",
    "description": "Wraith Infantry Turret deployable for campaign and warzone",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/wraith-turret-8c7f77f080f34ab9b5d97509485f9daf.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fwraith-turret-8c7f77f080f34ab9b5d97509485f9daf.png&width=332&hash=9F05IIx2%2ffu2ZBYgnsjpLkDp9HToePCOiCtdmwvYhMs%3d",
    "isUsableByPlayer": true,
    "id": "1701501807",
    "contentId": "c293d75e-4528-44fc-8be2-b3b101bff2bd"
  }, {
    "name": "Plasma Caster",
    "description": "Fires plasma bolts that can be bounced off terrain to reach targets behind cover. Bolts stick and will chain-detonate when fired using Smart-Link.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma-caster-8373c86c00cb4cffb36f29381d2f1025.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fplasma-caster-8373c86c00cb4cffb36f29381d2f1025.png&width=332&hash=FeGzpg78yr5g8uuwCPkC7ZkN2Wie%2f0la8NMDEbBl2VM%3d",
    "isUsableByPlayer": true,
    "id": "4054937266",
    "contentId": "006861b7-ca17-4032-a998-99ae1cb1fc4f"
  }, {
    "name": "FORERUNNER BEAM TURRET",
    "description": "Forerunner Beam Turret deployable for campaign and warzone",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-turret-332x132-c3db09f21ee242589b5277004462d27e.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-turret-332x132-c3db09f21ee242589b5277004462d27e.png&width=332&hash=M89098C3LTFFiK9wiIUdjWSNxlXvoKTGlmRoBEmd6RU%3d",
    "isUsableByPlayer": false,
    "id": "514985629",
    "contentId": "f3c11ff9-d960-481b-b733-e7994c001f0f"
  }, {
    "name": "SPIRIT CHIN GUN",
    "description": "Spirit Chin Gun deployable for campaign and warzone",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/spirit-chain-gun-1884effb163d43bb82b198fdd43dbe11.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fspirit-chain-gun-1884effb163d43bb82b198fdd43dbe11.png&width=332&hash=y%2bwojiZdKkre25hosAHW30JWNa87lzts9NruwwzEybs%3d",
    "isUsableByPlayer": false,
    "id": "1797509873",
    "contentId": "55ae77f4-3111-4d34-a1ae-ee82ef69f6cb"
  }, {
    "name": "Carbine",
    "description": "Carbine with Holoscope. Versatile semi-automatic rifle renowned for its accuracy and long range. New production models use a streamlined manufacturing process and reactive materials in place of radioisotopes for coating projectiles.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/covenant-carbine-30811039456f475f805eaa52762820b0.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fcovenant-carbine-30811039456f475f805eaa52762820b0.png&width=332&hash=Zin20muBr8qdP73e6MEp23Qwug0dAaImKkcxtX%2b1xgA%3d",
    "isUsableByPlayer": true,
    "id": "4108759423",
    "contentId": "a32d5b79-aa24-4897-8850-55ffc7450d6e"
  }, {
    "name": "PHANTOM CHIN GUN",
    "description": "Phantom Chin Gun deployable for campaign and warzone",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/phantom-chin-gun-a446b325e7494d29a8cabe7e693548da.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fphantom-chin-gun-a446b325e7494d29a8cabe7e693548da.png&width=332&hash=GszX%2ffGgOqVHYsp40W8g1IdLn6sxFh%2bbHtqrtcNs0aQ%3d",
    "isUsableByPlayer": false,
    "id": "3717288512",
    "contentId": "1b15c7be-a807-460a-987a-60037c346b9b"
  }, {
    "name": "LightRifle",
    "description": "Accurate and powerful, LightRifles were the standard-issue weapon of ancient Promethean warriors.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/light-rifle-0c9fc99241fc414a85d6e210fed36d04.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2flight-rifle-0c9fc99241fc414a85d6e210fed36d04.png&width=332&hash=tIJEZDRfA5lPq2QmM6Ql66UCCyNFECIxJXWqlSFDJLE%3d",
    "isUsableByPlayer": true,
    "id": "2511447508",
    "contentId": "59026c44-1498-4580-99ef-c45fad75bc12"
  }, {
    "name": "Storm Rifle",
    "description": "Rapid-fire plasma rifle effective out to medium range when Smart-Link is engaged. Sustained fire can temporarily overheat the weapon.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/covenant-storm-rifle-a440460289a54237832d39becaaf0046.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fcovenant-storm-rifle-a440460289a54237832d39becaaf0046.png&width=332&hash=BdfDk%2fhQyjjfC3cPrWYvadmKNtKU5fLlKyuj1QhlSRA%3d",
    "isUsableByPlayer": true,
    "id": "2133511419",
    "contentId": "611e61ad-5b14-4631-8eef-f8bb6a14b1f0"
  }, {
    "name": "Binary Rifle",
    "description": "Semi-automatic sniper energy rifle with variable-zoom 4x/9x optics. Use Smart-Link when engaging targets at long range.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/binary-rifle-79e0c4a1283641bda007e0d861ded31b.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fbinary-rifle-79e0c4a1283641bda007e0d861ded31b.png&width=332&hash=s0YVJm3ACjKC2uS31lvIGShLBOn9BXeLOxeskO0xeLA%3d",
    "isUsableByPlayer": true,
    "id": "2140505068",
    "contentId": "5130eeaa-d67e-4001-a548-20408dffe0d8"
  }, {
    "name": "Plasma Pistol",
    "description": "Semi-automatic energy pistol that fires packets of superheated plasma. Holding down the trigger, then releasing, will fire a tracking overcharge shot with an EMP effect that will disable vehicles and knock out shields.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma-pistol-1a65716f9b894b8496b501c69b4c05d9.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fplasma-pistol-1a65716f9b894b8496b501c69b4c05d9.png&width=332&hash=EXTEQAQlvspdmk0AJWHxJfJKVBhejMoyiZPWQjzN0Ro%3d",
    "isUsableByPlayer": true,
    "id": "524558978",
    "contentId": "c8dd731b-0766-4315-8ec0-8922f40cc101"
  }, {
    "name": "Scorpion",
    "description": "Main battle tank armed with a heavy cannon and pintle-mounted heavy machine gun. This new iteration of the storied Scorpion is half the mass of the old M808 yet has nearly identical firepower and armor protection.",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/scorpion-6c7fb074aa1c42549a765a294e78c3c7.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fscorpion-6c7fb074aa1c42549a765a294e78c3c7.png&width=332&hash=%2fCkx7J14PgzU9QjJ5ndSwhhMk0%2bTZa6nlpEndWfyTHc%3d",
    "isUsableByPlayer": true,
    "id": "1730553442",
    "contentId": "c7e2f6aa-b86c-4131-b5d7-71bb35fcd0c4"
  }, {
    "name": "Suppressor",
    "description": "Fully-automatic energy rifle effective at short range. Accuracy significantly improves when using Smart-Link.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/suppressor-5ee536381da34f48abb542a29a51a898.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsuppressor-5ee536381da34f48abb542a29a51a898.png&width=332&hash=wJMTrh6lL7uesgj0OU9W3Cene%2fInCVHLAd5ZUUMK5Lg%3d",
    "isUsableByPlayer": true,
    "id": "2681172411",
    "contentId": "fc839d35-d0e3-4234-b9ff-70c428d8cca7"
  }, {
    "name": "Phaeton",
    "description": null,
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/vtol-5c02f48bfdf246c0aab7f738687b5744.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fvtol-5c02f48bfdf246c0aab7f738687b5744.png&width=332&hash=p%2b56GNOiSUDlhjfn%2ffB2d457Le7Vdw752wer9fGX0Ts%3d",
    "isUsableByPlayer": true,
    "id": "3394982816",
    "contentId": "011cd325-c192-477c-8767-23b99546031d"
  }, {
    "name": "Boltshot",
    "description": "Burst-fire energy pistol. Bolts home-in on close range targets. This new functionality appears to be related to other adaptations the Prometheans have displayed since the disappearance of the Didact.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/boltshot-c9cdbdb343524915b1d80bc8b3047286.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fboltshot-c9cdbdb343524915b1d80bc8b3047286.png&width=332&hash=ufVTmfMPj5xIOpOyGMEn%2fV6Pa5Qb5%2b%2fb%2b520Px3XAX0%3d",
    "isUsableByPlayer": true,
    "id": "4153405209",
    "contentId": "4ead2f3c-c9ba-41d0-bf69-a3ac1d4b4e32"
  }, {
    "name": "Mantis",
    "description": "Combat walker armed with heavy machine gun and missile launcher. Missiles can lock-on to aerial targets. Melee unleashes a devastating stomp attack. Extended use of the heavy machine gun will cause it to overheat.",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/mantis-88bcd6e59a3d469aa380620309a5e8a5.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fmantis-88bcd6e59a3d469aa380620309a5e8a5.png&width=332&hash=bQ58hOrEtc%2b3XuXpGvrmzK31OhA5Ctt8mUlqXZ%2bMmRU%3d",
    "isUsableByPlayer": true,
    "id": "3227919741",
    "contentId": "71347094-6fdb-437a-862c-59db1b936aa6"
  }, {
    "name": "Banshee",
    "description": "Agile ground attack aircraft. Armed with rapid-fire plasma cannons and secondary fuel rod cannon. Can perform acrobatic rolls and loops or high-speed boosts.",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/banshee-9626ac8f343644f3a592a0b7d49faac6.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fbanshee-9626ac8f343644f3a592a0b7d49faac6.png&width=332&hash=%2bwTKTSuyqU6fPV%2f0JYmjU2YOh4SvpWEcKMVyHF7gL3U%3d",
    "isUsableByPlayer": true,
    "id": "419783896",
    "contentId": "91fafc39-ee57-4ae7-ad93-b36e6ac34561"
  }, {
    "name": "Wraith",
    "description": "Assault tank armed with a heavy plasma mortar and pintle-mounted plasma cannon. Can boost for quick sprints. The latest Wraith revisits an ancient Sangheili design that is easier to manufacture and less costly to lose.",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/wraith-bd8975a1a57348a2b8a2588e9a5040f1.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fwraith-bd8975a1a57348a2b8a2588e9a5040f1.png&width=332&hash=vr34Tpz64SEzQReJpo2bu0kn5bBSbyOGwpDwCXhzF0M%3d",
    "isUsableByPlayer": true,
    "id": "1206711506",
    "contentId": "c12685a5-956c-483b-8254-70765a23d863"
  }, {
    "name": "Warthog",
    "description": "Warthog armed reconnaissance configuration fitted with a rotary autocannon on a full-rotation turret mount. ",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/warthog-951f2406dea44d229662df881d89272e.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fwarthog-951f2406dea44d229662df881d89272e.png&width=332&hash=fgVOMTjIBBWxAMSe5%2bGu6VRwzTrdizeFN7F6YDNtbMw%3d",
    "isUsableByPlayer": true,
    "id": "4028516791",
    "contentId": "4dcc7ed4-6d15-4170-bad2-fdf28705fbae"
  }, {
    "name": "Assault Rifle",
    "description": "Assault Rifle with Projection Sight. Standard-issue fully-automatic rifle effective at short to medium range.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/assault-rifle-72bb6004e7804715935013ca745cadb9.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fassault-rifle-72bb6004e7804715935013ca745cadb9.png&width=332&hash=5aSvHLqf3tm3VL4EyZXk9WkfZAD%2fwaVy2T22GduWhqw%3d",
    "isUsableByPlayer": true,
    "id": "313138863",
    "contentId": "9f00429a-687a-4e0e-8690-cde5ba010bcf"
  }, {
    "name": "SMG",
    "description": "SMG with CQB Sight. Rapid fire submachine gun best suited for close-quarters combat while leveraging Smart-Link.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/smg-74d80a6bc14c4c64aa08db838e775db7.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsmg-74d80a6bc14c4c64aa08db838e775db7.png&width=332&hash=6Ikf%2fFGrIZ8eeJfpuA6Ti%2bn5cdzoFu66S4ctCjr3RZo%3d",
    "isUsableByPlayer": true,
    "id": "723388907",
    "contentId": "5d4f4df8-9684-40d8-9d25-a15481a1047f"
  }, {
    "name": "Scattershot",
    "description": "Short-range semi-automatic energy shotgun. Energy projectiles ricochet off hard surfaces and exhibit homing behavior.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/scattershot-7453d1d0f9a149dfb2649675322780cd.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fscattershot-7453d1d0f9a149dfb2649675322780cd.png&width=332&hash=cAtlmS3kBkUWiC8goxDP4DPNo%2f%2ffLsK2ojbQhNKQL6Y%3d",
    "isUsableByPlayer": true,
    "id": "3808094875",
    "contentId": "6e033e34-9ebe-4120-9abb-59c5d55159e0"
  }, {
    "name": "Ghost",
    "description": "Fast attack bike fitted with dual rapid-fire plasma cannons. Can boost for extra speed, at the expense of maneuverability.",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/ghost-3d8125d531f14b5499eb203bb6689c19.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fghost-3d8125d531f14b5499eb203bb6689c19.png&width=332&hash=8iIZszbCW4BymoY%2ftsU02sVjy9k1RPVcIR9WPhE%2bNLA%3d",
    "isUsableByPlayer": true,
    "id": "3010146366",
    "contentId": "d760ed2e-8b55-44c0-9b47-fc5c8d44910d"
  }, {
    "name": "Railgun",
    "description": "Powerful single-shot coilgun that requires a short charge cycle before firing. Will automatically fire if the charge is held for too long.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/railgun-ce34452629a74a0899a091f0f2e52f89.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2frailgun-ce34452629a74a0899a091f0f2e52f89.png&width=332&hash=eh%2b4lDppbLwobJ7CtqVzSGgfvCv7qVABYIqP%2fq3QMCs%3d",
    "isUsableByPlayer": true,
    "id": "3682788176",
    "contentId": "c5fe5ab1-6583-443f-abc6-4c513847fdd1"
  }, {
    "name": "Mongoose",
    "description": "Heavy-duty all-terrain quad bike. A passenger can be accommodated on the rear-facing seat. ",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/wargoose-6bfb5d0d8ff34c67ac7537dbecea9f59.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2fwargoose-6bfb5d0d8ff34c67ac7537dbecea9f59.png&width=332&hash=Alksbp7GujgkvJ5tsRpgWqCOoUqpeIvuRAY9Y9dFWRk%3d",
    "isUsableByPlayer": true,
    "id": "1063919886",
    "contentId": "f9b11bd7-7959-4639-94de-a9df329579a5"
  }, {
    "name": "Hydra Launcher",
    "description": "Portable mini-missile launcher. Use Smart-Link to lock-on to targets before firing.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/hydra-ae5ed76d25b048dd98ca20efd8818935.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fhydra-ae5ed76d25b048dd98ca20efd8818935.png&width=332&hash=Igp%2bCCVwYELH%2biLOj8nQjtUFtI0%2fb7WO7XQ96mvNiZk%3d",
    "isUsableByPlayer": true,
    "id": "1579758889",
    "contentId": "0dd40ad7-9120-4fdf-881a-ecda58fedff3"
  }, {
    "name": "Spartan Laser",
    "description": "Anti-vehicle laser. Requires a short warmup time before firing.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/spartan-laser-1dce3448ef73469ab8f9e2d38c9d531c.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fspartan-laser-1dce3448ef73469ab8f9e2d38c9d531c.png&width=332&hash=dmKMiRo6bmqIWsY%2btMFku6K4YsmlBhWyd2wQMGe8hsA%3d",
    "isUsableByPlayer": true,
    "id": "3885603197",
    "contentId": "7f28cc32-55a6-4bce-ae30-8703ac50f2e3"
  }, {
    "name": "Needler",
    "description": "Exotic weapon which fires shards that home in on short-range targets. If multiple shards strike a target they will detonate - creating a \"supercombine\" explosion. Will bounce off heavy armor, such as that used by vehicles and Hunters.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/needler-5690d414b19a4b2d83be15baaffa2fe9.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fneedler-5690d414b19a4b2d83be15baaffa2fe9.png&width=332&hash=N00LDPlPB5dg3BgRm%2fDef2bQs8MR0c4DJsEeAtIR5ck%3d",
    "isUsableByPlayer": true,
    "id": "2050745863",
    "contentId": "f6c599f2-2c86-447d-944d-fa604b17136a"
  }, {
    "name": "Shotgun",
    "description": "Short-ranged semi-automatic shotgun. Get up-close and personal to maximize damage.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/shotgun-35bca45ecb8440479bfbab9e075f4302.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fshotgun-35bca45ecb8440479bfbab9e075f4302.png&width=332&hash=aRRxaPLRsA9%2bxwd5%2fA43ghuA0p7jr3L9mX0TtUI8bIo%3d",
    "isUsableByPlayer": true,
    "id": "3484334713",
    "contentId": "39c25783-6a10-4b13-a586-546eae1c99bc"
  }, {
    "name": "SAW",
    "description": "Rapid-fire light machine gun with a large ammo capacity.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/saw-0f3ee44a215d4a57b6e578cd760a3fb0.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsaw-0f3ee44a215d4a57b6e578cd760a3fb0.png&width=332&hash=pfWvwfHvmhEmIgcc2SJ2hfon7EHNIAwJwECLlAayPps%3d",
    "isUsableByPlayer": true,
    "id": "2278207101",
    "contentId": "93970223-4c24-4c73-9ce0-af44299e529d"
  }, {
    "name": "Fuel Rod Cannon",
    "description": "Magazine-fed, shoulder-fired heavy weapon that fires explosive fuel rods. Modern fuel rod cannons are significantly more accurate than those used by the old Covenant; a refinement sourced from the multi-species workshops on Venezia.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/fuel-rod-cannon-041deffe5b6e4ca283e10b2d3cc734df.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2ffuel-rod-cannon-041deffe5b6e4ca283e10b2d3cc734df.png&width=332&hash=2V1VcxW79vt%2f8BddOjOIN3V2JKaXX%2bmHelsB%2bdEfO7k%3d",
    "isUsableByPlayer": true,
    "id": "2670072722",
    "contentId": "1e4a8790-77cd-4106-9047-5ba66053e4fc"
  }, {
    "name": "FRAG GRENADE",
    "description": "Frag grenade deployable for campaign",
    "type": "Grenade",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/frag-grenade-475ae914b9154a0fad1097e1bd93705c.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2ffrag-grenade-475ae914b9154a0fad1097e1bd93705c.png&width=332&hash=NoUz5nJ9pJWI4daAx%2b%2fGpb%2f1bxmeSqBBrZ0Q3Ue1rcE%3d",
    "isUsableByPlayer": true,
    "id": "4106030681",
    "contentId": "2355c403-e88b-4897-9698-e731cfdaf8d7"
  }, {
    "name": "Energy Sword",
    "description": "Deadly plasma-based melee weapon. Successful strikes deplete the sword's limited energy charge.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/energy-sword-2c1b6748e5bc4354b832d9369fe814bc.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fenergy-sword-2c1b6748e5bc4354b832d9369fe814bc.png&width=332&hash=91cKKp6Ay7GfyEHB4r8nRvzZplD7nl1mCLFx21HjJro%3d",
    "isUsableByPlayer": true,
    "id": "2650887244",
    "contentId": "d83e562a-5cef-4e86-8231-b1f5ee4e710b"
  }, {
    "name": "Beam Rifle",
    "description": "Long-range semi-automatic energy rifle with variable-zoom 4x/10x optics. Use Smart-Link to line up headshots for one-shot kills.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/beam-rifle-3a4d95cd93a94895a23b217d812f8c7d.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fbeam-rifle-3a4d95cd93a94895a23b217d812f8c7d.png&width=332&hash=oh4MRfkENVebE%2bbbqj2jIWI%2bnz1D0fPyGzkcXUf2%2b7k%3d",
    "isUsableByPlayer": true,
    "id": "2862629816",
    "contentId": "8d299779-5e9b-4273-aecf-b5727c62fcd7"
  }, {
    "name": "SPLINTER GRENADE",
    "description": "Splinter grenade deployable for campaign",
    "type": "Grenade",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/splinter-grenade-a3734115247e4709af0ab1f53a9c6a55.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsplinter-grenade-a3734115247e4709af0ab1f53a9c6a55.png&width=332&hash=h03UgF2mSwcB3o56FpX5%2bj3Q1N5dfjsCh17Ur%2bSOtw0%3d",
    "isUsableByPlayer": true,
    "id": "3190813201",
    "contentId": "4eb8f0d1-4c77-438b-9719-c450b3b875db"
  }, {
    "name": "DMR",
    "description": "DMR with Longshot Sight. Powerful and accurate semi-automatic rifle best used at mid to long-range.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/dmr-13a45fa2ad074b5cb70a0ef81f36f0e1.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fdmr-13a45fa2ad074b5cb70a0ef81f36f0e1.png&width=332&hash=WDK4RgJy%2blGjzyU1%2fCeHy5MjHgisKjGLvk0%2fZxFoj%2fE%3d",
    "isUsableByPlayer": true,
    "id": "523953283",
    "contentId": "71a5cf7d-c8f1-4ab5-8771-1854338bbb85"
  }, {
    "name": "PLASMA GRENADE",
    "description": "Plasma grenade deployable for campaign",
    "type": "Grenade",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma-grenade-e63ed2a67258459882ea3d73ca173237.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fplasma-grenade-e63ed2a67258459882ea3d73ca173237.png&width=332&hash=zhaeCiBVuRlstZfXhYcfmtur5N8W7r3HXnpMBMECvhA%3d",
    "isUsableByPlayer": true,
    "id": "2460880172",
    "contentId": "a1ede5b9-3819-42d3-a3b3-a276571547a2"
  }, {
    "name": "Sniper Rifle",
    "description": "Semi-automatic multi-role heavy rifle with variable-zoom 4x/9x optics. Best used at long range in conjunction with Smart-Link.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/sniper-rifle-b6d462a6c57d4297953d12e93e468053.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fsniper-rifle-b6d462a6c57d4297953d12e93e468053.png&width=332&hash=BiMAWO4c0GfjEiyp%2fYMyGApujlhorPHFr8tEr49q02Y%3d",
    "isUsableByPlayer": true,
    "id": "669296699",
    "contentId": "22cad0dc-8af0-44d2-8654-f80a0c231955"
  }, {
    "name": "Rocket Launcher",
    "description": "Shoulder-fired heavy weapon widely issued to UNSC Army, Marine Corps, and Spartan infantry to counter enemy vehicles and Promethean Knights. Can fire two missiles per magazine. Lock-on to air targets using Smart-Link before firing.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/rocket-launcher-fc1d373704564123ae76cf41de665d18.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2frocket-launcher-fc1d373704564123ae76cf41de665d18.png&width=332&hash=87HtwFUlzN7GoQu%2bEeySijltY9fM79i7XpN1B%2bPvvaw%3d",
    "isUsableByPlayer": true,
    "id": "723523180",
    "contentId": "f4aa9fab-fc38-4cbe-a777-0d6eab03bcc4"
  }, {
    "name": "Magnum",
    "description": "Magnum with Projection Sight. Standard-issue semi-automatic heavy pistol. Use Smart-Link and call your shots.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/magnum-d98e366992d4489bbb34e75e1ad7c2f6.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fmagnum-d98e366992d4489bbb34e75e1ad7c2f6.png&width=332&hash=T2cr3zTZxUhcD7EWVZMgThYlYG%2brBbbZd2z8rp2dMz0%3d",
    "isUsableByPlayer": true,
    "id": "4096745987",
    "contentId": "9cf1c3ce-bf33-4c20-b9ae-56de0f6f0652"
  }, {
    "name": "Battle Rifle",
    "description": "Battle Rifle with Recon Sight. Standard-issue burst-fire rifle that can excel at any engagement range.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/br-07be901f5fac4a68aeea3dac36decc06.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fbr-07be901f5fac4a68aeea3dac36decc06.png&width=332&hash=375YR8hAEtNlO6Vq7RPB6V56bdbd4ermo6n6UrrK2ss%3d",
    "isUsableByPlayer": true,
    "id": "424645655",
    "contentId": "9b2089b8-5652-465a-ad78-78a36761fcac"
  }, {
    "name": "SPNKr Rocket Launcher",
    "description": "Make some noise! Twin-tube shoulder-fired rocket launcher with Smart-Link sights. Rockets can lock-on to air targets.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/spnkr-25d0ddbcefd14a859bceef38875b28a3.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fspnkr-25d0ddbcefd14a859bceef38875b28a3.png&width=332&hash=YZndAuIi%2bqCqGGCvgHjNQSI1FEB5ZcW5946sExuvqSA%3d",
    "isUsableByPlayer": true,
    "id": "2902827823",
    "contentId": "e7d65a17-2517-458c-ac3f-1dd48405718e"
  }, {
    "name": "Halo 2 Battle Rifle",
    "description": "BR with Classic Sight. Reliable firepower never goes out of style. Battle Rifle with full-screen zoom.",
    "type": "Standard",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/halo-2-battle-rifle-967c07de6b78414eafa429be2eb7ab48.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fhalo-2-battle-rifle-967c07de6b78414eafa429be2eb7ab48.png&width=332&hash=B67pwYaY0I3WpJu5t2D11AD%2bpfb4Vqn3x41DZtJU3JY%3d",
    "isUsableByPlayer": true,
    "id": "4222743534",
    "contentId": "798a60dd-410a-4493-ba48-22e9dfd8ddff"
  }, {
    "name": "Ball",
    "description": null,
    "type": "Unknown",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/assault-ball-weapon-e1cffc1788c849d8938bf104fe55e07a.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fassault-ball-weapon-e1cffc1788c849d8938bf104fe55e07a.png&width=332&hash=XinxuuCPidF6%2fISNfNygk%2bm8Hp9%2b%2b9xAg8ZPCu9Pr1k%3d",
    "isUsableByPlayer": true,
    "id": "393532233",
    "contentId": "1e2acd11-6bbb-4f62-855b-21a8b84f5a7d"
  }, {
    "name": "Gravity Hammer",
    "description": "Brutally effective melee weapon that combines a hammer with repurposed gravitic impellers on the striking face. Each smash unleashes a damaging area-of-effect pulse with knockback. Regular melee attacks are weaker, but do not consume energy.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/gravity-hammer-07ce6812c81c4c67a6dd68dbb7456355.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fgravity-hammer-07ce6812c81c4c67a6dd68dbb7456355.png&width=332&hash=AflzYP165PLTA%2fVLKmehUKYhO7vCycNsO2GNox7ZM24%3d",
    "isUsableByPlayer": true,
    "id": "2899979324",
    "contentId": "91cefab6-7af6-4fec-8543-f8efd4908c21"
  }, {
    "name": "Halo One Pistol",
    "description": null,
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/magnum-h1-42d7453086fa48ba897bd99f8f7cab8f.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fmagnum-h1-42d7453086fa48ba897bd99f8f7cab8f.png&width=332&hash=GJ5%2fNOKvONYcodHWSK510eVm5lmK7CW92O2Nrvg0ZZE%3d",
    "isUsableByPlayer": true,
    "id": "2758094302",
    "contentId": "459e3484-e687-4867-88dc-01331973e0aa"
  }, {
    "name": "Brute Plasma Rifle",
    "description": "Newly manufactured Brute Plasma Rifles continue to appear in the hands of mercenaries and raiders, though their source is unknown.  All Brute Plasma Rifles are capable of unleashing a devastating fusillade of plasma bolts between emergency cooling breaks.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma_rifle-b1c39105c2b341ba9a21fb8602b51a58.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fplasma_rifle-b1c39105c2b341ba9a21fb8602b51a58.png&width=332&hash=cISQme4MQ1V8E9e%2f0NTgE5RlWbjDrjfPUN6tJFwI8%2bQ%3d",
    "isUsableByPlayer": true,
    "id": "2015271382",
    "contentId": "eedf40c7-8fa6-4c8c-89d6-cffab3381711"
  }, {
    "name": "Retro Beam Rifle",
    "description": "The T-50 Beam Rifle is a Covenant long-range directed-energy weapon used by raiders, snipers, and scout-executors. Long-range semi-automatic energy rifle with variable-zoom optics. Use Smart-Link to line up headshots for one-shot kills.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/beam_rifle_h2_default__542x305-75cb58f18b774b1286714d2843dd4e79.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fbeam_rifle_h2_default__542x305-75cb58f18b774b1286714d2843dd4e79.png&width=332&hash=pJXZIBPNlKtG8Re1%2f9YZEj4R5ub%2fBa9xPFd%2fckmoXIY%3d",
    "isUsableByPlayer": true,
    "id": "907086443",
    "contentId": "c1028797-dff7-4f5b-bc9b-2c0f43374ca7"
  }, {
    "name": "Wasp",
    "description": "The AV-49 Wasp supplements existing stocks of AV-14 and AV-22 aircraft in Marine service. Close air support VTOL armed with heavy machine guns and twin rocket launchers.",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/vehicles/linked_wasp_default_542x305-383ceb295f764556ba15dd3d4daaa03c.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fvehicles%2flinked_wasp_default_542x305-383ceb295f764556ba15dd3d4daaa03c.png&width=332&hash=eNyCWjHbTDW56FJ9igozd197kql%2bc86xUiY142%2fd9O0%3d",
    "isUsableByPlayer": true,
    "id": "3207900961",
    "contentId": "104e4c82-b93c-4540-aae7-37ad3a8a9807"
  }, {
    "name": "Hunter Arm Turret",
    "description": "The Lekgolo that remain in this stolen limb retain a feral vestige of their once-expansive composite mind. The Wicked Grasp fires bursts of tracking plasma shots.",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/hunter_arm-bbaad2f06c914a10815e2ce5c5cfdbd7.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fhunter_arm-bbaad2f06c914a10815e2ce5c5cfdbd7.png&width=332&hash=g1DxaQfgZFeily0WUlfWHL2yi3s6yvrJX35EvqS8plU%3d",
    "isUsableByPlayer": true,
    "id": "1351500565",
    "contentId": "6779263c-57a9-49b3-9048-43a12706e4d4"
  }, {
    "name": "Plasma Turret",
    "description": "Rapid-fire plasma cannon.",
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/tools-of-destruction/weapons/plasma_turret-aec66472854145ca9124130353ba2dd2.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2ftools-of-destruction%2fweapons%2fplasma_turret-aec66472854145ca9124130353ba2dd2.png&width=332&hash=fQWbpv7LS1G%2btAXqp30E49g3wsexYg8IMFCbvSVm8XY%3d",
    "isUsableByPlayer": true,
    "id": "2023669721",
    "contentId": "ccab2aea-c7e9-4acf-baf7-916cf01b7c16"
  }, {
    "name": "Jorge's Chaingun",
    "description": null,
    "type": "Turret",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-turret-332x132-c3db09f21ee242589b5277004462d27e.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-turret-332x132-c3db09f21ee242589b5277004462d27e.png&width=332&hash=M89098C3LTFFiK9wiIUdjWSNxlXvoKTGlmRoBEmd6RU%3d",
    "isUsableByPlayer": true,
    "id": "1364188648",
    "contentId": "8ff7b779-b30f-48ea-b366-2c44b56f0f48"
  }, {
    "name": "Golf Club",
    "description": "409331533",
    "type": "Unknown",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-weapon-332x132-5e66c8cb2a2045ee8c0b15c0cb1f7944.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-weapon-332x132-5e66c8cb2a2045ee8c0b15c0cb1f7944.png&width=332&hash=B%2fQedDpaFRR6mNigEL1GT9CrU5j8lKSIYZsoepqa2gk%3d",
    "isUsableByPlayer": true,
    "id": "409331533",
    "contentId": "71e5512e-a151-492f-afe8-aef88045b9c7"
  }, {
    "name": "Reach Grenade Launcher",
    "description": "M319's are single shot, break-action grenade launchers that can fire a variety of 40mm rounds. Hold trigger for alternate fuse: release trigger to manually detonate with EMP effect. The grenade can be bounced to reach around cover.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/Requisition/Generated/objects/multi/warzone/requisition/reqs/consumables/power_weapons/reach_grenade_launcher/reach_grenade_launcher_large-72cd406204db4d82b037928edf50cecb.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fRequisition%2fGenerated%2fobjects%2fmulti%2fwarzone%2frequisition%2freqs%2fconsumables%2fpower_weapons%2freach_grenade_launcher%2freach_grenade_launcher_large-72cd406204db4d82b037928edf50cecb.png&width=332&hash=NN9c%2fFnVo6AlbPNnL5DmxP%2fuMwHh%2bo0O9vOVSy70tPo%3d",
    "isUsableByPlayer": true,
    "id": "1390323522",
    "contentId": "b0d9a560-1254-41f5-aa28-8dc0395c48c5"
  }, {
    "name": "Sentinel Beam",
    "description": "Fired in semi-automatic mode, or the trigger can be held down to charge and then release multiple plasma grenades in quick succession.",
    "type": "Power",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/Requisition/Generated/objects/multi/warzone/requisition/reqs/consumables/power_weapons/sentinel_beam/sentinel_beam_large-27b225987ed345c09e69daa5739561d4.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fRequisition%2fGenerated%2fobjects%2fmulti%2fwarzone%2frequisition%2freqs%2fconsumables%2fpower_weapons%2fsentinel_beam%2fsentinel_beam_large-27b225987ed345c09e69daa5739561d4.png&width=332&hash=9WAhg0QOoTD9cHO3tm3tvIgU4MRWMsuGmZn%2bAX8Vha4%3d",
    "isUsableByPlayer": true,
    "id": "3143603656",
    "contentId": "517154cc-c9aa-4c1a-8da5-e535c21a1727"
  }, {
    "name": "PHANTOM",
    "description": "Phantom deployable for campaign and warzone",
    "type": "Vehicle",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-weapon-332x132-5e66c8cb2a2045ee8c0b15c0cb1f7944.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-weapon-332x132-5e66c8cb2a2045ee8c0b15c0cb1f7944.png&width=332&hash=B%2fQedDpaFRR6mNigEL1GT9CrU5j8lKSIYZsoepqa2gk%3d",
    "isUsableByPlayer": false,
    "id": "1977724336",
    "contentId": "54d2716c-b420-4a40-9e93-6636b221177b"
  }, {
    "name": "Grunt Mech",
    "description": null,
    "type": "Unknown",
    "largeIconImageUrl": "https://content.halocdn.com/media/Default/games/halo-5-guardians/default-images/default-weapon-332x132-5e66c8cb2a2045ee8c0b15c0cb1f7944.png",
    "smallIconImageUrl": "https://image.halocdn.com:443/?path=https%3a%2f%2fcontent.halocdn.com%2fmedia%2fDefault%2fgames%2fhalo-5-guardians%2fdefault-images%2fdefault-weapon-332x132-5e66c8cb2a2045ee8c0b15c0cb1f7944.png&width=332&hash=B%2fQedDpaFRR6mNigEL1GT9CrU5j8lKSIYZsoepqa2gk%3d",
    "isUsableByPlayer": false,
    "id": "1102617398",
    "contentId": "3056d7a5-325a-4e12-8f52-29ef4e607736"
  }]
 

  // useEffect(() => {
  //   request.get('https://www.haloapi.com/metadata/h5/metadata/weapons', {}).then((res) => {
  //     setList(res.data.results)
  //   })
  // }, [])
  
  return (
    // console.log(key)
    <div>
     <img src={weapons.key.largeIconImageUrl} alt={weapons.key.name} />
     <h2>{weapons.key.name}</h2>
     <p>{weapons.key.description}</p>
    </div>
  );
}

export default Weapon;