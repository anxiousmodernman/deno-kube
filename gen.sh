#!/bin/bash

MYUID=$UID
MYGID=$UID # quite an assumption!

docker run \
    --user $MYUID \
    --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/swagger.json \
    -g typescript-fetch \
    -o /local/src
