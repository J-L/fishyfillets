from server import *


@app.route('/get_fish')
def get_fish():
    print "get_fish"
    search_string = request.args.get('name')
    for elem in r.keys():
        if search_string in elem:
            return r.get("fish:"+search_string)
