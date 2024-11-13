const { test, expect } = require('@playwright/test');
const { access } = require('fs');
async function authenticateUser1({request}){
    try{
        const apiUrl = 'https://thinking-tester-contact-list.herokuapp.com/';
        const headers ={
            'Content-Type':'application/json',
        };
        const response = await request.post(apiUrl + "/users/login", {
            headers,
            data:{
                "email":"smithdaniel@gmail.com",
                "password":"danielsmith"
            }
        });
        const statuscode = reponse.status();
        if(statusCode !== 200)
            console.error(`Inexpected status code: $(statusCode)`);
            const responseBody = await response.json();
            console.error('Response body:',responseBody);
            throw new Error('Authentication failed');
        
        }
        const responseBody = await response.json();
        console.log("Authentication successful. Response body:",)
}
async function createEntity(userData,accessToken,module,{request}){
    const apiUrl = await getApiBaseUrl();
    const headers ={
        'Content-Type':'application/json',
        'Accept':'application/json',
        'authorization':"Bearer"+accessToken,
    };
    const response = await request.post(apiUrl+module,{
        headers,
        data:JSON.stringify(userData),
    });
    const responseBody = await response.jsoon();
    const statusCode = response.status();

  }
async function getCurrentDataTimeStamp(){
    const now = new Data();
    const year = now.getFullYear();
    const month = (now.getMonth()+1).toString().padStart(2,'0');
    const day = now.getDate().toString().padStart(2,'0');
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    return '$(year)-$(month)-$(day)_$(hours)-$(minutes)-$(seconds)';
}
module.exports = {updateRun,}