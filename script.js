

const hearts = document.getElementsByClassName('fa-heart');
for(const heart of hearts){
    heart.addEventListener('click',function(){
        const hearCount = parseInt(document.getElementById('hert-cnt').innerText);
        const currentHeartCount = hearCount + 1;
        document.getElementById('hert-cnt').innerText = currentHeartCount;
    })
}




