function decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function cssCopy() {
    let copyText = document.getElementById("css-code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function load() {

    let preview_text = document.getElementById('text');
    let text_input = document.getElementById('text-input');
    let html_span = document.getElementById('html-span');
    text_input.addEventListener('input', () => {
        html_span.innerHTML = '&lt;span class="header-text"&gt;' + text_input.value + '&lt;/span&gt';
        preview_text.innerHTML = text_input.value;
    });


    let font_size = document.getElementById('font-size');
    let font_size_input = document.getElementById('font-size-input');
    font_size_input.addEventListener('input', () => {
        font_size.innerHTML = font_size_input.value + "px";
        document.getElementById("css-font-size").innerHTML = "font-size: " + font_size_input.value + "px;<br>";
        preview_text.style.fontSize = font_size_input.value + "px";
    });

    let fontFamily = document.querySelector("#font-family-checkbox");
    let fontList = document.querySelector("#font-families-list");
    fontFamily.addEventListener('change', () => {
        fontList.disabled = fontFamily.checked ? false : true;
        if (fontList.disabled) {
            document.getElementById("css-font-family").innerHTML = "";
            document.getElementById("css-font-family").style.marginLeft = "0";
        } else {
            document.getElementById("css-font-family").innerHTML = "font-family: " + fontList.value + ";<br>";
            document.getElementById("css-font-family").style.marginLeft = "2em";
        }
    });

    fontList.addEventListener('change', () => {
        if (fontFamily.checked) {
            document.getElementById("css-font-family").innerHTML = "font-family: " + fontList.value + ";<br>";
            document.getElementById("text").style.fontFamily = fontList.value;
        }
    });

    let colorPicker = document.querySelector("#text-color-picker");
    let customColorPicker = document.getElementById('custom-color-picker');
    let c_input = document.getElementById('text-color-input');
    
    c_input.addEventListener('input', () => {
        colorPicker.value = c_input.value;
        customColorPicker.style.backgroundColor = c_input.value;
        preview_text.style.color = c_input.value;
    });
    
    colorPicker.addEventListener('input', (event) => {
        customColorPicker.style.backgroundColor = event.target.value
        c_input.value = event.target.value;
        document.getElementById("css-color").innerHTML = "color: " + c_input.value + ";<br>";
        preview_text.style.color = c_input.value;
    });

    let textShadow = document.querySelector('#text-shadow-checkbox');
    let shadowColorPicker = document.querySelector("#shadow-color-picker");
    let customShadowColorPicker = document.getElementById('custom-shadow-color-picker');
    let hs_input = document.getElementById("hs-input");
    let vs_input = document.getElementById("vs-input");
    let blur_input = document.getElementById("blur-input");
    let sc_input = document.getElementById("shadow-color-input");
    let s_opacity_input = document.getElementById('opacity-input');
    textShadow.addEventListener('change', () => {
        let s_input = document.getElementById('text-shadow-ui');
        s_input.style.display = textShadow.checked ? "block" : "none";
        document.getElementById('css-text-shadow').style.display = textShadow.checked ? "inline" : "none";
        shadowUpdate();
    });

    hs_input.addEventListener('input', () => {
        shadowUpdate();
    });
    
    vs_input.addEventListener('input', () => {
        shadowUpdate();
    });

    blur_input.addEventListener('input', () => {
        shadowUpdate();
    });

    sc_input.addEventListener('input', () => {
        shadowUpdate();
    });

    s_opacity_input.addEventListener('input', () => {
        shadowUpdate();
    });

    shadowColorPicker.addEventListener('input', (event) => {
        let s_colorInput = document.getElementById('shadow-color-input');
        customShadowColorPicker.style.backgroundColor = event.target.value
        s_colorInput.value = event.target.value;
        shadowUpdate();
    });

    function shadowUpdate() {
        if (textShadow.checked) {
            let hs_value = hs_input.value;
            let vs_value = vs_input.value;
            let blur_value = blur_input.value;
            let sc_value = sc_input.value;
            let s_opacity_value = s_opacity_input.value;
            let hex_opacity_value = decimalToHex(Math.ceil((255 / 100) * s_opacity_value), 2);
    
            shadowColorPicker.value = sc_value;
            customShadowColorPicker.style.backgroundColor = sc_value;
    
            document.getElementById("hs-value").innerHTML = hs_value + "px";
            document.getElementById("vs-value").innerHTML = vs_value + "px";
            document.getElementById("blur-value").innerHTML = blur_value + "px";
            document.getElementById("opacity-value").innerHTML = s_opacity_value + "%";
    
            document.getElementById("css-text-shadow").innerHTML = "text-shadow: " + sc_value + hex_opacity_value + " " + hs_value + "px " + vs_value + "px " + blur_value + "px;<br>";
            text.style.textShadow = sc_value + hex_opacity_value + " " + hs_value + "px " + vs_value + "px " + blur_value + "px";
        } else {
            document.getElementById("css-text-shadow").innerHTML = "";
            text.style.textShadow = null;
        }
    }

    let decoration = document.querySelector("#text-decoration-checkbox");
    let overline = document.querySelector("#overline-checkbox");
    let underline = document.querySelector("#underline-checkbox");
    let lineThrough = document.querySelector("#line-through");
    decoration.addEventListener('change', () => {
        let d_input = document.getElementById('text-decoration-input');
        d_input.style.display = decoration.checked ? "inline" : "none";
        if (!decoration.checked) {
            document.getElementById("css-text-decoration").innerHTML = "text-decoration: none;<br>";
            text.style.textDecoration = "none";
        }
    });
    
    overline.addEventListener('change', () => {
        decorate();
    });
    
    underline.addEventListener('change', () => {
        decorate();
    });

    lineThrough.addEventListener('change', () => {
        decorate();
    });

    function decorate() {
        let dec_style = "";
        if (underline.checked) {
            dec_style += overline.checked ? "underline " : "underline";
        }
        if (overline.checked) {
            dec_style += "overline";
        }
        if (lineThrough.checked) {
            dec_style += overline.checked || underline.checked ? " line-through" : "line-through";
        }
        if (dec_style == "") {
              dec_style = "none";
         }
        document.getElementById("css-text-decoration").innerHTML = "text-decoration: " + dec_style + ";<br>";
        text.style.textDecoration = dec_style;
    }


    let previewBg = document.querySelector('#preview-bg');
    let customPreviewBg = document.getElementById('custom-preview-bg');
    let previewBox = document.getElementById('preview-box');
    previewBg.addEventListener('input', (event) => {
        customPreviewBg.style.backgroundColor = event.target.value;
        previewBox.style.backgroundColor = event.target.value;
    });
}

window.onload = load;