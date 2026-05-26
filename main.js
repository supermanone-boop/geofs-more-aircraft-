(() => {

'use strict';

console.log("MoreCrafts FINAL SAFE");

// =====================================================
// DATA
// =====================================================


// DATA をこれに置き換え

const MORECRAFTS = [

{
    name: "U2",
    base: 2556,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/u-2_dragonlady_-_free.glb",
    rotation: [0,0,270],
    position: [0,0,0],
    scale: [1,1,1]
},
{
    name: "SH60B",
    base: 9,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/sh-60b_seahawk_helicopter.glb",
    rotation: [0,0,270],
    position: [0,0,-1.5],
    scale: [0.01,0.01,0.01]
},
{
    name: "Airbus a300-600st Beluga",
    base: 3180,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/beluga.glb",
    rotation: [0,0,0],
    position: [0,0,-3],
    scale: [1,1,1]
},
{
    name: "Antonov an-124",
    base: 5527,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/an124.glb",
    rotation: [0,0,270],
    position: [0,0,0.8],
    scale: [0.75,0.75,0.75]
},
{
    name: "McDonnell Douglas F-4 Phantom II",
    base: 3617,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/F4.glb",
    rotation: [5,0,210],
    position: [-1,0,-1.51],
    scale: [0.85,0.85,0.85]
},

{
    name: "Sukhoi Su-57",
    base: 18,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/su57.glb",
    rotation: [0,0,270],
    position: [0,0,-0.8],
    scale: [0.5,0.5,0.5]
},

{
    name: "McDonnell Douglas DC-10",
    base: 3292,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/dc10.glb",
    rotation: [0,0,215],
    position: [0,0,0],
    scale: [0.85,0.85,0.85]
},

{
    name: "Tupolev Tu-154",
    base: 3011,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/tu154.glb",
    rotation: [0,0,180],
    position: [0,0,-5],
    scale: [0.86,0.86,0.86]
},

{
    name: "Boeing 727",
    base: 2843,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/boeing727.glb",
    rotation: [0,0,180],
    position: [0,0,-3.5],
    scale: [0.45,0.45,0.45]
},

{
    name: "B-52 Stratofortress",
    base: 4745,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/boeing_b-52_stratofortress.glb",
    rotation: [0,0,90],
    position: [0,0,0],
    scale: [1,1,1]
},

{
    name: "B-1 Lancer",
    base: 20,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/b-1_lancer_final_version.glb",
    rotation: [0,0,90],
    position: [0,0,-2],
    scale: [1,1,1]
},

{
    name: "SR-72 Darkstar",
    base: 2364,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/lockheed_martin_sr72_darkstar__topgun_maverick.glb",
    rotation: [0,0,270],
    position: [0,0,0],
    scale: [4,4,4]
},

{
    name: "Airbus ZERO-E",
    base: 10,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/Airbus_ZeroE.glb",
    rotation: [0,0,270],
    position: [0,0,-100],
    scale: [0.1,0.1,0.1]
}

];

// =====================================================
// STATE
// =====================================================

window.morecraftsEnabled = false;

// =====================================================
// LOAD HOOK
// =====================================================

const originalLoad =
geofs.aircraft.instance.load;

geofs.aircraft.instance.load =
function(id, t, a, o) {

const isMoreCrafts =
MORECRAFTS.some(
x => x.base == id
);

if (!isMoreCrafts) {

window.morecraftsEnabled = false;

if (window.morecraftsHideInterval) {

clearInterval(
window.morecraftsHideInterval
);

}

}

return originalLoad.call(
this,
id,
t,
a,
o
);

};

// =====================================================
// WAIT UI
// =====================================================

const wait = setInterval(() => {

const aircraftButton =
document.querySelector(
'button[data-toggle-panel=".geofs-aircraft-list"]'
);

if (!aircraftButton) return;

clearInterval(wait);

// =====================================================
// BUTTON
// =====================================================

const btn =
aircraftButton.cloneNode(true);

btn.textContent = "MoreCrafts";

btn.setAttribute(
"data-toggle-panel",
".geofs-morecrafts-list"
);

aircraftButton.parentNode.insertBefore(
btn,
aircraftButton
);

// =====================================================
// PANEL
// =====================================================

const panel =
document.createElement("ul");

panel.className =
"geofs-list geofs-morecrafts-list geofs-toggle-panel";

panel.innerHTML = `
<div style="
display:flex;
align-items:center;
gap:10px;
padding-left:20px;
">
<h4 style="margin:0;">
MoreCrafts
</h4>
</div>
`;

const aircraftPanel =
document.querySelector(".geofs-aircraft-list");

aircraftPanel.parentNode.insertBefore(
panel,
aircraftPanel.nextSibling
);

// =====================================================
// BUILD LIST
// =====================================================

MORECRAFTS.forEach(item => {

const li =
document.createElement("li");

li.textContent =
item.name;

li.dataset.base =
item.base;

panel.appendChild(li);

});

// =====================================================
// CLICK
// =====================================================

panel.addEventListener("click", e => {

const li =
e.target.closest("li");

if (!li) return;

const aircraft =
MORECRAFTS.find(
a => a.base == li.dataset.base
);

if (!aircraft) return;

window.morecraftsEnabled = true;

ui.notification.show(
"Loading " + aircraft.name
);

// =====================================================
// LOAD BASE
// =====================================================

geofs.aircraft.instance.load(
aircraft.base
);

// =====================================================
// WAIT LOAD
// =====================================================

setTimeout(() => {

try {

const ac =
geofs.aircraft.instance;

// =====================================================
// CLEAR OLD
// =====================================================

if (window.morecraftsHideInterval) {

clearInterval(
window.morecraftsHideInterval
);

}

// =====================================================
// HIDE FUNCTION
// =====================================================

function hideNative() {

if (!window.morecraftsEnabled) {
return;
}

try {

const root =
ac.parts?.root;

if (!root) return;

if (root.object3d) {
root.object3d.visible = false;
}

if (root.object3d?._model) {
root.object3d._model.show = false;
}

} catch(e) {

console.log(e);

}

}

// first hide
hideNative();

// camera/view protection
window.morecraftsHideInterval =
setInterval(
hideNative,
300
);

// =====================================================
// ADD CUSTOM GLB
// =====================================================

const partName =
"morecrafts_" +
Date.now();

window.morecraftsPart =
partName;

ac.addParts([

{
name: partName,

model: aircraft.glb,

rotation: aircraft.rotation,

position: aircraft.position,

scale: aircraft.scale

}

]);

ui.notification.show(
aircraft.name + " loaded"
);

console.log(
"[MoreCrafts] added:",
aircraft.name
);

} catch(err) {

console.log(err);

ui.notification.show(
"MoreCrafts Error"
);

}

}, 2500);

});

// =====================================================
// MDL
// =====================================================

if (window.componentHandler) {
componentHandler.upgradeDom();
}

}, 500);

})();