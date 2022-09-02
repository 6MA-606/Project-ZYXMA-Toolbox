function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function cssCopy() {
    var copyText = document.getElementById("css-code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function startUp() {

    fontFamily = document.querySelector("#font-family-checkbox");
    fontList = document.querySelector("#font-families-list");
    cssOutput = document.getElementById("css-output");
    fontFamily.addEventListener('change', () => {
        fontList.disabled = fontFamily.checked ? false : true;
        if (fontList.disabled) {
            document.getElementById("css-font-family").innerHTML = "";
        } else {
            document.getElementById("css-font-family").innerHTML = "font-family: " + fontList.value + ";<br>";
        }
    });

    fontList.addEventListener('change', () => {
        if (fontFamily.checked) {
            document.getElementById("css-font-family").innerHTML = "font-family: " + fontList.value + ";<br>";
            document.getElementById("text").style.fontFamily = fontList.value;
        }
    });

    colorPicker = document.querySelector("#text-color-picker");
    customColorPicker = document.getElementById('custom-color-picker');
    colorPicker.addEventListener('input', (event) => {
        let cinput = document.getElementById('text-color-input');
        customColorPicker.style.backgroundColor = event.target.value
        cinput.value = event.target.value;
        textUpdate();
    });

    textShadow = document.querySelector('#text-shadow-checkbox');
    textShadow.addEventListener('change', () => {
        let s_input = document.getElementById('text-shadow-ui');
        s_input.style.display = textShadow.checked ? "block" : "none";
        document.getElementById('css-text-shadow').style.display = textShadow.checked ? "inline" : "none";
        textUpdate();
    });

    shadowColorPicker = document.querySelector("#shadow-color-picker");
    customShadowColorPicker = document.getElementById('custom-shadow-color-picker');
    shadowColorPicker.addEventListener('input', (event) => {
        let s_colorInput = document.getElementById('shadow-color-input');
        customShadowColorPicker.style.backgroundColor = event.target.value
        s_colorInput.value = event.target.value;
        textUpdate();
    });

    decoration = document.querySelector("#text-decoration-checkbox");
    decoration.addEventListener('change', () => {
        let d_input = document.getElementById('text-decoration-input');
        d_input.style.display = decoration.checked ? "inline" : "none";
        textUpdate();
    });

    overline = document.querySelector("#overline-checkbox");
    overline.addEventListener('change', () => {
        textUpdate();
    });

    underline = document.querySelector("#underline-checkbox");
    underline.addEventListener('change', () => {
        textUpdate();
    });

    lineThrough = document.querySelector("#line-through");
    lineThrough.addEventListener('change', () => {
        textUpdate();
    });

    previewBg = document.querySelector('#preview-bg');
    customPreviewBg = document.getElementById('custom-preview-bg');
    previewBox = document.getElementById('preview-box');
    previewBg.addEventListener('input', (event) => {
        customPreviewBg.style.backgroundColor = event.target.value;
        previewBox.style.backgroundColor = event.target.value;
    });

    textUpdate();
}
function textUpdate() {
    let fsize = document.getElementById('font-size');
    let text = document.getElementById('text');
    let fsinput = document.getElementById('font-size-input').value;
    let tinput = document.getElementById('text-input').value;
    let cinput = document.getElementById('text-color-input').value;
    let html_span = document.getElementById('html-span');

    fsize.innerHTML = text.style.fontSize;
    html_span.innerHTML = '&lt;span class="header-text"&gt;' + tinput + '&lt;/span&gt';
    text.innerHTML = tinput;
    text.style.fontSize = fsinput + "px";
    text.style.color = cinput;

    colorPicker.value = cinput;
    customColorPicker.style.backgroundColor = cinput;

    document.getElementById("css-font-size").innerHTML = "font-size: " + fsinput + "px;<br>";
    document.getElementById("css-color").innerHTML = "color: " + cinput + ";<br>";
    if (textShadow.checked) {
        let hs_value = document.getElementById("hs-input").value;
        let vs_value = document.getElementById("vs-input").value;
        let blur_radius = document.getElementById("blur-input").value;
        let sc_input = document.getElementById("shadow-color-input").value;
        let s_opacity = document.getElementById('opacity-input').value;
        let hex_opacity = decimalToHex(Math.ceil((255 / 100) * s_opacity), 2);

        shadowColorPicker.value = sc_input;
        customShadowColorPicker.style.backgroundColor = sc_input;

        document.getElementById("hs-value").innerHTML = hs_value + "px";
        document.getElementById("vs-value").innerHTML = vs_value + "px";
        document.getElementById("blur-value").innerHTML = blur_radius + "px";
        document.getElementById("opacity-value").innerHTML = s_opacity + "%";

        document.getElementById("css-text-shadow").innerHTML = "text-shadow: " + sc_input + hex_opacity + " " + hs_value + "px " + vs_value + "px " + blur_radius + "px;<br>";
        text.style.textShadow = sc_input + hex_opacity + " " + hs_value + "px " + vs_value + "px " + blur_radius + "px";
    } else {
        document.getElementById("css-text-shadow").innerHTML = "";
        text.style.textShadow = null;
    }
    if (decoration.checked == false) {
        document.getElementById("css-text-decoration").innerHTML = "text-decoration: none;<br>";
        text.style.textDecoration = "none";
    } else {
        let dec_style = "";
        if (underline.checked == true) {
            dec_style += overline.checked ? "underline " : "underline";
        }
        if (overline.checked == true) {
            dec_style += "overline";
        }
        if (lineThrough.checked == true) {
            dec_style += overline.checked || underline.checked ? " line-through" : "line-through";
        }
        if (dec_style == "") {
            dec_style = "none";
        }
        document.getElementById("css-text-decoration").innerHTML = "text-decoration: " + dec_style + ";<br>";
        text.style.textDecoration = dec_style;
    }
}
window.onload = startUp;