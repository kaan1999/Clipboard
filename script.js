let ctext = document.getElementById("ctext")
function cb_copy(){
    let copyText = document.getElementById("input-ctext")
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
    ctext.innerText = "Metin Panoya Kopyalandı"
}
async function cb_paste(){
    const text = await navigator.clipboard.readText();
    ctext.innerText = text
}
function cb_clear(){
    ctext.innerText = "..."
}