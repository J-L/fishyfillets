from server import *


@app.route("/fish/<id>", methods = ["GET"])
def get_fish(id):
    print("GET fish: " + id);
    fish = r.get(id);
    return fish;



@app.route("/fish", methods = ["POST"])
def post_fish():
    submitted_data = request.get_json(True)
    for fish in submitted_data:
        print (r.set("fish:"+fish["name"], json.dumps(fish)))
    return "true"
    