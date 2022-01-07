# jackin
Minimal in-memory JSON NoDB of legend.


# Goals for usage
- bind to unix socket, external program like nginx responsible for binding socket to port.
- socket expects REST API.
- cli utility automates REST API calls.

# Goals for functionality
- synchronous.
- case sensitive.
- binary permissions: db is either read only, or read/write.
- key:value, parent:child structure.
