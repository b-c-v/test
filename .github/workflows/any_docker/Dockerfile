FROM alpine:3.20

ENTRYPOINT ["sh", "-c", "set -e; NAME=\"$1\"; if [ -z \"$NAME\" ]; then NAME=\"World\"; fi; PREFIX=\"${GREETING_PREFIX_VAR:-Hello}\"; STEP_TAG=\"${CALLER_STEP_TAG_VAR:-no-step-env}\"; AUTO_INPUT=\"${INPUT_ANY_VAR:-default-from-input-prefix}\"; echo \"$PREFIX $NAME from a Docker action (step env: $STEP_TAG, auto INPUT_: $AUTO_INPUT)\"; NOW=\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"; echo \"any_time_var=$NOW\" >> \"$GITHUB_OUTPUT\"", "docker-action"]
