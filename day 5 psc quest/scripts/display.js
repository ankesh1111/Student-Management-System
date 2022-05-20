

var data=JSON.parse(localStorage.getItem("student"))

data.map(function(ele,index){

    var div=document.createElement("div");
    
    var name=document.createElement("p");
    name.innerText=ele.name;

    var course=document.createElement("p")
    course.innerText=ele.course;

    var unit=document.createElement("p");
    unit.innerText=ele.unit;

    var image=document.createElement("img")
    image.src=ele.image;

    var batch=document.createElement("p");
    batch.innerText=ele.batch;

    var btn=document.createElement("button");
    btn.innerText="Delete";
    btn.addEventListener("click",function(){

        data.splice(index,1)
        localStorage.setItem("student",JSON.stringify(data));
        div.remove()
    });
    div.append(image,name,course,unit,batch,btn);
    document.getElementById("student_data").append(div);

})