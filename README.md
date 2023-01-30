# Pigeon Backend
A Node.js, TypeScript, Express, Cloudinary and MongoDB based backend for scheduling posts on LinkedIn.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js installed on your machine.
- A MongoDB database setup and running.
- A Cloudinary account for storing media files.

### Installing
- Clone the repository `git clone https://github.com/<repo-name>.git`
- Navigate to the project directory `cd pigeon-backend`
- Install the required dependencies `npm install`
- Set up environment variables in a `.env` file, including:
  - CLIENT_ID (for linkedin)
  - CLIENT_SECRET (for linkedin)
  - REDIRECT_URI (for linkedin)
  - DB_USERNAME
  - DB_PASSWORD
  - CLOUDINARY_CLOUD_NAME
  - CLOUDINARY_API_KEY
  - CLOUDINARY_API_SECRET
  - CLOUDINARY_URL
- Start the server with `npm run start`

## API Endpoints
The API has the following endpoints:
- /api/auth
  - GET  /accessToken/:code
  - GET  /accessToken/introspect/:code
- /api/posts
  - POST /
  - GET /
  - PUT /:id
  - DELETE /:id
- /api/users
  - GET /linkedin/user/:accessToken
  - POST /linkedin/user
  - GET /linkedin/user/:id
  - GET /linkedin/users


## Built With
- [Node.js](https://nodejs.org/en/) - JavaScript runtime.
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript.
- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Cloudinary](https://cloudinary.com/) - Cloud-based media management solution.
- [MongoDB](https://www.mongodb.com/) - NoSQL database.



## License
This project is licensed under the MIT License. See the [LICENSE.md](https://github.com/<repo-name>/blob/master/LICENSE) file for details.
