# image-gallery

### Goal
This project creates an image gallery microservice for a real estate web application.  The project uses Express and MongoDB for the backend and React for the frontend.

### Technologies
  - Express
  - MongoDB
  - React
  - Styled Components

### Images

![Image Gallery](https://github.com/joshua-t-liu/image-gallery/blob/master/images/photos.png)

![Image Gallery](https://github.com/joshua-t-liu/image-gallery/blob/master/images/schools.png)

### Reproduction Steps
Assumes MongoDB is installed and running in the local environment.

1. Install repo dependencies.
    $ npm install

2. Seed the test data. Test data uses the faker library to create test data.
    $ npm run seed

3. Start the local server.
    $ npm run start

4. Pull test data.
    - Pick any browser and load the site <http://localhost:3001/homes/10> to see an example response for a request from the server.
