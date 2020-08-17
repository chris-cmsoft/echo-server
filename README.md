# Echo Server

The primary purpose of this echo service, is to return whatever body it is passed.

The origin of this server, 
is for Chaos Engineering when injecting network latency to test the effect of different sized requests.

It could also be used for validating Networking from a browser through infrastructure while setting up new things. 

### Building the image

If you would like to build and upload the server to your own stack, simply run

```
docker build . -t [your_registry]/[your_user]/echo-server:[some-version]
docker push [your_registry]/[your_user]/echo-server:[some-version]
```

Otherwise you could simply pull it from Docker Hub at `chriscmsoft/echo-server:v1`
