/**
 * Created by shu on 2016-04-23.
 */

const fishes = [
    {
        id: "1",
        name: 'Yellowfin Tuna',
        mislabelFrequency: 'Frequent',
        description: 'A large, predatory tropical tuna species with bright yellow finlets.Yellowfin can reach weights over 180 kg.',
        thumbnail: 'http://placekitten.com/150/150',
        confusedFishes: [
            {
                id: 2,
                name: 'Yellowtail'
            }, {
                id: 3,
                name: 'Bluefin Tuna'
            }
        ]
    }, {
        id: "2",
        name: 'Yellowtail',
        mislabelFrequency: 'Infrequent',
        description: 'Hi, my tail is yellow',
        thumbnail: 'http://placekitten.com/150/150'
    }
];

class MockClient {

    search(term, cb) {
        cb({
            matchedFishes: fishes,
            matchedDistributors: [
                { id: 1, name: 'Yellow Sunshine Fish Sellers'}
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
        cb({ id: id, name: 'Yellow Sunshine Fish Sellers'});
    }

    getReports(id, cb) {
        cb();
    }
}

class Client {

    search(term, cb) {
        fetch('/search?term=' + searchTerm).then((response) => {
            response.json().then(cb);
        });
    }

    getFish(id, cb) {
        fetch('/fish/' + props.params.id).then((response) => {
            response.json().then(cb);
        });
    }

}

export default new MockClient();