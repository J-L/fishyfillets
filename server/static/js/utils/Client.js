/**
 * Created by shu on 2016-04-23.
 */

const fishes = [
    {
        id: "1",
        name: 'Yellowfin Tuna',
        mislabelFrequency: 'Frequently',
        description: 'A large, predatory tropical tuna species with bright yellow finlets.Yellowfin can reach weights over 180 kg.',
        thumbnail: 'http://placekitten.com/150/150',
        confusedFishes: [
            {
                id: 2,
                name: 'Yellowtail',
                thumbnail: 'http://placekitten.com/150/150'
            }, {
                id: 3,
                name: 'Bluefin Tuna',
                thumbnail: 'http://placekitten.com/150/150'
            }
        ],
        value: 11465,
        sustainability: 'Red',
        aliases: 'ahi; Atún aleta amarilla',
        recommendedConsumptionSize: '45.0 cm LT',
        filletLength: 'L; 8-15 cm; 5 cm',
        filletWeight: '100-200g',
        colour: 'Fresh: deep red. Frozen: dull brown.'
}, {
        id: "2",
        name: 'Yellowtail',
        mislabelFrequency: 'Rarely',
        description: 'Hi, my tail is yellow',
        thumbnail: 'http://placekitten.com/150/150'
    }
];

const distributor = {
    id: 1,
    name: 'Yellow Sunshine Fish Sellers',
    product: 'SHRIMP FARMING',
    location: 'HOMELESS, SAN JOSE',
    email: "info@ysfs.com",
    phone: "2293-7408"
};

const reports = [{
    distributorId: 1,
    soldAs: "1",
    mislabeledFish: "2",
    details: "Total BS!",
    createdAt: 1461475739812
},{
    distributorId: 1,
    soldAs: "1",
    mislabeledFish: "2",
    details: "Rip off!",
    createdAt: 1461015739812
}];

class MockClient {

    search(term, cb) {
        cb({
            matchedFishes: fishes,
            matchedDistributors: [
                distributor
            ]
        });
    }

    getFish(id, cb) {
        let response;
        cb(fishes.find(function(fish) {return fish.id == id}));
    }

    createReport(data, cb) {
        console.log('posting: ', data);
        cb();
    }

    getDistributor(id, cb) {
        cb(distributor);
    }

    getReports(id, cb) {
        cb(reports);
    }
}

class Client {

    search(term, cb) {
        fetch('/search?term=' + term).then((response) => {
            response.json().then(cb);
        });
    }

    getFish(id, cb) {
        fetch('/fish/' + id).then((response) => {
            response.json().then(cb);
        });
    }

    getDistributor(id, cb) {
        fetch('/distributor/' + id).then((response) => {
            response.json().then(cb);
        });
    }
    getReports(id, cb) {
        fetch('/report?distributorId=' + id).then((response) => {
            response.json().then(cb);
        });
    }
    createReport(data,cb) {
        fetch('/report', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
}).then((response) => {
            response.json().then(cb);
        });
    }
}

export default new Client();