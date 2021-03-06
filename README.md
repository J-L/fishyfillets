# Data Structures

```
Fish: {
        id: string
	name: string
	mislabelRate: double
	commonlyMislabeledOn: Fish[]
	imageLinks: string[]
	description: string
	oceanwise: boolean
}

Distributor: {
	id: string
	name: string
}

Reports: {
	distributorId: string
	mislabeledSpecies: string
	mislabeledAs: string
}

SearchResult: {
	matchedFishes: [{id: string, name: string}]
	matchedDistributors: [{id: string, name: string}]
}
```

# API

## GET /search

Search against known fish species and distributors

@QueryParam term

@Return SearchResult

## GET /fish/:id

Retrieve details about a fish

@PathParam id

@Return Fish

## GET /distributor/:id

Retrieve details about a distributor

@PathParm id

@Return Distributor

## POST /report

Create a report

@QueryParam distributorName

@QueryParam mislabeledSpecies

@QueryParam mislabeledAs

# Dev Setup

```
pip install -r /path/to/requirements.txt
cd scripts
python ./data_loader.py
cd ..
python application.py

```
Entry point for app is `static/index.html`
