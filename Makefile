current_dir = $(shell pwd)

build-dev:
	docker build . --rm=false -f Dockerfile.dev -t emergent-beirut

run-dev:
	docker run \
	 	-v "$(current_dir)/frontend":/usr/src/emergent-beirut/frontend \
		-p 3000:3000 \
		-dt emergent-beirut