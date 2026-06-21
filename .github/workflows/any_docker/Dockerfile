FROM alpine:3.20

ENTRYPOINT ["sh", "-c", "NAME=\"$1\"; if [ -z \"$NAME\" ]; then NAME=\"World\"; fi; echo \"Hello $NAME from a Docker action\"; NOW=\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"; echo \"time=$NOW\" >> \"$GITHUB_OUTPUT\"", "docker-action"]
