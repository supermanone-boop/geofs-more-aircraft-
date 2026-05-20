(() => {

'use strict';

console.log("MoreCrafts FINAL WORKING");

// =====================================================
// DATA
// =====================================================

const MORECRAFTS = [

{
    name: "Boeing 727",
    base: 2843,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/boeing727.glb",
    rotation: [0,0,270],
    position: [0,0,-1.67],
    scale: [0.7,0.7,0.7]
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

ui.notification.show(
"Loading " + aircraft.name
);

console.log(
"[MoreCrafts] loading:",
aircraft.name
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

if (
window.morecraftsPart &&
ac.parts?.[window.morecraftsPart]
) {

try {

delete ac.parts[
window.morecraftsPart
];

} catch(e) {}

}

// =====================================================
// HIDE NATIVE
// =====================================================

function hideNative() {

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
// ADD GLB
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

console.log(
"[MoreCrafts] added:",
aircraft.name
);

ui.notification.show(
aircraft.name + " loaded"
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
