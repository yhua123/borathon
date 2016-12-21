FROM library/photon:1.0

RUN mkdir /borathon/

COPY ./findany /borathon/
COPY ./findone/index.htm /borathon/
COPY ./findone/static /borathon/static

RUN chmod u+x /borathon/findany
	
WORKDIR /borathon/
ENTRYPOINT ["/borathon/findany"]
