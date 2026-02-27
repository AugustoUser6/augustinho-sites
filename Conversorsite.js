 function converter() {
        const km = document.getElementById("km").value;
        
        const m = km*1000;

        document.getElementById('metro').value = m;

 }

function converter2(){
        const m = document.getElementById("metro").value;
        const km=m/1000;
        document.getElementById("km").value = km;
}