from server import *


@app.route("/fish/<path>", methods = ["GET"])
def get_fish(path):
    print("GET fish")
    try:
        fish_id = "fish:"+str(path.split("/")[-1])
        for elem in r.keys():
            if fish_id == elem:
                print (r.get(fish_id))
        return "null"
    except Exception as e:
        print(e)



@app.route("/fish", methods = ["POST"])
def post_fish():
    submitted_data = request.get_json(True)
    for fish in submitted_data:
        print (r.set("fish:"+fish["name"], json.dumps(fish)))
    return "true"
    