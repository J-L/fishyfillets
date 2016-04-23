/**
 * Created by shu on 2016-04-23.
 */

class MockClient {

    search(term, cb) {
        cb({
            matchedFishes: [
                { id: 1, name: 'Yellowfin Tuna' },
                { id: 2, name: 'Yellowtail'}
            ],
            matchedDistributors: [
                { id: 1, name: 'Yellow Sunshine Fish Sellers'}
            ]
        });
    }

    getFish(id, cb) {
        cb({
            fish: {
                id: id,
                name: 'Yellowfin Tuna',
                mislabelFrequency: 'Frequent',
                description: 'A large, predatory tropical tuna species with bright yellow finlets.Yellowfin can reach weights over 180 kg.'
            },
            confusedFishes: [
                {
                    id: id + 1,
                    name: 'Yellowtail'
                }, {
                    id: id + 2,
                    name: 'Bluefin Tuna'
                }
            ]
        });
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