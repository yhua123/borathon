FROM python:2-onbuild

RUN mkdir /borathon/

COPY ./rsserver.py /borathon/

RUN chmod u+x /borathon/rsserver.py
	
WORKDIR /borathon/
ENTRYPOINT ["/borathon/rsserver.py"]
