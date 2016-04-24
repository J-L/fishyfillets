from server import *



@app.route('/report',methods = ['POST'])
def insert_report():
    submitted_data = request.get_json(True)
    distributorId = submitted_data["distributorId"]
    mislabeledSpecies = submitted_data["mislabeledSpecies"]
    mislabeledAs = submitted_data["mislabeledAs"]
    r.sadd("report:distributorId:"+distributorId, submitted_data)
    r.sadd("report:mislabeledSpecies:"+mislabeledSpecies, submitted_data)
    r.sadd("report:mislabeledAs:"+mislabeledAs, submitted_data)
    return "true"


@app.route('/report',methods = ['GET'])
def get_reports():
    try:
        distributorId = request.args.get('distributorId')
        mislabeledSpecies = request.args.get('mislabeledSpecies')
        mislabeledAs = request.args.get("mislabeledAs") 
        full_key = "report:"
        distributor_key = full_key +"distributorId:"+str(distributorId)
        mislabeled_species_key = full_key +"mislabeledSpecies:"+str(mislabeledSpecies)
        mislabeled_as_key = full_key +"mislabeledAs:"+str(mislabeledAs)
        #the keys
        keys_to_intersect = []
        if distributorId is not None:
            keys_to_intersect.append(distributor_key)
        if mislabeledSpecies is not None:
            keys_to_intersect.append(mislabeled_species_key)
        if mislabeledAs is not None:
            keys_to_intersect.append(mislabeled_as_key)
        print ("sinter")
        data = []
        print ("keys:"+str(keys_to_intersect))
        redis_sinter = r.sinter(keys_to_intersect)
        for elem in redis_sinter:
            print (elem)
            data.append(elem)
        return json.dumps(data)
    except Exception as e:
        print (e)

