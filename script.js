document.addEventListener("DOMContentLoaded" ,function(){
    document.querySelector(".search-select")
    .addEventListener("change",function(){
    if (this.value !== ""){
        window.location.href = this.value;
    }
})
})

