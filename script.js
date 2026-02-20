function copyNumber(num){
  navigator.clipboard.writeText(num);
  alert("Copied: " + num);
}

// SOS flash
const sos = document.getElementById("sosBtn");
if (sos) {
  sos.onclick = () => {
    setInterval(() => {
      document.body.style.background =
        document.body.style.background === "red" ? "#0f0f0f" : "red";
    }, 300);
  };
}

// Shelter data
const shelters = {
  "Thiruvananthapuram": ["Central School Camp","Neyyattinkara Camp"],
  "Kollam": ["Town Hall Camp"],
  "Ernakulam": ["Kalamassery Hall"]
};

const select = document.getElementById("districtSelect");

if(select){
  for(let d in shelters){
    let opt = document.createElement("option");
    opt.textContent = d;
    select.appendChild(opt);
  }

  select.addEventListener("change", ()=>{
    const list = document.getElementById("shelterList");
    list.innerHTML="";
    shelters[select.value].forEach(place=>{
      let li=document.createElement("li");
      li.textContent=place;
      list.appendChild(li);
    });
  });
}