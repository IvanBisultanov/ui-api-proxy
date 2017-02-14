#!/bin/bash

cd "$(dirname "$0")"
rm -rf src/*

dos2unix swaggers.txt
gitBranch=$(basename $(git symbolic-ref HEAD))
baseUrl="http://localhost:50000/"

if [ "$gitBranch" == "master" ]; then
    baseUrl="https://ui-api.apaleo-staging.com/"
fi

IFS='|'
while read -r name url
do
    curl -k "$baseUrl$url" | \
    jq -c '{spec: .}' | \
    curl -k -H "Content-Type: application/json" -X POST -d @- https://generator.swagger.io/api/gen/clients/typescript-angular2 | \
    jq '.link' | \
    xargs curl -k > generated.zip

    unzip generated.zip

    rm -rf "src/$name"
    mv typescript-angular2-client "src/$name"
    echo "import * as _$name from './$name';" >> src/index.ts
    echo "export const $name = _$name;" >> src/index.ts

    rm -f generated.zip
done < swaggers.txt
