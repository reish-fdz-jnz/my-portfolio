let visibleMenu = false;
//Función que oculta o muestra el menu
function showAndHideButton(){
    if(visibleMenu){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        visibleMenu = true;
    }
}

function choose(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}

function goToProject(){
    //go to FoodieApp
}

function downloadBtn(){
    const fileUrl = "../assets/ReishellFernández - Informatics Engineer Student CV.pdf"; // Cambia esto por la ruta de tu archivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ReishellFernández - Informatics Engineer Student CV.pdf'; // Nombre del archivo que se descargará
    
    // Hacer el enlace invisible
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}