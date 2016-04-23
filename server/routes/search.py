from server import *


@app.route('/search')
def search():
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
