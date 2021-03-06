import sys, os, platform,json,datetime,logging
from flask import Flask,request
from threading import Thread
from flask.ext.script import Shell
from flask.ext.script import Manager
from flask.ext.sqlalchemy import SQLAlchemy
import requests
import redis
r = redis.StrictRedis(host='localhost', port=6379, db=0)
app= Flask(__name__)
#/static/img/preview/pngs/

def package_json(query_set,private=False):
    try:
        if query_set is None:
            return "None"
        return_data =[]
        for q in query_set:
            return_data.append(q.to_json(private))
        return return_data
    except:
        raise

@app.teardown_appcontext
def teardown_db(exception):
    pass
    #db.session.commit()
    #db.session.close()
    #print "session closed"
#def validate_request(f):
#  @functools.wraps(f)
#  def decorated_function(*args, **kws):
#    # Do something with your request here
#    data = flask.request.get_json()
#    if not data:
#      flask.abort(404)
#  return decorated_function
def redirect_http(func):
    @functools.wraps(func)
    def decorated_function(*args, **kws):
        http_type = request.headers.get('X-Forwarded-Port')
        if http_type == "80":
            return redirect(request.url.replace("http://", "https://"))
        return func(*args, **kws)
    return decorated_function


import server.routes.test_point
import server.routes.fish
import server.routes.search
import server.routes.report
import server.routes.distributor