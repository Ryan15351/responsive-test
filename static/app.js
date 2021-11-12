document.onreadystatechange = function(){
    var toggleMenu = function(){
        var body = document.getElementsByTagName('body')[0];
        var listaDeClasses = body.classList;
        listaDeClasses.toggle('navAberto');
    };
    document.getElementById('menu-btn').onclick = toggleMenu;
    document.getElementById('auxiliar-menu').onclick = toggleMenu;
}


function google(){
    window.location.href = "https://www.google.com.br/";
}

function facebook(){
    window.location.assign("https://www.facebook.com/");
}

function twitter(){
    window.location.replace("https://twitter.com/");
}

function youtube(){
 
    statusUsuario = "Falso";

    if (statusUsuario == "Ativo") {
        window.location.href = "https://www.youtube.com/";
    }
}