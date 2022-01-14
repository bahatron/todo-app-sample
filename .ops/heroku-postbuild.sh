#/usr/local/bin bash

GITROOT="$(git rev-parse --show-toplevel)"

cd "${GITROOT}/${_service}/";

ls -la;
