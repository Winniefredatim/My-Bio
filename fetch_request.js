const uri = 'http://jsonplaceholder.typicode.com/users';

let h = new Headers();
h.append('Accept', 'application/json');

let req = new Request(uri, {
    method: 'GET',
    headers: h,
    mode: 'cors'
});

fetch(req)
     .then( (response)=>{
         if(response.ok){
             return response.json();
         }else{
             throw new Error('Bad Url');
         }
        
     })
     .then((jsonData) =>{
         console.log(jsonData);

     })
     .catch( (err) =>{
         console.log('ERROR:', err.message);
     });