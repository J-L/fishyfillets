from server import *



@app.route('/insert_fish',methods = ['POST'])
def insert_fish():
    submitted_data = request.get_json(True)
    for fish in submitted_data:
        print r.set("fish:"+fish["name"], json.dumps(fish))
    return "true"
    
