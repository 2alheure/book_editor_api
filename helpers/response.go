package helpers

import (
	"encoding/json"
	"net/http"
)

func Message(status bool, httpCode int, message string) (map[string]interface{}) {
	if http.StatusText(httpCode) != "" {
		return map[string]interface{} {"status" : status, "http": httpCode, "message" : message}
	} else {
		return map[string]interface{} {"status" : status, "message" : message}
	}
}

func OKMessage() (map[string]interface{}) {
	return Message(true, 200, "OK")
}

func WriteToken(w http.ResponseWriter, token string) {
	w.Header().Add("Authorization", token)
}

func RewriteToken(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	w.Header().Add("Authorization", token)
}

func Respond(w http.ResponseWriter, data map[string] interface{})  {
	w.Header().Add("Content-Type", "application/json")
	if val, ok := data["http"]; val != "" && ok {
		w.WriteHeader(data["http"].(int))
	}
	json.NewEncoder(w).Encode(data)
}