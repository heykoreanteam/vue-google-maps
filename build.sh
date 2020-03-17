#!/bin/bash

docker run -it --rm --volume "$(pwd)":/code --workdir /code vuejs/ci npm install && npm run-script build
