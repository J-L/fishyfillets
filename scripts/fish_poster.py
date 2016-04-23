import csv

file_name = "fish.csv"
base_url = "127.0.0.1:5000"
insert_fish_endpoint = "/insert_fish"


def insert_fish(file_name):
    with open(file_name, 'rb') as csvfile:
        csv_reader = csv.reader(csvfile)
        json_array = []
        for row in csv_reader:
            json_obj = {
                "name": row[0],
                
            }


if __name__ == "__main__":
    insert_fish(file_name)