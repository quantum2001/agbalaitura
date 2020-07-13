
var dropdownBox = document.getElementById('dropdown');
var dropdownButton = document.getElementById('dropdown-button');
 function showDropdown(){
     dropdownBox.style.right = "0px";
     dropdownButton.style.backgroundColor = "skyblue"
 }
 function closeDropdown(){
     dropdownBox.style.right = "-450px";
     dropdownButton.style.backgroundColor = "";
 }

 var dropdownDepartment = document.getElementById('dropdown-department');
 var subDropdown = document.getElementsByClassName('sub-dropdown');
 var toggleSubDropdown = 0;
 function openSubDropdown(){
     if(toggleSubDropdown == 0){
        var i = 0;    
        for(i; i < 3; i++){
        subDropdown[i].style.display = "block";
        }
        toggleSubDropdown = 1;
    }else{
        var j = 0;    
        for(j; j < 3; j++){
        subDropdown[j].style.display = "none";
        }
        toggleSubDropdown = 0;
    }
   }


//advert
var i = 1;

setInterval(showAdvert, 8000);

function showAdvert(){
    var adverts = document.getElementsByClassName('advert-details');
    
    for ( p = 0; p < adverts.length; p++) {
        adverts[p].style.opacity = '0';
    }

        adverts[i].style.opacity = '1';

        i++;

        if (i == adverts.length) {
            i = 0;
        }
    }

