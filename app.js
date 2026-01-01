


// COUNTERS
const counters=document.querySelectorAll('[data-count]');
const speed=80;
counters.forEach(counter=>{
    const updateCount=()=>{
        const target=+counter.getAttribute('data-count');
        const count=+counter.innerText;
        const increment=target/speed;
        if(count<target){
            counter.innerText=Math.ceil(count+increment);
            setTimeout(updateCount,30)
        }else{counter.innerText=target}}
    updateCount()
})

// MODAL POPUPS
function openModal(title,desc,images){
    document.getElementById('modalTitle').innerText=title;
    document.getElementById('modalDesc').innerText=desc;
    const gallery=document.getElementById('modalGallery');
    gallery.innerHTML='';
    images.forEach(img=>{gallery.innerHTML+=`<img src="${img}">`});
    document.getElementById('portfolioModal').style.display='block';
}
document.querySelector('.close').onclick=()=>{document.getElementById('portfolioModal').style.display='none'}

// SERVICE REQUEST FORM
document.getElementById('serviceForm').addEventListener('submit',e=>{
    e.preventDefault();
    const payload={
        name:e.target[0].value,
        email:e.target[1].value,
        service:e.target[2].value,
        message:e.target[3].value
    };
    console.log("API Payload:",payload);
    alert("Request submitted successfully!");
    e.target.reset();
})







let services=JSON.parse(localStorage.getItem('services'))||[];
function renderServices(){
    const list=document.getElementById('serviceList');
    list.innerHTML='';
    services.forEach((s,i)=>{
        list.innerHTML+=`<li>${s.name} <button onclick="removeService(${i})">❌</button></li>`
    });
    localStorage.setItem('services',JSON.stringify(services));
}
function addService(){
    const name=document.getElementById('serviceName').value;
    const desc=document.getElementById('serviceDesc').value;
    if(!name||!desc){alert('Please fill both fields');return;}
    services.push({name,desc});
    renderServices();
    document.getElementById('serviceName').value='';
    document.getElementById('serviceDesc').value='';
}
function removeService(index){services.splice(index,1);renderServices();}
renderServices();
