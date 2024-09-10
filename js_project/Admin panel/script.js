let cat=document.getElementById("catin");


let catobj=[]
const addcat=()=>{
    let data= JSON.parse(localStorage.getItem("catdata"));
    let catid=document.getElementById("catid");
    let count= data!==null?data.length+1:1
    if (catid.value!='') {
        let updata=data.map((i)=>{
            if (i.catid==catid.value) {
                i.catname=cat.value
               
            }
            return i;
        })
        catobj=updata;
    } else {
        catobj.push(
            {
                catid: count,
                catname:cat.value,
               
            }
        )
    }
     
    localStorage.setItem("catdata",JSON.stringify(catobj))
    cat.value='';
   dis()
    
}
let dis=()=>{
    let data= JSON.parse(localStorage.getItem("catdata"));
    let tr = '';

    if (data!=null) {
        data.map((i)=>{
            tr+=`<tr>
                <td>${i.catid}</td>
                <td>${i.catname}</td>
             
                <td><button onclick="edit(${i.catid})">Edit</button><br><button onclick="del(${i.catid})">Delete</button></td>
                </tr>`
        })  
        document.getElementById("datatag").innerHTML = tr;

    }
    
    
}
const del=(catid)=>{
    let data= JSON.parse(localStorage.getItem("catdata"));
    // console.log(no);
    
    let deldata=data.filter((i)=>{
        return i.catid!=catid;
    })
    let j=1;
    let arr=deldata.map((i)=>{
        i.catid=j++;
        return i;
    })
    localStorage.setItem("catdata", JSON.stringify(arr))
    dis()
}
dis()

const edit=(catid)=>{
    let data= JSON.parse(localStorage.getItem("catdata"));

    let editdata =data.find((i)=>{
          
       return i.catid==catid
    })    
    
    
    cat.value= editdata.catname;
   
    document.getElementById("catid").value=no;    
  


}