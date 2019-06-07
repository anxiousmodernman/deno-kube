#!/bin/bash

# pass a UID to --user, or else the files are written as root
MYUID=$UID

docker run \
    --user $MYUID \
    --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/swagger.json \
    -g typescript-fetch \
    -o /local/src
