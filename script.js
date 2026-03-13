const words=["Full Stack Developer","Tech Enthusiast"];
let i=0,j=0,current="",deleting=false;

function type(){
    current=words[i];
    if(!deleting){
        document.getElementById("typing").innerHTML=current.substring(0,j++);
        if(j>current.length){
            deleting=true;
            setTimeout(type,1000);
            return;
        }
    }else{
        document.getElementById("typing").innerHTML=current.substring(0,j--);
        if(j==0){
            deleting=false;
            i++;
            if(i==words.length) i=0;
        }
    }
    setTimeout(type,100);
}
window.onload=type;