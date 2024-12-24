const avatars = [
    { name: "90s Sports Car", code: "TKRQ-K433-2N22" },
    { name: "Space Racer", code: "NJE4-D8XE-KMTT" },
    { name: "Adventure Girl", code: "262Q-F5F2-JA95" },
    { name: "2000s Sports Car", code: "HTC3-CJAX-GX5K" },
    { name: "Skeleton", code: "TTLT-JFJQ-XHK2" },
    { name: "Space Ninja", code: "GLBH-N8A6-89KJ" },
    { name: "Viking Girl", code: "K23G-P29H-T54L" },
    { name: "Cyber Pizza", code: "PT2B-2E8M-HFH2" },
    { name: "Warrior with Sword", code: "CTML-8GN6-8P24" },
    { name: "Old School Samurai", code: "NGB4-LF4L-N2J4" },
    { name: "Karaoke Star", code: "INGX-ALQ5-P43G" },
    { name: "Golem", code: "QAGC-4BP9-Q7N7" },
    { name: "Horror Spider", code: "6DQ9-F969-ME4J" },
    { name: "Treasure", code: "RPXF-B95N-DG5F" },
    { name: "CuteRobo", code: "NG4X-MLCB-6KN2" },
    { name: "ElectricSuper Hero", code: "FE29-C5HF-9Q95" },
    { name: "Neon Plus", code: "94FF-M3RM-MTB5" },
    { name: "Pirate", code: "M5H8-NXGN-6B2T" },
    { name: "Friendly Settler", code: "9AB5-HK9B-A2NE" },
    { name: "Giraffe", code: "9PM5-B7FP-E9L8" },
    { name: "Ice Dragon", code: "TP59-LNKQ-A6JP" },
    { name: "Horror Lantern", code: "4MRG-8K3A-BBL7" },
    { name: "Unicorn", code: "EX27-XRFF-DPGD" },
    { name: "Space Explorer", code: "QKMA-CMET-862Q" },
    { name: "Cute Monster", code: "FMGX-65C4-QRMP" },
    { name: "Biker", code: "G2JD-JMNR-HPAC" },
    { name: "Clever Fox", code: "85CJ-GX64-9QGH" },
    { name: "Sniper", code: "47QB-MXRN-ML83" },
    { name: "Santa Claus", code: "LH7D-BA4R-LJQD" },
    { name: "Wizard", code: "5XCL-4HRC-KFXT" }
];

const avatarList = document.querySelector('.avatar-list');
avatars.forEach(avatar => {
    const item = document.createElement('div');
    item.className = 'avatar-item';

    const name = document.createElement('span');
    name.textContent = avatar.name;
    item.appendChild(name);

    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.onclick = () => copyCode(avatar.code);
    item.appendChild(button);

    avatarList.appendChild(item);
});

function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert(`Code "${code}" copied to clipboard!`);
    }).catch(err => {
        alert('Failed to copy code: ' + err);
    });
}
