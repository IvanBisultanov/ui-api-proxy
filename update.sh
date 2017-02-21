#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
docker run -it --rm -v "$CURRENT_DIR:/data" --add-host="localhost:10.0.75.1" apaleo/swagger-codegen $1
