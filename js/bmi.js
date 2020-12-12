function calculate(){
    var gender = document.getElementsByName('gender').value;
    var weight= document.getElementById('weight').value;
    var choice= document.getElementById('choice').value;
    var cm = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var act = document.getElementById('activity').value;
    if (weight == "" ||  cm == "" || age == "") {
        alert("Please enter all values");                     /* If any of the field is missed out, it alerts the user */
    }
    else{
        var m = cm * 0.01;
        var cal,BMR;
        
        if(choice=="Pounds"){                                  /* Converts pounds to kg  and calculates bmi Value*/                 
            var weight = weight * 0.453592;
            var bmiValue = (weight / (m * m)).toFixed(2);         
        }
        else{
            var bmiValue = (weight / (m * m)).toFixed(2);
        }

        if (bmiValue < 18.5) {                                 /* Feedback based on BMI Value*/
            var comment= "You are underweight.";
        }
        else if (bmiValue >=18.5 && bmiValue <= 24.9) {
            var comment = "You're BMI is normal but a little workout never hurt anybody!";
        }
        else if (bmiValue >= 25 && bmiValue <= 29.9) {
            var comment = "You are overweight.";
        }
        else {
            var comment = "You are obese. It's an alarming health situation.";
        }
                
        if(gender == "male"){                                          /* Calculates BMR value */
            var BMR = (10 * weight) + (6.25 * cm) - (5 * age) + 5;              
        }   
        else{
            var BMR = (10 * weight) + (6.25 * cm) - (5 * age) - 161;
        }

        if(act=="Sedentry-Little to no exercise"){                    /* Calculates minimum calorie intake */
            var cal = BMR * 1.2;  
        }
        else if(act=="Light exercise (1–3 days per week)"){
            var cal = BMR * 1.375;
        }
        else if(act =="Moderate exercise (3–5 days per week)"){
            var cal = BMR * 1.55;
        }
        else{
             var cal = BMR * 1.725;
        }
        var obj = document.getElementById('rem');                   /* Removes form from div */
        obj.parentNode.removeChild(obj);
        var obj1 = document.getElementById('head');                /* Removes heading from div */
        obj1.parentNode.removeChild(obj1);
        document.getElementById('dis').innerHTML="<h1> Your BMI Index is:" +bmiValue.bold()+"</h1>"+"<br>"+     /* Replace div with new content*/
        "<p>"+comment.bold()+"</p>"+"<br>"+
        "<p>Your Calorie Intake should be: " +cal.toFixed(0) +"</p>";                     
    }
}