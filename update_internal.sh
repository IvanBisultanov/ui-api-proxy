#!/bin/bash

cd "$(dirname "$0")"
rm -rf src/*

dos2unix swaggers.txt
gitBranch=$(basename $(git symbolic-ref HEAD))
baseUrl="https://ui-api.apaleo-staging.com/"

if [[ ! -z "$1" ]]; then
    baseUrl="$1"
fi
if [ "$1" == "localhost" ]; then
    baseUrl="http://localhost:50000/"
fi

echo "import { ApiModule } from './types';" >> src/index.ts
echo "" >> src/index.ts
echo "export * from './configuration';" >> src/index.ts
echo "export * from './variables';" >> src/index.ts
echo "" >> src/index.ts

IFS='|'
while read -r name url
do
    java -jar $GEN_DIR/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate \
        -i "$baseUrl$url" \
        -t $GEN_DIR/modules/swagger-codegen/src/main/resources/typescript-angular2 \
        -l typescript-angular2 \
        -o ./src/$name

    echo "import * as _$name from './$name';" >> src/index.ts
    echo "export const $name = _$name;" >> src/index.ts
    echo "export const $name""Module: ApiModule = _account.Module;" >> src/index.ts
    echo "" >> src/index.ts

done < swaggers.txt

cp -rf templates/* src
