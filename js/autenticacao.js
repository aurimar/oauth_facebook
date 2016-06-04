$(document).ready(function(){
   $('.autentica_facebook').click(function(){

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

    $('.autentica_twitter').click(function(){

   		//chave de autenticaçao
      	OAuth.initialize('HbsTzFVYovNPJtDpcUYLs_ko-dY');
		
		OAuth.popup('twitter').done(function (result) {           
		                         
		    result.me().done(function (data) {               
		        
		        accessToken: result.access_token;
		        
		        $('.id').html(data.id);
		        $('.name').html(data.name);

		    })

		});

   }); 

     $('.autentica_instagram').click(function(){

   		//chave de autenticaçao
      	OAuth.initialize('HbsTzFVYovNPJtDpcUYLs_ko-dY');
		
		OAuth.popup('instagram').done(function (result) {           
		                         
		    result.me().done(function (data) {               
		        
		        accessToken: result.access_token;
		        
		        $('.id').html(data.id);
		        $('.name').html(data.name);

		    })

		});

   }); 
});