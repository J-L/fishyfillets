import sys, os, platform,json,datetime,logging
from flask import Flask,request
from threading import Thread
from flask.ext.sqlalchemy import SQLAlchemy
from decimal import *
from datetime import timedelta
import requests

app= Flask(__name__)


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
def send_email_message(to,sender, subject, message):
    return requests.post(
        "https://api.mailgun.net/v3/sqwk.ca",
        auth=("api", "key-cca9ecbd1bdc183a75788abadb2feadc"),
        data={"from": sender+" <messenger@sqwk.ca",
              "to": [to],
              "subject": subject,
              "text": message})


import server.routes.test_point
