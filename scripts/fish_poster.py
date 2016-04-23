import csv,requests

file_name = "fish.csv"
base_url = "http://127.0.0.1:5000"
insert_fish_endpoint = "/fish"


def insert_fish(file_name):
    with open(file_name, 'rb') as csvfile:
        reader = csv.DictReader(csvfile)
        json_array = []
        for row in reader:
            json_array.append(row)
        requests.post(base_url+insert_fish_endpoint, json=json_array )
        print (json_array)





if __name__ == "__main__":
    insert_fish(file_name)