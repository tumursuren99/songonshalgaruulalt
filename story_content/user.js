function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6e0o9pmBnh3":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var surname = player.GetVar('surname');
var name = player.GetVar('name');
var email = player.GetVar('email');
var status = player.GetVar('status');
var score = player.GetVar('score');

var formData = new FormData();
formData.append('Surname', surname);
formData.append('Name', name);
formData.append('Email', email);
formData.append('Status', status);
formData.append('Score', score);
//formData.append('Some text', 'Here is some text');

var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbxHkxgc3cB0tVhafWrT9OPX-9DWRY5zLT_NG7ntbH0rR1czvJDXv7sJz0foBfpChRqjRg/exec');
request.send(formData);
}

