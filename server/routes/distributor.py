from server import *


@app.route("/distributor/<distributor_id>", methods = ["GET"])
def get_distributor(distributor_id):
    try:
        print("GET distributor:" + distributor_id);
        distributor = r.get("distributor:"+str(distributor_id))
        if distributor is not None:
            return distributor
        else:
            return ""
    except Exception as e:
        print(e)



@app.route("/distributor", methods = ["POST"])
def post_distributor():
    print( "POST distributor")
    submitted_data = request.get_json(True)
    for fish in submitted_data:
        print (str(fish))
        print (r.set("distributor:"+fish["id"], json.dumps(fish)))
    return "true"
    