#/usr/local/bin bash

GITROOT="$(git rev-parse --show-toplevel)"

SERVICE_DIR="${GITROOT}/${_service}/";

echo "SERVICE DIR: ${SERVICE_DIR}"

cd ${SERVICE_DIR}

ls -la;
