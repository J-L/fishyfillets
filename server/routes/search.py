from server import *


@app.route('/search')
def search():
    search_string = request.args.get('term').lower()
    if search_string is None:
        return "error" , 403
    else:
        try:
            #now the real call
            matchedFishes = []
            matchedDistributors = []
            for key in r.scan_iter():
                try:
                    if "fish" in key:
                        string_value = r.get(key).decode("utf-8").replace("'", '"')
                        json_obj = json.loads(string_value)
                        name = string_value.lower()
                        if search_string in json_obj["name"].lower():
                            matchedFishes.append(json_obj)
                    elif "distributor" in key:
                        string_value = r.get(key).decode("utf-8")
                        json_obj = json.loads(string_value)
                        name = string_value.lower()
                        
                        if search_string in json_obj["name"].lower():
                            matchedDistributors.append(json_obj)
                except Exception as e:
                    pass

            ret_obj = {
                "matchedDistributors" : matchedDistributors,
                "matchedFishes":matchedFishes
            }
            return json.dumps(ret_obj)
        except Exception as e:
            pass
