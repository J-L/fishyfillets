from server import *



@app.route('/insert_distributor',methods = ['POST'])
def insert_distributor():
    submitted_data = request.get_json(True)
    distributorId = submitted_data["ID"]
    r.set("report:distributorId:"+distributorId, submitted_data)
    return "true"
