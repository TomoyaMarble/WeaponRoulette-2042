function ramdom_up() {
    const weapons_M_2042 = ["PBX-45", "PP-29", "MP9", "K30", "AC9", "M5A3", "AM40", "AK-24", "SFAR-M GL", "AC-42", "RM68", "GEW-46", "LCMG", "アバンシーズ", "PKP-BP", "RPT-31", "DM7", "SVK", "VCAR", "BSV-M", "SWS-10", "DXR-1", "NTW-50", "XCE Bar", "MCS-880", "GVT 45-70", "12M オート", "ゴーストメーカーR10", "Rorsch Mk-4", "NVK-S22"];
    const weapons_M_vault = ["AKS-74U", "PP-2000", "M16A3", "ACW-R", "A-91", "M416", "MTAR-21", "AEK-971", "M60E4", "XM8 LMG", "M240B", "Type 88 LMG", "M39 EMR", "RPK-74M", "SVD", "GOL スナイパーマグナム"];
    const weapons_S_2042 = ["G57", "MP28", "M44", "PF51", "NVK-P125", "Super 500", "BFP.50"];
    const weapons_S_vault = ["M1911", "MP412 REX", "M93R", "MP443"];
    const gadgets_A = ["スモークランチャー", "IBA装甲板", "C5爆薬", "M18 クレイモア", "SPHエクスプローシブ・ランチャー"];
    const gadgets_E = ["対戦車地雷", "無反動M5", "FXM-33対空ミサイル", "C5爆薬", "FGM-148 ジャベリン", "EODボット", "RPG-7V2"];
    const gadgets_S = ["弾薬箱", "医療箱", "スモークランチャー", "M18 クレイモア"];
    const gadgets_R = ["T-UGS", "トレーサーダーツガン", "C5爆薬", "近接センサー"];
    const throwable = ["破片手榴弾", "発煙弾", "EMPグレネード", "焼夷グレネード", "コンカッショングレネード", "スローイングナイフ", "対戦車爆弾", "小型手榴弾", "スプリンググレネード"];
    const text = document.getElementById("ywi");
    const sel = document.getElementById("mode-select");
    let random = 0;
    switch(sel.value){
        case "wm":
            const weapons_M = weapons_M_2042.concat(weapons_M_vault);
            random = parseInt(Math.random() * weapons_M.length);
            document.getElementById('ywi').textContent = weapons_M[random];
            break;
        case "wm_2042":
            random = parseInt(Math.random() * weapons_M_2042.length);
            document.getElementById('ywi').textContent = weapons_M_2042[random];
            break;
        case "wm_vault":
            random = parseInt(Math.random() * weapons_M_vault.length);
            document.getElementById('ywi').textContent = weapons_M_vault[random];
            break;
        case "ws":
            const weapons_S = weapons_S_2042.concat(weapons_S_vault);
            random = parseInt(Math.random() * weapons_S.length);
            document.getElementById('ywi').textContent = weapons_S[random];
            break;
        case "ws_2042":
            random = parseInt(Math.random() * weapons_S_2042.length);
            document.getElementById('ywi').textContent = weapons_S_2042[random];
            break;
        case "ws_vault":
            random = parseInt(Math.random() * weapons_S_vault.length);
            document.getElementById('ywi').textContent = weapons_S_vault[random];
            break;
        case "ag":
            random = parseInt(Math.random() * gadgets_A.length);
            document.getElementById('ywi').textContent = gadgets_A[random];
            break;
        case "eg":
            random = parseInt(Math.random() * gadgets_E.length);
            document.getElementById('ywi').textContent = gadgets_E[random];
            break;
        case "sg":
            random = parseInt(Math.random() * gadgets_S.length);
            document.getElementById('ywi').textContent = gadgets_S[random];
            break;
        case "rg":
            random = parseInt(Math.random() * gadgets_R.length);
            document.getElementById('ywi').textContent = gadgets_R[random];
            break;
        case "s":
            random = parseInt(Math.random() * throwable.length);
            document.getElementById('ywi').textContent = throwable[random];
            break;
        default:
    }
}