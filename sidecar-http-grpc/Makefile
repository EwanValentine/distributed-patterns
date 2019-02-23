build-proto:
	protoc -I=app/transport --go_out=plugins=grpc:app/transport/ app/transport/app.proto

build-images:
	docker build -t sidecar2-application:v1 app/
	docker build -t sidecar2-sidecar:v1 sidecar/
 
deploy:
	kubectl create -f ./deployment.yml,./service.yml
