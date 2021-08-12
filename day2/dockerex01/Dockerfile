FROM node:14 

RUN apt-get update && \
apt-get install -y vim nano net-tools openssh-server



# 이미지 받아오기

# docker build . -t study/hello-node:step1

# docker create -it --name doc-node-test study/hello-node:step1
# docker create -it --name doc-node-test2 study/hello-node:step1
# docker exec -it e8284f780032 bash
# docker rm e8284f780032
# docker stop e8284f780032
# docker ps -a
# apt-get update
# apt-get install vim
# docker build . -t hello-node:step1
# docker images
# docker rmi(이미지 지우는 것)
# docker create -it -p 8080:8080 -p 8022:22 --name doc-node-test study/hello-node:step1
# vim /etc/ssh/sshd_config
# service ssh start
# ssh root@localhost -p 8022
# RUN apt-get update && \
# apt-get install -y vim nano net-tools openssh-server
# docker create -it -p 8080:8080 -p 8022:22 --name doc-node-test study/hello-node:step1

RUN apt-get update && \
apt-get install -y vim nano net-tools openssh-server

# ssh
# ssh root@localhost -p 8022
# service ssh start
# passwd  root
# nano /etc/ssh/sshd_config
# curl -i -X GET http://192.168.0.5:8080
# curl -X GET http://192.168.0.5:8080
# ssh root@192.168.0.5 -p 8022
# service ssh restart
# docker search mongo
# docker run --name mongo_container -d -p 27017:27017 -v C:\Users\남재경\Desktop\nodejs\work\node-js_study\database:/data/db mongo
# 리눅스 들어간 이후 mongo
# db 하면 test가 뜨는데 db가 안떴다는 뜻이다.
# db 이후에 show collections
# db.memo.insert({title:"hello",text:"welcome to mongo land"})
# db.memo.find()로 확인 가능
# docker exec -it -w /home/work/nodejs_study  0d7b6a9a5fc6 ls (-w는 워킹 디렉토리다.)
# docker exec -it -w /home/work/nodejs_study  0d7b6a9a5fc6 node testserver.js(이것으로 testserver.js로 실행 가능)
# docker exec -it -d /home/work/nodejs_study  0d7b6a9a5fc6 node testserver.js(이것으로 testserver.js를 배경으로 실행 가능)
# curl -i -X GET http://localhost:8080(서버 실행)