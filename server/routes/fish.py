from server import *



def get_fish():
    print ("get_fish")
    search_string = request.args.get('name')
    for elem in r.keys():
        if search_string in elem:
            return r.get("fish:"+search_string)


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