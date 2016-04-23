from server import *


@app.route('/get_distributor')
def get_distributor():
    distributorId = request.args.get('distributorId')
    return r.get("distributorId:"+search_string)