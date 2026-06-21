FROM alpine:3.20

ENTRYPOINT ["sh", "-c", "set -e; NAME=\"$1\"; if [ -z \"$NAME\" ]; then NAME=\"World\"; fi; PREFIX=\"${GREETING_PREFIX_VAR:-Hello}\"; echo \"$PREFIX $NAME from a Docker action\"; NOW=\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"; echo \"any_time_var=$NOW\" >> \"$GITHUB_OUTPUT\"", "docker-action"]
