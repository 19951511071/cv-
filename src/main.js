let html  = document.querySelector("#html");
let style = document.querySelector("#style")
let string =  ` /*你好我是一名前端新人 
*接下来
*首先我要演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
  width:200px;
  height:200px;
  border:1px solid red;
} 
/*接下来我要把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
**/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳形成的
*一黑一白
**/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神奇的魔丸 
**/
#div1:before{
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    top:0;
    background:#000;
    position:absolute;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1:after{
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    bottom:0;
    background:#fff;
    position:absolute;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`  ; 
let string2 =``;  //初始化string2 
//string = string.replace(/\n/g,"<br>")  正则换行     
console.log(string.length)
let n = 0;
html.innerHTML = string.substring(0,n);
let step = ()=>{
    setTimeout(()=>{
        //string2加空格
        //string照搬string里面的内容
        if(string[n]==='\n'){
            string2+="<br>"
        }else if(string[n]===" "){
            string2 += "&nbsp";
        }else{
            string2+=string[n]
        }
        html.innerHTML  =string2 ;
        style.innerHTML =string.substring(0,n);
        window.scrollTo(0,999999);
        html.scrollTo(0,999999);
        console.log(n)
            if(n<string.length-1){
                n=n+1;
                step(); 
            }
    },50)
}
step();
        
        
       
        
            
       
       
        

