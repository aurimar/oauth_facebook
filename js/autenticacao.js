$(document).ready(function(){
   $('.autenticacao').click(function(){

   		//chave de autenticaçao
      	OAuth.initialize('HbsTzFVYovNPJtDpcUYLs_ko-dY');
		
		OAuth.popup('facebook').done(function (result) {           
		                         
		    result.me().done(function (data) {               
		        
		        accessToken: result.access_token;
		        
		        $('.id').html(data.id);
		        $('.name').html(data.name);

		    })

		});

   }); 
});