define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "AccountInfo",
    "description": "<p>Gives information about the currently connected user</p>",
    "name": "AccountInfo",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "./routes/authRoutes.go",
    "groupTitle": "Auth",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>A Bearer token for authorization. Has to be of the form <code>Bearer xxx.yyy.zzz</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Token error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Missing auth token.\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Invalid token.\"\n}",
          "type": "json"
        },
        {
          "title": "MalformedToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Malformed auth token.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/",
    "title": "DeleteAccount",
    "description": "<p>Deletes the account.</p>",
    "name": "DeleteAccount",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "./routes/authRoutes.go",
    "groupTitle": "Auth",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>A Bearer token for authorization. Has to be of the form <code>Bearer xxx.yyy.zzz</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Token error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Missing auth token.\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Invalid token.\"\n}",
          "type": "json"
        },
        {
          "title": "MalformedToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Malformed auth token.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/",
    "title": "Login",
    "description": "<p>Logs in the user.</p>",
    "name": "Login",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "./routes/authRoutes.go",
    "groupTitle": "Auth",
    "parameter": {
      "fields": {
        "Mandatory": [
          {
            "group": "Mandatory",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>The login</p>"
          },
          {
            "group": "Mandatory",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Parameter Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadParamError:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errors\": {\n    \"url\": {\n      \"extra\": [\n        \"too_much\"\n      ],\n      \"miss\": [\n        \"not_enough\"\n      ]\n    },\n    \"body\": {\n      \"extra\": [\n        \"undesirable\"\n      ],\n      \"miss\": [\n        \"wanted\"\n      ]\n    }\n  },\n  \"http\": 400,\n  \"message\": \"Bad request parameters.\",\n  \"status\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/recover",
    "title": "Recover",
    "description": "<p>Sends a mail to recover the account.</p>",
    "name": "Recover",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "./routes/authRoutes.go",
    "groupTitle": "Auth",
    "parameter": {
      "fields": {
        "Mandatory": [
          {
            "group": "Mandatory",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>An email address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Parameter Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadParamError:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errors\": {\n    \"url\": {\n      \"extra\": [\n        \"too_much\"\n      ],\n      \"miss\": [\n        \"not_enough\"\n      ]\n    },\n    \"body\": {\n      \"extra\": [\n        \"undesirable\"\n      ],\n      \"miss\": [\n        \"wanted\"\n      ]\n    }\n  },\n  \"http\": 400,\n  \"message\": \"Bad request parameters.\",\n  \"status\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "description": "<p>Registers the account.</p>",
    "name": "Register",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "./routes/authRoutes.go",
    "groupTitle": "Auth",
    "parameter": {
      "fields": {
        "Mandatory": [
          {
            "group": "Mandatory",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>The login</p>"
          },
          {
            "group": "Mandatory",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p>"
          },
          {
            "group": "Mandatory",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>An email address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Parameter Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadParamError:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errors\": {\n    \"url\": {\n      \"extra\": [\n        \"too_much\"\n      ],\n      \"miss\": [\n        \"not_enough\"\n      ]\n    },\n    \"body\": {\n      \"extra\": [\n        \"undesirable\"\n      ],\n      \"miss\": [\n        \"wanted\"\n      ]\n    }\n  },\n  \"http\": 400,\n  \"message\": \"Bad request parameters.\",\n  \"status\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/",
    "title": "UpdateAccount",
    "description": "<p>Modifies account info.</p>",
    "name": "UpdateAccount",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>The new email</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>The new login</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>The new password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/authRoutes.go",
    "groupTitle": "Auth",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>A Bearer token for authorization. Has to be of the form <code>Bearer xxx.yyy.zzz</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Token error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Parameter Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Missing auth token.\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Invalid token.\"\n}",
          "type": "json"
        },
        {
          "title": "MalformedToken:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": false,\n  \"http\": 401\n  \"message\": \"Malformed auth token.\"\n}",
          "type": "json"
        },
        {
          "title": "BadParamError:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errors\": {\n    \"url\": {\n      \"extra\": [\n        \"too_much\"\n      ],\n      \"miss\": [\n        \"not_enough\"\n      ]\n    },\n    \"body\": {\n      \"extra\": [\n        \"undesirable\"\n      ],\n      \"miss\": [\n        \"wanted\"\n      ]\n    }\n  },\n  \"http\": 400,\n  \"message\": \"Bad request parameters.\",\n  \"status\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__wamp_www_go_go_standard_auth_api_docs_main_js",
    "groupTitle": "C__wamp_www_go_go_standard_auth_api_docs_main_js",
    "name": ""
  }
] });
