# DOCUMENTATION OF ATTENDANCE EMPLOYEE API

# A. Technology
To build this project i used some technology, here below list of technology i used

1. Visual Studio Code (VSC) Version 1.67.2
2. Node.js v14.17.5
3. Mongodb 1.31.3
4. Express.js 4.18.1
5. Mongoose 6.3.4
6. Cors 2.8.5
7. Body-Parser 1.20.0
8. Postman v9.19.0
9. NPM v6.14.14
10. Moment 2.29.3

# B. STORY
The Attendance Employee API is created for record the attend of employee, like present, late, leave, and not present. This Attendance API will help company to track their employee attend.

#C. PROJECT ARCHITECTURE

This project architecture pattern can be shown as below.

<img width="193" alt="architecthur" src="https://user-images.githubusercontent.com/88350337/170440887-0d902197-32ae-46ca-bd51-6f4458a56bcb.png">

# D. TABLE DESIGN
![image](https://user-images.githubusercontent.com/88350337/170316230-03be6c2e-16e1-4fa7-9d65-ea826b6d352c.png)

# E. API

<img width="155" alt="API POSTMAN" src="https://user-images.githubusercontent.com/88350337/170455555-cbb32796-0349-4681-8ba1-6244589eabb0.png">

# F. ROUTE

<img width="296" alt="ROUTE " src="https://user-images.githubusercontent.com/88350337/170455605-07e14006-4f2a-4dad-a955-2d863897dae7.png">

# G. HOW TO USE
To test This API I use Postman. To test API sometimes we need some request from body, request body usually we take from input form from frontend, because we dont have input form, so we use request body in postman.

 - This image below show us how to make new document for attend employee. to make attendance you need to input employeeId and status to request body. This api have two status, status "masuk" for in and status "keluar" for out.
 - route for Attendance API "http://localhost:5000/attendance"
 - and we use HTTP method "POST"

 - This image below show us the response for status "masuk"

<img width="696" alt="Attendance API (in)" src="https://user-images.githubusercontent.com/88350337/170447005-3e2cf4e4-d3d1-47ff-8b55-7fa21518c2a8.png">

 - And in database will look like this

<img width="375" alt="Attendance Collections (in)" src="https://user-images.githubusercontent.com/88350337/170447050-50a10207-13ae-46cb-b6e8-c17daf38971a.png">

 -This image below show us the response for status "keluar"
 
  <img width="698" alt="Attendance API (out)" src="https://user-images.githubusercontent.com/88350337/170447907-2fddc8a4-4e2e-4f8f-805d-bf607f408ae6.png">
 
  - And in database will look like this

  <img width="376" alt="Attendance Collections (out)" src="https://user-images.githubusercontent.com/88350337/170448018-47bb749e-3be9-4479-89e4-23c1627cd975.png">




 - To create leave we use Leave API, we use HTTP method "POST" and some request body
 - route for Leave API "http://localhost:5000/leave"
 - For more detail we can see this image below

   <img width="701" alt="Leave API" src="https://user-images.githubusercontent.com/88350337/170449609-95e61ab4-927f-4d9c-87c0-e0590b98e51a.png">
   
 - If no error in database will look like this image below

   <img width="437" alt="Leave result" src="https://user-images.githubusercontent.com/88350337/170449791-2ee89fa7-c6ec-4669-b14a-778900d37b4a.png">
   
 
 
 - For approve leave we use Approve API with HTTP method "PATCH" and in params we need "leaveId" and in request body we need req "isApprove" with value "true"
 - Routes "http://localhost:5000/approve/:leaveId"
 - The response if not error will show like this image below

   <img width="703" alt="Approve API" src="https://user-images.githubusercontent.com/88350337/170451824-f38b1afb-a994-415b-9d73-f6abd84e9ce4.png">
   
  - And in leave collection, the field "approveDate" will filled by current date when leave is approve
  - And field "isApprove" will update from "false" to "true" we can see this image below for more details

   <img width="428" alt="Approve result" src="https://user-images.githubusercontent.com/88350337/170452386-ff0335e7-7608-4a29-8757-53e01df2963c.png">


- To get All report attendance for each employee we use AttendanceReport API
- Routes "http://localhost:5000/report/:employeeId"
- We use HTTP method "GET"
- We can see this image below for more details

<img width="699" alt="Attendance Report API" src="https://user-images.githubusercontent.com/88350337/170454364-6dde1dd3-1f98-41a0-b21c-ff382e07e5af.png">



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
