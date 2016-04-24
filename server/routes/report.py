from server import *



@app.route('/report',methods = ['POST'])
def insert_report():
    try:
        submitted_data = request.get_json(True)
        print (submitted_data)
        distributorId = submitted_data["distributorId"]
        mislabeledSpecies = submitted_data["mislabeledFish"]
        mislabeledAs = submitted_data["soldAs"]
        r.sadd("report:distributorId:"+distributorId, submitted_data)
        r.sadd("report:mislabeledFish:"+mislabeledSpecies, submitted_data)
        r.sadd("report:soldAs:"+mislabeledAs, submitted_data)
        return "true"
    except Exception as e:
        print(e)



@app.route('/report',methods = ['GET'])
def get_reports():
    try:
        distributorId = request.args.get('distributorId')
        mislabeledSpecies = request.args.get('mislabeledFish')
        mislabeledAs = request.args.get("soldAs") 
        full_key = "report:"
        distributor_key = full_key +"distributorId:"+str(distributorId)
        mislabeled_species_key = full_key +"mislabeledFish:"+str(mislabeledSpecies)
        mislabeled_as_key = full_key +"soldAs:"+str(mislabeledAs)
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

