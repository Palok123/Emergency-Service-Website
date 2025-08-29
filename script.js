function getById(id){
    const element = document.getElementById(id);
    return element;
}
function addHistory(id){
  
  const serviceName = getById(id).parentElement.parentElement.children[1];
  const servicePhnNo =  getById(id).parentElement.parentElement.children[3];
    const div = document.createElement('div');
    div.innerHTML = `
     <div class="flex justify-between items-center bg-[#d9d9d971] mt-3 p-3 rounded-lg">
                        <div>
                            <h2 class="text-[18px] text-[#494949] font-semibold">${serviceName.innerText}</h2>
                            <p class="text-gray-500">${servicePhnNo.innerText}</p>
                        </div>
                        <div>
                            <p class="text-[#494949] ">${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
    `
    const historyElement = getById('history').appendChild(div);

}

// heart button functionality
const hearts = document.getElementsByClassName('fa-heart');
for(const heart of hearts){
    heart.addEventListener('click',function(){
        const hearCount = parseInt(document.getElementById('hert-cnt').innerText);
        const currentHeartCount = hearCount + 1;
        document.getElementById('hert-cnt').innerText = currentHeartCount;
    })
}

//  call button functionality
// emergency service  
getById('emergency-btn').addEventListener('click',function(){

    let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
     availAbleCoin = availAbleCoin - 20;
    getById('call-coin').innerText = availAbleCoin;  
    alert('📞 Calling to national emergency 999');
    addHistory('emergency-btn');
    
})
// police service
getById('police-service-btn').addEventListener('click',function(){
    let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
      availAbleCoin = availAbleCoin - 20;
      getById('call-coin').innerText = availAbleCoin;
   
     alert('📞 Calling to  police 999');
     addHistory('police-service-btn');
})
// fire service 
getById('fire-service-btn').addEventListener('click',function(){
   let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
      availAbleCoin = availAbleCoin - 20;
      getById('call-coin').innerText = availAbleCoin;
   
    alert('📞 Calling to fire service 999');
    addHistory('fire-service-btn');
})
//  ambulance service
getById('ambulance-btn').addEventListener('click',function(){
    let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
      availAbleCoin = availAbleCoin - 20;
      getById('call-coin').innerText = availAbleCoin;
    
    alert('📞 Calling to Ambulance 1994-999999');
    addHistory('ambulance-btn');
})
// woman and child service
getById('woman-child-btn').addEventListener('click',function(){
    let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
      availAbleCoin = availAbleCoin - 20;
      getById('call-coin').innerText = availAbleCoin;
    
    alert('📞 Calling to Women & Child Helpline 109');
    addHistory('woman-child-btn');
})
// anti corporation service
 getById('Anti-Corruption-btn').addEventListener('click',function(){
    let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
      availAbleCoin = availAbleCoin - 20;
      getById('call-coin').innerText = availAbleCoin;
    
    alert('📞 Calling to Anti-Corruption 106');
    addHistory('Anti-Corruption-btn');
 })
 // Electricity service
 getById('electricity-btn').addEventListener('click',function(){
    let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
      availAbleCoin = availAbleCoin - 20;
      getById('call-coin').innerText = availAbleCoin;
    
    alert('📞 Calling to Electricity Helpline 16216');
    addHistory('electricity-btn');
 })
 // Brac service
 getById('brac-help-btn').addEventListener('click',function(){
    let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
      availAbleCoin = availAbleCoin - 20;
      getById('call-coin').innerText = availAbleCoin;
    
    alert('📞 Calling to Brac Helpline 16445'); 
    addHistory('brac-help-btn');
 })
 // bangladesh railway service
 getById('railway-service-btn').addEventListener('click',function(){
    let availAbleCoin = parseInt(getById('call-coin').innerText);
    if(availAbleCoin < 20)
     {
        alert('You have not enough coin to call you need atlest 20 coin to call');
        return;
     }
    availAbleCoin = availAbleCoin - 20;
    getById('call-coin').innerText = availAbleCoin;
    alert('📞 Calling to Bangladesh Railway Helpline 163');
    addHistory('railway-service-btn');
 })

