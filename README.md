Current link: http://51.250.85.111:3000/

npm install
npm run start

/src/api/address/ - set server address

To build Docker image run: "docker build -t toople-client ."

To run docker container run: "docker run -p <your_port>:3000 -e REACT_APP_BACKEND_URL="<your_BACKEND_URL>" toople-client"
