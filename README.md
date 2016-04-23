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

## GET /fish

Retrieve details about a fish

@QueryParam species

@Return Fish

## POST /report

Create a report

@QueryParam distributorName

@QueryParam mislabeledSpecies

@QueryParam mislabeledAs

# Dev Setup

```
python3 application.py
cd server/static
npm install
npm start
```
