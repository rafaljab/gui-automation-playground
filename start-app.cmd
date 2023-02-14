@ECHO OFF
CD "%~dp0"
START npx json-server -w data/db.json -p 3500
START npm start
EXIT
