from server import *


@app.route("/fish/<fish_id>", methods = ["GET"])
def get_fish(fish_id):
    try:
        print("GET fish: " + fish_id);
        fish = r.get("fish:"+str(fish_id))
        if fish is not None:
            return fish
        else:
            return ""
    except Exception as e:
        print(e)



@app.route("/fish", methods = ["POST"])
def post_fish():
    print( "POST fish")
    submitted_data = request.get_json(True)
    for fish in submitted_data:
        print (str(fish))
        print (r.set("fish:"+fish["ID"], json.dumps(fish)))
    return "true"
    