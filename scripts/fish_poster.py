import csv,requests

file_name = "fish.csv"
base_url = "127.0.0.1:5000/"
insert_fish_endpoint = "/fish"


def insert_fish(file_name):
    with open(file_name, 'rb') as csvfile:
        reader = csv.DictReader(csvfile)
        json_array = []
        fish_obj = dict()
        for row in reader:
            requests.post(base_url+insert_fish_endpoint, json=row )





if __name__ == "__main__":
    insert_fish(file_name)