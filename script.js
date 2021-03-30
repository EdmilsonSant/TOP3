
//const proxyurl = "https://cors-anywhere.herokuapp.com/";
	
function busca(){
    
    $.ajax({
        
        async: true,
        url: "https://api-java-top.herokuapp.com/top",
        method: "GET",

        success:function(response){
            
            console.log(response);
	    console.log("testando a parada");

        },
        error: function(){
            console.log("Deu ruim");
        },
    });


}
