# jackin
Minimal in-memory JSON NoDB of legend.


# Goals for usage
- REST API interface

# Goals for functionality
- case sensitive.
- binary permissions: db is either read only, or read/write.
- In memory only, updates take place on volatile copy
- Saving volatile copy to disk is possible with REST API
