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
    ignore=[
        "./api/**/*.interface.ts"
    ]
)

docker_build(
    "todo-web",
    ".",
    dockerfile="Dockerfile.web",
    target="src",
    live_update=[
        fall_back_on("./web/package.json"),
        sync("./web", "/app")
    ],
    only=[
        "Dockerfile.web",
        "./web"
    ],
)