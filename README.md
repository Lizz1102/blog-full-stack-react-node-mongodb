# Personal Blog Site - TBD 

Showcases full-stack web app development, developed utilizing JavaScript Libraries and frameworks - MERN stack(MongoDB, Express, React, Node), Axios, Firebase.  

## Project Ongoing Documentation Draft

Phase 1: Documenting important steps. 

### Domain 

- Name. Personal? Tech? TBD 
- LESS IS MORE - Simplicity

### Frontend

- React
- React Routing
- npx create-react-app my-blog; cd .\my-blog\; npm install react-router-dom@6; npm start  

### Backend

- Node.js
- Created node.js server with Express aka Express server 
- Commands to set up an express server: cd ..;  mkdir my-blog-backend; code .\my-blog-backend\; npm init -y; npm install express; node src/server.js
- Express server API testing - Postman
- npm install nodemon --save-dev; npx nodemon src/server.js; npm run dev  //watch changes in dev environment automatically

### Database

- MongoDB. For Windows, install MongoDB via MSI, then add the bin to the path - https://stackoverflow.com/questions/15053893/mongo-command-not-recognized-when-trying-to-connect-to-a-mongodb-server. Next, install MongoDB shell(mongosh) via MSI. 
- mongod --dbpath .\mongo-db-data\; mongosh; use react-blog-db; npm install mongodb;
- Install Compass - MongoDB IDE
- To inspect from mongosh, navigate to mongo-db-data; mongosh; use react-blog-db; db.articles.find();
- spirit-animal, liza-startup-ideas, the-art-of-joy. need to implement articles in the database, rn only these 3, so if I want to load other articles, it's not handled. TODO.  

### Connect the Frontend and Backend

- Axios library
- cd ..; code .; npm install axios; 
- React hooks

### User Authentication

- Firebase Auth
- npm install firebase;
- Custom auth hook
- npm install firebase-admin;

### Issues

- [ ] Shows already upvoted but can upvote still once
- [ ] Check -> logout -> comments list disappears, w errors in console like i index error 

### Not Yet Resolved

- Using a proxy to resolve CORS for now(in the frontend package.json) 
- Post article instead of static data
- Use unique IDs instead of enforcing unique article name
- Need unique comment IDs 
- Where do I host the database?
- Where do I host my website? 

## TODOs

### Short-term

- [ ] Test thoroughly before release. Essential features but a smooth, great experience
- [ ] Display Pictures(Important)
- [ ] Add LinkedIn login? Don't add anonymous commenting, we don't want chaos. It's my home, so I'd rather love less comments with authenticity 
- [ ] Refactor for scalability, testability, and maintainability
- [ ] Update the UI design for better accessibility
- [ ] Write unit tests for the user authentication module
- [ ] Add reply to a comment

### Long-term

- [ ] AI assistant to mimic my personality and chat with visitors, take appointments, etc (what else, keep it simple)
- [ ] Integrate a notification system for real-time updates
- [ ] Enhance the documentation with detailed usage examples

### Visual Aspect

- [ ] Pretty UI
- [ ] Media (pictures, videos)
- [ ] Smooth navigation 

## Credits

- [Shaun Wassell - React: Creating and Hosting a Full-Stack Site](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-15153869/)
- [React Reference](https://react.dev/reference/react)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Routing with Express](https://expressjs.com/en/guide/routing.html) 
