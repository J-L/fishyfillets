from server import *

def get_fish():
    print ("get_fish")
    search_string = request.args.get('name')
    for elem in r.keys():
        if search_string in elem:
            return r.get("fish:"+search_string)

@app.route("/fish")
def fish()):
    if request.method == 'POST':
        get_fish()
    else:
        post_fish()