#/usr/local/bin bash

GITROOT="$(git rev-parse --show-toplevel)"
BASEDIR="$(dirname $0)"

SERVICE_DIR="${BASEDIR}/../${_service}/";

echo "SERVICE DIR: ${SERVICE_DIR}"

cd ${SERVICE_DIR}

ls -la;
