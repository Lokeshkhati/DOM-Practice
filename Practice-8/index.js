function checkPass()
{
    var pass1 = document.getElementById('pass1');

    if(pass1.value.length >= 10)
    {
        pass1.style.backgroundColor ="green";
    }
    else
    {
        pass1.style.backgroundColor = 'red';
        return;
    }
  
}