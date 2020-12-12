function LValidate()
{
    //JavaScript for username validation

    var un=document.myForm.Username.value;
    var a=/[^A-Za-z0-9]/;
    var uname= a.test(un);
    temp="true";
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


    //javaScript for Password

    var p =document.myForm.Password.value;
    if( p == "" || p == null )
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

    if(temp != "false")
    {
        alert("logged in Successfully");
    }


    //JavaScript for Validation
}