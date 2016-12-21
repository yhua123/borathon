#!/usr/bin/env python
from bottle import run, post, request, response, get, route, template
import json
import heapq

rating = open('rating.csv')
user = open('users.csv');
recomfile = open ('output.csv')

reclines = recomfile.readlines()
ratlines = rating.readlines()
userlines = user.readlines()

@route('/recomm/<username>')
def recom(username):
    userid = finduser(username)
    #print userid,type(userid)
    list = getrecom(userid)

    retlist = ["item"+str(list[0]),"item"+str(list[1]),"item"+str(list[2])]
    return json.dumps(retlist);


@route('/recomm/<username>/<itemid>/<rating>')
def addrecord(username,itemid):
    userid = finduser(username)
    ratlines[userid][itemid] = rating
    return "successful"
    


def finduser(username):
    i = 0
    for line in userlines:
        line = line.strip()
        if line == username:
            return i
        i = i + 1
    return -1

def getrecom(userid):
    tmpline = reclines[userid]
    
    numlist = tmpline.split(',')
    nlarge = heapq.nlargest(3,numlist)
    print numlist 
    print nlarge
    return numlist.index(nlarge[0]),numlist.index(nlarge[1]),numlist.index(nlarge[2])

run(host='0.0.0.0', port=8002)
