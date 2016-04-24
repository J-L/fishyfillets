from server import *


@app.route("/fish/<fish_id>", methods = ["GET"])
def get_fish(fish_id):
    try:
        #print("GET fish: " + fish_id);
        fish = r.get("fish:"+str(fish_id))
        if fish is not None:
            json_fish = json.loads(fish.decode('utf-8'))
            json_fish["confusedFishes"] = []
            array_of_confushed_fish_ids = str(json_fish["confusedSpecies"]).split(";")
            for confused_fish_id in array_of_confushed_fish_ids:
                try:
                    #print ("fish:"+str(int(confused_fish_id)))
                    confused_fish = r.get("fish:"+str(int(confused_fish_id)))
                    json_fish["confusedFishes"].append(json.loads(confused_fish.decode('utf-8')))
                except:
                    pass
            return json.dumps(json_fish)

        else:
            return ""
    except Exception as e:
        pass
        #print(e)



@app.route("/fish", methods = ["POST"])
def post_fish():
    print( "POST fish")
    submitted_data = request.get_json(True)
    for fish in submitted_data:
        print (str(fish))
        print (r.set("fish:"+fish["id"], json.dumps(fish)))
    return "true"
    