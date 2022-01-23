#/usr/local/bin bash

# GITROOT="$(git rev-parse --show-toplevel)"

BASEDIR="$(dirname $0)"

SERVICE_DIR="${BASEDIR}/../${_service}/";

echo "SERVICE DIR: ${SERVICE_DIR}"

cd ${SERVICE_DIR}

npm install && npm run build

# if [${_service} = "api"]
# then
#     npm install && npm run build:clean
# elif [${_service} = "web"]
# then
#     npm install && npm run build
# else 
#     echo "Wrong service specified";
#     exit 1
# fi