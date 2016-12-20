FROM library/photon:1.0

RUN mkdir /borathon/

COPY ./findserver /borathon/
# COPY ./data /borathon/data
COPY ./LICENSE /borathon/
COPY ./static /borathon/static
COPY ./templates /borathon/templates

RUN chmod u+x /borathon/findserver
	
WORKDIR /borathon/
ENTRYPOINT ["/borathon/findserver"]
