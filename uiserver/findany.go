package main

import (
	"io"
	"log"
	"net/http"
)

const (
	LOCATION_SERVER_URL       = "http://10.117.5.141:8003/location?group=raspyraccoon"
	RECOMMENDATION_SERVER_URL = "http://10.117.5.141:8002/recomm/youren"
)

func doServer(url string, resp http.ResponseWriter) {
	request, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Printf("Failed to request: %+v", err)
	}
	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		log.Printf("Failed to get response: %+v", err)
	}
	io.Copy(resp, response.Body)

}

func recommendationHandler(resp http.ResponseWriter, req *http.Request) {
	doServer(RECOMMENDATION_SERVER_URL, resp)
}

func locationHandler(resp http.ResponseWriter, req *http.Request) {
	doServer(LOCATION_SERVER_URL, resp)
}

func main() {
	http.HandleFunc("/recommendation", recommendationHandler)
	http.HandleFunc("/location", locationHandler)
	http.Handle("/", http.FileServer(http.Dir("./findone/")))
	http.ListenAndServe(":8000", nil)
}
