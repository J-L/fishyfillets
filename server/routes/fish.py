from server import *



def get_fish():
    fish_id = str(request.url.split("/")[-1])
    print ("fish/"+fish_id)
    for elem in r.keys():
        if search_string in elem:
            return r.get("fish:"+fish_id)


def post_fish():
    submitted_data = request.get_json(True)
    for fish in submitted_data:
        print (r.set("fish:"+fish["name"], json.dumps(fish)))
    return "true"
    


@app.route("/fish")
def fish():
    if request.method == 'POST':
        get_fish()
    else:
        post_fish()