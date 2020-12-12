function validateForm() 
{
    //Javascript for Name

    var fn=document.myForm.Firstname.value;
    var ln=document.myForm.Lastname.value;
    var un=document.myForm.Username.value;
    var a= /[^a-z]/;
    var b=/[^A-Za-z0-9]/;
    var fname = a.test(fn);
    var lname= a.test(ln);
    var uname= b.test(un);
    var temp="true";

    if(fn == "")
    {
        alert('please type your first name');
        return false;
        temp="false";
    }
    if(fn == null || fname == true)
    {
        alert('Enter only  Alphabets for Firstname');
        return false;
        temp="false";
    }
    if(ln == "")
    {
        alert('Please type your Lastname');
        return false;
        temp="false";
    }
    if(ln == null || lname == true)
    {
        alert('Enter only Alphabets for Lastname');
        return false;
        temp="false";
    }
    if(un == "")
    {
        alert('Please type your Username');
        return false;
        temp="false";
    }
    if(un == null || uname == true)
    {
        alert('Enter only Alphabets for Username');
        return false;
        temp="false";
    }

    //Javascript for E-mail
    
    var em =document.myForm.Email.value;

    if( em == "" )
    {
      alert('Enter Mail id');
      return false;
      temp="false";
    }
    else
    {
      var atpos = em.indexOf("@");
      var dotpos =em.lastIndexOf(".");
      if( atpos<1 )
      {
          alert('Enter @ in mail id ');
          return false;
          temp="false";
      } 
      if( dotpos<atpos+2 )
      {
          alert('Enter (.) at valid position');
          return false;
          temp="false";
      }
      if(dotpos+2>=em.length)
      {
          alert('After (.) there should be atleast 3 letters');
          return false;
          temp="false";
      }
    }

    //Javascript for Passwords

    var p =document.myForm.Password.value;
    var cp=document.myForm.ConfirmPassword.value;
    if( p == "" )
    {
      alert('Enter Password');
      return false;
      temp="false";
    }
    if(p.length <= 8)
    {
      alert('The password must contain more than 8 charectors');
      return false;
      temp="false";
    }
    if(cp == "")
    {
      alert('Enter confirm password');
      return false;
      temp="false";
    }
    if( p != cp)
    {
      alert('The password entered should match with the previous one');
      return false;
      temp="false";
    }


    //javascript for DateofBirth

    var dob=document.myForm.Dateofbirth.value;
    if(dob == "" || dob == null)
    {
      alert('Please choose your date of birth');
      return false;
      temp="false";
    }

   

    //Javascript for Gender

    var g=document.myForm.Gender.value;
    if(g == "" || g == null )
    {
      alert('Please select a gender');
      return false;
      temp ="false";
    }


    //Javascript for Phonenumber

    var p = document.myForm.PhoneNumber.value;
    if(isNaN(p))
    {
      alert('Enter only numbers');
      return false;
      temp="false";
    }
    if(p == "")
    {
      alert('Please enter mobile number');
      return false;
      temp="false";
    }
    if(p.length>10 || p.length<10)
    {
      alert('Enter only 10 digits');
      return false;
      temp="false";
    }

    //java scripot for country
    var cn=document.myForm.Country.value;

    if(cn == "" || cn == null)
    {
      alert('Please select a country');
      return false;
      temp ="false";
    }

    if(temp != "false")
    {
      alert('Signed up Successfully');
      alert("Please Proceed to login page");
    }
}