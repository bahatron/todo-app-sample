#!/bin/sh

psql -U ${POSTGRES_USER} ${POSTGRES_DB} < "/dumps/${POSTGRES_DB}.sql"