module.exports = {
  "mode": "production", // Change this to 'production' when ready for production
  "output": {
    "filename": "[name].pack.js"
  },
  "resolve": {
    "extensions": [
      ".js",
      ".json"
    ],
    "alias": {}
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  },
  "entry": {
    "index": "./index"
  }
}