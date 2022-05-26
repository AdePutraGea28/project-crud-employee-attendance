# DOCUMENTATION OF ATTENDANCE EMPLOYEE API

A. Technology
To build this project i used some technology, here below list of technology i used

1. Visual Studio Code (VSC) Version 1.67.2
2. Node.js v14.17.5
3. Mongodb 1.31.3
4. Express.js 4.18.1
5. Mongoose 6.3.4
6. Cors 2.8.5
7. Body-Parser 1.20.0
8. Postman v9.19.0
   9 NPM v6.14.14
   10 Moment 2.29.3

B. STORY
The Attendance Employee API is created for record the attend of employee, like present, late, leave, and not present. This Attendance API will help company to track their employee attend.

C. PROJECT ARCHITECTURE
This project architecture pattern can be shown as below.

<img width="193" alt="architecthur" src="https://user-images.githubusercontent.com/88350337/170440887-0d902197-32ae-46ca-bd51-6f4458a56bcb.png">

D. TABLE DESIGN
![image](https://user-images.githubusercontent.com/88350337/170316230-03be6c2e-16e1-4fa7-9d65-ea826b6d352c.png)

E. HOW TO USE
To test This API I use Postman. To test API sometimes we need some request from body, request body usually we take from input form from frontend, because
dont create input, so we use request body in postman.

This image below show us how to make new document for attend employee. to make attendance you need to input employeeId and status to request body.
This api have two status, status "masuk" for in and status "keluar" for out

This image below show us the response for status "masuk"

<img width="696" alt="Attendance API (in)" src="https://user-images.githubusercontent.com/88350337/170447005-3e2cf4e4-d3d1-47ff-8b55-7fa21518c2a8.png">

And in database will look like this

<img width="375" alt="Attendance Collections (in)" src="https://user-images.githubusercontent.com/88350337/170447050-50a10207-13ae-46cb-b6e8-c17daf38971a.png">


<img width="704" alt="leave api" src="https://user-images.githubusercontent.com/88350337/170318061-9dbffdd5-91c9-499b-a348-624c361b99db.png">
<img width="693" alt="approve api" src="https://user-images.githubusercontent.com/88350337/170318090-88b0d6fc-94c9-41bd-9a64-a1d5a296ea14.png">
<img width="691" alt="attendance report api" src="https://user-images.githubusercontent.com/88350337/170318122-16e1903b-ec1f-4e0c-869d-983713527155.png">
