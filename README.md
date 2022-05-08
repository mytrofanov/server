# server
server for foodPage

to get list of gooods from server:
1. start app by command:
nodemon index.js
2. send GET request to http://localhost:5000/api/food
3. if you want to send data to server:
POST request on: 
http://localhost:5000/api/food

{
    "category":"food",
    "foodName":"juice",
    "price":"10",
    "name":"Max",
    "phone":"+337788991122"
}
 
