ARG VERSION=20.04
FROM ubuntu:${VERSION}
MAINTAINER "pavan kumar <pavan.kumar@vapprtech.com>"
ENV DEBIAN_FRONTEND=noninteractive 
RUN apt update && apt install -y npm && rm -rf /var/lib/apt/lists/*
COPY dist/ .
RUN npm rebuild
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["run", "start"]