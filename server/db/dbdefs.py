from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy import desc
import os,platform
from flask.ext.script import Shell
from flask.ext.script import Manager
import sys
import json

basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'mysql://root:@127.0.0.1/fishackathon'
app.config['SQLALCHEMY_POOL_RECYCLE']=3600
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN']=True
db=SQLAlchemy(app)


#        MaxAge  MaxSize RecommendedConsumptionSize  Distribution    TrophicLevel    Value   SoldAs
class fish(db.Model):
    __tablename__='fish'
    fish_id = db.Column(db.Integer, primary_key=True,index=True)
    CommonName = db.Column(db.String(128))
    LocalCommonName = db.Column(db.String(128))

    def get_id(self):
        return self.bird_id
    def to_json(self):
        json_obj={
            "id": self.fish_id,
            "CommonName":self.CommonName,
            "LocalCommonName":self.LocalCommonName
        }
        return json_obj


def make_shell_context():
    return dict(app=app, db=db)

   

if __name__ == '__main__': 
    manager = Manager(app)
    manager.add_command("shell", Shell(make_context=make_shell_context))
    manager.run()
    
