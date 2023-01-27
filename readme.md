1) NodeJS - v.14.19.0; 
   MongoDB - v.4.4;

2) npm install - for connecting modules
   
3) use Postmen for test endpoints:

  1. registration: 
                     # method - POST;
                     # url - http://localhost:5000/api/registration
                     # body - 
                              {
                                 "email": "alex@mail.com",
                                 "password": "12345"
                              }

  after running we get two types of tokens "accessToken" and "refreshToken";
  also we can see the refreshToken in cookie
  
  2. login:
               # method - POST;
               # url - http://localhost:5000/api/login
               # body -
                        {
                           "email": "alex@mail.com",
                           "password": "12345"
                        }

  after running we get two types of tokens "accessToken" and "refreshToken" again
  also we can see the refreshToken in cookie
 
  3. logout:
               # method - POST;
               # url - http://localhost:5000/api/logout

  we can look into the database and make sure that the token that matched this user has been deleted;
  and we can also see that the refreshToken is not in the cookie

  4. refresh (function for refresh the token and use it after login when we see the refreshToken in the cookie): 
               # method - GET;
               # url - http://localhost:5000/api/refresh 

  after running we can see new token in the database and new refreshToken in the cookie
  
   