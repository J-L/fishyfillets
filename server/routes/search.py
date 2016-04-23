from server import *


@app.route('/search')
def search():
    search_string = request.args.get('search_string')
    if search_string is None:
        return "error" , 403
    else:
        mock_data = {
            "matchedFishes":[
                {
                    "id": 1,
                    "name": "Bluefin Tuna"
                },
                            {
                    "id": 2,
                    "name": "Salmon"
                },
                            {
                    "id": 3,
                    "name": "Trout"
                },
            ],
            "matchedDistributors":[
                {
                    "id": 1,
                    "name": "Salmon and Co"
                },
                            {
                    "id": 2,
                    "name": "Sea Treasures"
                },
                            {
                    "id": 3,
                    "name": "Fishy Fillets"
                },
            ]
        }
        return json.dumps(mock_data)
        #now the real call
        data = []
        for elem in r.keys():
            if search_string in elem:
                data.append( json.loads(r.get("fish:"+search_string)))
        return json.dumps(data)
