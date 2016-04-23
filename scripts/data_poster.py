import csv,requests

fish_file_name = "fish.csv"
distributor_file_name = "distributor.csv"
base_url = "http://127.0.0.1:5000"
insert_distributor_endpoint = "/distributor"
insert_fish_endpoint = "/distributor"


def insert_distibutor(file_name):
    with open(file_name, 'rt') as csvfile:
        reader = csv.DictReader(csvfile)
        json_array = []
        for row in reader:
            json_array.append(row)
        requests.post(base_url+insert_fish_endpoint, json=json_array )
        print (json_array)



def insert_fish(file_name):
    with open(file_name, 'rt') as csvfile:
        reader = csv.DictReader(csvfile)
        json_array = []
        for row in reader:
            json_array.append(row)
        requests.post(base_url+insert_fish_endpoint, json=json_array )
        print (json_array)


if __name__ == "__main__":
    insert_fish(fish_file_name)
    insert_distibutor(distributor_file_name)