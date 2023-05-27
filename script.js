const fileInput = document.querySelector("input")

const downloadBtn = document.querySelector("button")


downloadBtn.addEventListener('click',e =>{
    // e.preventDefault();
   fetchFile(fileInput.value)
   downloadBtn.innerText = "Downloading file"
})

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file)
        let aTag = document.createElement("a")
        aTag.href = tempUrl
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        URL.revokeObjectURL(tempUrl) //
        downloadBtn.innerText = "Download file"
        // console.log(file)
    }).catch(() => {
        downloadBtn.innerText = "Download file";
        alert("Error downloading")
    })
}