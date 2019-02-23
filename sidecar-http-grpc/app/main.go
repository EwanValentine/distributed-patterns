package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"

	pb "github.com/EwanValentine/distributed-patterns/sidecar-http-grpc/app/transport"
	grpc "google.golang.org/grpc"
)

type server struct{}

func (s *server) FetchGreeting(ctx context.Context, req *pb.Request) (*pb.Response, error) {
	name := req.Name
	response := &pb.Response{
		Reply: fmt.Sprintf("Hello there, %s", name),
	}
	return response, nil
}

func main() {
	port := os.Getenv("PORT")
	lis, err := net.Listen("tcp", fmt.Sprintf(":%s", port))
	if err != nil {
		log.Fatal(err)
	}

	grpcServer := grpc.NewServer()
	pb.RegisterApplicationServer(grpcServer, &server{})

	// start the server
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}
