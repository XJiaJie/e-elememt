export function getHome(){
    var ajax =new XMLHttpRequest();
    ajax.open('GET','post.json');
    ajax.send()
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4&&ajax.status==200){
           console.log(ajax.response);
        }
    }
}

