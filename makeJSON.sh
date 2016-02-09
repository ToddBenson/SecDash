rm example.json;echo "{ \"project\" : [" > example.js;cat *.json>> example.js;echo "] }" >> example.js;mv example.js example.json
