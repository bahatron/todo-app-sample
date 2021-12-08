docker_compose(["./docker-compose.tilt.yml"])

docker_build(
    "todo-api",
    ".",
    dockerfile="Dockerfile.api",
    target="src",
    live_update=[
        fall_back_on("./api/package.json"),
        sync("./api", "/app")
    ],
    only=[
        "Dockerfile.api",
        "./api"
    ],
)