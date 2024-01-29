//const imgx = document.getElementById('imgx')

function upLoadx(e){
  console.log(e.target.value);
  imgx.setAttribute('src',e.target.value)
}

function upLoad(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('imgx');
      output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }