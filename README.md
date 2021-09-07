01) go to project directory
npm install

02) Then Run,
nodemon index.js

Endpoints:

01)http://localhost:3001/user/signup
method : post
body:
{"email":"a9322malith8901091234777@gmail.com","password":"65276"}

02)http://localhost:3001/user/signin
method : post
body:
{"email":"a9322malith8901091234777@gmail.com","password":"65276"}

03)http://localhost:3001/apiuser/attractions
method : post
body:
{"place":"nuwara"}

04)http://localhost:3001/apiuser/accomodations
method : post
body:
{"place":"nuwara"}

05)http://localhost:3001/apiuser/getdetails
method : post
body:
{"location_id":"6885379"}

06)http://localhost:3001/apiuser/safety
method : post
body:
{"latitude":"41.397158","longitude":"2.160873"}

07)http://localhost:3001/apiuser/weather
method : post
body:
{"latitude":"33.44", "longitude":"-94.04"}

08)http://localhost:3001/apiuser/flightofffers
method : post
body:
{"origin":"BOS", "destination":"LON","date":"2021-10-01","adults":"2"}
