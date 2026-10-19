(() => {
"use strict";

console.log("MoreCrafts FINAL SAFE + CREDITS");

// =====================================================
// MODEL CREDITS
// =====================================================

const MORECRAFTS_CREDITS = [
    {
        model: "C-17",
        author: "manilov.ap",
        source: "https://skfb.ly/YQsV",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "DC-10",
        author: "manilov.ap",
        source: "https://skfb.ly/YRnB",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "F-4 Phantom II",
        author: "manilov.ap",
        source: "https://skfb.ly/YRWL",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "C-130J Super Hercules",
        author: "b4_cobra",
        source: "https://skfb.ly/pIRSw",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "F-104 Starfighter",
        author: "Mikhail_Zelenov",
        source: "https://skfb.ly/ovIRP",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "Tu-154",
        author: "Shawn 684 M",
        source: "https://skfb.ly/ooJYC",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "SH-60B Seahawk Helicopter",
        author: "Muhamad Mirza Arrafi",
        source: "https://skfb.ly/p96qS",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "Boeing 727",
        author: "Marine",
        source: "https://skfb.ly/ppFKo",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "Airbus ZeroE",
        author: "dannzjs",
        source: "https://skfb.ly/oLorX",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "Su-57",
        author: "Collaro_Show",
        source: "https://skfb.ly/prsPF",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "SR-72 Darkstar",
        author: "Cem Gürbüz",
        source: "https://skfb.ly/oJUTR",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "B-52 Stratofortress",
        author: "bohmerang",
        source: "https://skfb.ly/oLo8p",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "An-124",
        author: "manilov.ap",
        source: "https://skfb.ly/YJOW",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
        model: "U-2 Dragonlady - Free",
        author: "bohmerang",
        source: "https://skfb.ly/pysq6",
        license: "CC BY-NC-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    },
    {
        model: "B-1 Lancer",
        author: "manilov.ap",
        source: "https://skfb.ly/YMyE",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    }
];

// =====================================================
// AIRCRAFT DATA
// =====================================================

const MORECRAFTS = [
{
    name: "C17 globe master",
    base: 3179,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/c17.glb",
    rotation: [0,0,210],
    position: [5,5,0],
    scale: [1,1,1]
},
{
    name: "F104 star fighter",
    base: 5229,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/f104.glb",
    rotation: [0,0,270],
    position: [0,2.5,0],
    scale: [4.5,4.5,4.5]
},
{
    name: "U2",
    base: 2556,
    glb: "https://raw.githubusercontent.com/supermanone-boop/models/main/u-2_dragonlady_-_free.glb",
    rotation: [0,0,270],
    position: [0,0,0],
    scale: [1.5,1.5,1.5]
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
    rotation: [7,0,210],
    position: [-1,-0.67,-1.51],
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
// CREDIT MATCHING
// =====================================================

const CREDIT_ALIASES = {
    "C17 globe master": "C-17",
    "F104 star fighter": "F-104 Starfighter",
    "U2": "U-2 Dragonlady - Free",
    "SH60B": "SH-60B Seahawk Helicopter",
    "Antonov an-124": "An-124",
    "McDonnell Douglas F-4 Phantom II": "F-4 Phantom II",
    "Sukhoi Su-57": "Su-57",
    "McDonnell Douglas DC-10": "DC-10",
    "Tupolev Tu-154": "Tu-154",
    "Boeing 727": "Boeing 727",
    "B-52 Stratofortress": "B-52 Stratofortress",
    "B-1 Lancer": "B-1 Lancer",
    "SR-72 Darkstar": "SR-72 Darkstar",
    "Airbus ZERO-E": "Airbus ZeroE"
};

function getCredit(name) {
    const title = CREDIT_ALIASES[name];
    return MORECRAFTS_CREDITS.find(c => c.model === title) || null;
}

// =====================================================
// STATE
// =====================================================

window.morecraftsEnabled = false;

// =====================================================
// LOAD HOOK
// =====================================================

const originalLoad = geofs.aircraft.instance.load;

geofs.aircraft.instance.load = function(id, t, a, o) {
    const isMoreCrafts = MORECRAFTS.some(x => x.base == id);

    if (!isMoreCrafts) {
        window.morecraftsEnabled = false;

        if (window.morecraftsHideInterval) {
            clearInterval(window.morecraftsHideInterval);
            window.morecraftsHideInterval = null;
        }
    }

    return originalLoad.call(this, id, t, a, o);
};

// =====================================================
// WAIT FOR UI
// =====================================================

const wait = setInterval(() => {
    const aircraftButton = document.querySelector(
        'button[data-toggle-panel=".geofs-aircraft-list"]'
    );

    if (!aircraftButton) return;

    clearInterval(wait);

    // =================================================
    // BUTTON
    // =================================================

    const btn = aircraftButton.cloneNode(true);
    btn.textContent = "MoreCrafts";
    btn.setAttribute(
        "data-toggle-panel",
        ".geofs-morecrafts-list"
    );

    aircraftButton.parentNode.insertBefore(btn, aircraftButton);

    // =================================================
    // PANEL
    // =================================================

    const panel = document.createElement("ul");

    panel.className =
        "geofs-list geofs-morecrafts-list geofs-toggle-panel";

    panel.innerHTML = `
        <div style="
            padding:12px 20px;
            border-bottom:1px solid rgba(128,128,128,.35);
        ">
            <h4 style="margin:0 0 10px 0;">MoreCrafts</h4>

            <details>
                <summary style="cursor:pointer;">
                    Model Credits & Licenses
                </summary>

                <div style="
                    margin-top:10px;
                    font-size:12px;
                    line-height:1.65;
                    white-space:normal;
                ">
                    ${MORECRAFTS_CREDITS.map(c => `
                        <div style="
                            margin-bottom:12px;
                            overflow-wrap:anywhere;
                        ">
                            <strong>${c.model}</strong><br>
                            Author: ${c.author}<br>
                            Source:
                            <a href="${c.source}"
                               target="_blank"
                               rel="noopener noreferrer">
                                Sketchfab model
                            </a><br>
                            License:
                            <a href="${c.licenseUrl}"
                               target="_blank"
                               rel="noopener noreferrer">
                                ${c.license}
                            </a>
                        </div>
                    `).join("")}

                    <p style="font-size:11px;">
                        Model-to-file correspondence has not been independently
                        verified. Please consult the original model pages for
                        attribution and license terms.
                    </p>
                </div>
            </details>
        </div>
    `;

    const aircraftPanel = document.querySelector(".geofs-aircraft-list");

    if (!aircraftPanel || !aircraftPanel.parentNode) {
        console.error("[MoreCrafts] Aircraft panel not found");
        return;
    }

    aircraftPanel.parentNode.insertBefore(
        panel,
        aircraftPanel.nextSibling
    );

    // =================================================
    // BUILD AIRCRAFT LIST
    // =================================================

    MORECRAFTS.forEach(item => {
        const li = document.createElement("li");

        li.textContent = item.name;
        li.dataset.base = item.base;
        li.style.cursor = "pointer";

        const credit = getCredit(item.name);

        li.title = credit
            ? "Model by " + credit.author
            : "Credit not matched";

        panel.appendChild(li);
    });

    // =================================================
    // CLICK / LOAD
    // =================================================

    panel.addEventListener("click", e => {
        const li = e.target.closest("li");

        if (!li || !panel.contains(li)) return;

        // Ignore clicks inside the credits header.
        if (!li.dataset.base) return;

        const aircraft = MORECRAFTS.find(
            a => a.base == li.dataset.base
        );

        if (!aircraft) return;

        window.morecraftsEnabled = true;

        ui.notification.show("Loading " + aircraft.name);

        // Load the native base aircraft.
        geofs.aircraft.instance.load(aircraft.base);

        // Wait for the native aircraft to initialize.
        setTimeout(() => {
            try {
                const ac = geofs.aircraft.instance;

                if (window.morecraftsHideInterval) {
                    clearInterval(window.morecraftsHideInterval);
                    window.morecraftsHideInterval = null;
                }

                // =========================================
                // HIDE NATIVE MODEL
                // =========================================

                function hideNative() {
                    if (!window.morecraftsEnabled) return;

                    try {
                        const root = ac.parts?.root;

                        if (!root) return;

                        if (root.object3d) {
                            root.object3d.visible = false;
                        }

                        if (root.object3d?._model) {
                            root.object3d._model.show = false;
                        }
                    } catch (err) {
                        console.warn("[MoreCrafts] Hide error:", err);
                    }
                }

                hideNative();

                window.morecraftsHideInterval = setInterval(
                    hideNative,
                    300
                );

                // =========================================
                // ADD CUSTOM GLB
                // =========================================

                const partName = "morecrafts_" + Date.now();

                window.morecraftsPart = partName;

                ac.addParts([
                    {
                        name: partName,
                        model: aircraft.glb,
                        rotation: aircraft.rotation,
                        position: aircraft.position,
                        scale: aircraft.scale
                    }
                ]);

                const credit = getCredit(aircraft.name);

                ui.notification.show(
                    aircraft.name + " loaded" +
                    (credit ? " | Model: " + credit.author : "")
                );

                console.log("[MoreCrafts] Added:", aircraft.name);
                console.log("[MoreCrafts] GLB:", aircraft.glb);
                console.log("[MoreCrafts] Credit:", credit || "Not matched");

            } catch (err) {
                console.error("[MoreCrafts] Load error:", err);
                ui.notification.show("MoreCrafts Error");
            }
        }, 2500);
    });

    // =================================================
    // MATERIAL DESIGN UPGRADE
    // =================================================

    if (window.componentHandler) {
        window.componentHandler.upgradeDom();
    }

    console.log("[MoreCrafts] UI ready");
}, 500);

})();