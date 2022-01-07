# jackin
Minimal in-memory JSON NoDB of legend.


# Goals for usage
- bind to unix socket, external program like nginx responsible for binding socket to port.
- socket expects REST API.
- cli utility automates REST API calls.
- Simple userless permissions. Launch flag determines whether db is rw or r only. For remote access, security is handled by external program like nginx.

# Goals for functionality
- synchronous.
- case sensitive.
- binary permissions: db is either read only, or read/write.
- key:value, parent:child structure.
