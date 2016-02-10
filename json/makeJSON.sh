rm jenkins1.json;echo "{ \"project\" : [" > jenkins1.js;cat *.json>> jenkins1.js;echo "] }" >> jenkins1.js;mv jenkins1.js jenkins1.json
