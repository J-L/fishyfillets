from server import *



@app.route('/insert_report',methods = ['POST'])
def insert_report():
    submitted_data = request.get_json(True)
    distributorId = submitted_data["distributorId"]
    mislabeledSpecies = submitted_data["mislabeledSpecies"]
    mislabeledAs = submitted_data["mislabeledAs"]
    r.sadd("report:distributorId:"+distributorId, submitted_data)
    r.sadd("report:mislabeledSpecies:"+mislabeledSpecies, submitted_data)
    r.sadd("report:mislabeledAs:"+mislabeledAs, submitted_data)
    return "true"
