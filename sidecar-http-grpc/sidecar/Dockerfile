FROM golang:alpine as builder

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh gcc musl-dev

RUN mkdir -p /usr/distributed-patterns/sidecar-http-grpc/sidecar

WORKDIR /usr/distributed-patterns/sidecar-http-grpc/sidecar

COPY . .

RUN go get
RUN CGO_ENABLED=0 GOOS=linux go build main.go


FROM alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY --from=builder /usr/distributed-patterns/sidecar-http-grpc/sidecar/main .

ENV PORT 80

CMD ["./main"]