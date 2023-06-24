var total="",display="",check=0,memory=0;


function buttonclick(val){
    
    
    
    if (/[0]/.test(val)){
        if(display=="0"){
            val="";
        }

        if (memory !=0) {
            document.getElementById("dummy").value=total;
        }
        memory=0;
        total+=val;
        display+=val;
        document.getElementById("screen").value=display;


    } else if (/[1-9]/.test(val)){
        if(display=="0"){
            display="";
            total = total.slice(0, -1)
        }
        
            if (memory !=0) {
                document.getElementById("dummy").value=total;
            }
            memory=0;
            total+=val;
            display+=val;
            document.getElementById("screen").value=display;
            document.getElementById("dummy").value=total;


    }else if(/[+/*%-]/.test(val)) {
        if (memory != 0){
            total=memory;
        memory=0;
        }
        var last;
        
        last=total.charAt(total.length-1)
        if(/[+/*%-]/.test(last)) {
            total = total.slice(0, -1) + val;
            if (/%/.test(val)){

            }
        }else{
            total=total+val;

        }
        display="";
        document.getElementById("dummy").value=total
        document.getElementById("screen").value=""
        check=0;
        
    }else if(/./.test(val)){
        check++;
        
        if(check<=1) {
            
            total=total+val;
            display=display+val;
        }
        
        document.getElementById("screen").value=display;
        document.getElementById("dummy").value=total;
    }
    

}

function clearScreen(){
    document.getElementById("screen").value=""
    document.getElementById("dummy").value=""
    total="";
    display=""
}
function equalTo(){
        var last;
        last=total.charAt(total.length-1)
        if(/[+/*-]/.test(last)) {
            total = total.slice(0, -1);
            document.getElementById("dummy").value=total;
            total=total.replace(/%/,"/100*");
    
            
            var result=eval(total);
            memory=result.toString();
            document.getElementById("screen").value=result;
            total="";
            display="";
        }else{
            document.getElementById("dummy").value=total;
            total=total.replace(/%/,"/100*");
            
            
            var result=eval(total);
            memory=result.toString();
            document.getElementById("screen").value=result;
            total="";
            display="";
        }
}
function clearScreen2(){
    total=total.substring(0, total.length-1);
    display=display.substring(0, display.length-1);
    document.getElementById("screen").value=display;
    document.getElementById("dummy").value=total;
}