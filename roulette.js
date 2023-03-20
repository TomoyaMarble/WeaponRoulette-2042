function ramdom_up() {
    const weapons = ["PBX-45", "PP-29", "MP9", "K30", "AC9", "M5A3", "AM40", "AK-24", "SFAR-M GL", "AC-42", "RM68", "LCMG", "アバンシーズ", "PKP-BP", "RPT-31", "DM7", "SVK", "VCAR", "BSV-M", "SWS-10", "DXR-1", "NTW-50", "MCS-880", "GVT 45-70", "12M オート", "ゴーストメーカーR10", "Rorsch Mk-4", "NVK-S22"];
    const text = document.getElementById("ywi");
    let random = parseInt(Math.random() * weapons.length);
    document.getElementById('ywi').textContent = weapons[random];
}