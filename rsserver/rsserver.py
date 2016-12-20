#!/usr/bin/env python
from bottle import run, post, request, response, get, route, template
import json

#rating = open('data/ratings.dat')

@route('/hello/<name>')
def index(name):
    return template('<b>Hello {{name}}</b>!', name=name)
 
@route('/recomm/<username>')
def recom(username):
    list=['item1','item2'];
    return json.dumps(list);

 
@route('/recomm/<username>/<itemid>')
def addrecord(username,itemid):
    rating.append(username+"::5::"+itemid);
    return "successful"


run(host='0.0.0.0', port=8002)

