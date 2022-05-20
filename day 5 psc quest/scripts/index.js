

document.getElementById("student_form").addEventListener("submit",myfunc)


var studentArr=JSON.parse(localStorage.getItem("student"))||[]


function myfunc(){
    event.preventDefault()

    var name=document.getElementById("name").value;
    var course=document.getElementById("course").value;
    var unit=document.getElementById("unit").value;
    var image=document.getElementById("image").value;
    var batch=document.getElementById("batch").value;
    

    function student(name,course,unit,image,batch){
        this.name=name;
        this.course=course;
        this.unit=unit;
        this.image=image;
        this.batch=batch;
    }

    var student1=new student(name,course,unit,image,batch)

    studentArr.push(student1);
    console.log(studentArr)
    localStorage.setItem("student",JSON.stringify(studentArr))
    window.location.href="display.html"
}