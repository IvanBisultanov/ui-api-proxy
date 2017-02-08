#!/bin/bash

curl https://ui-api.apaleo-staging.com/swagger/v1/swagger.json | \
jq -c '{spec: .}' | \
curl -H "Content-Type: application/json" -X POST -d @- https://generator.swagger.io/api/gen/clients/typescript-angular2 | \
jq '.link' | \
xargs curl > generated.zip

unzip generated.zip

rm -rf src
mv typescript-angular2-client src

rm -f generated.zip
