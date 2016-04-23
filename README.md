# Data Structures

Fish: {
	species: string
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
	matchedFishes: Fish[]
	matchedDistributors: [{distributor: Distributor, reports: Reports}]
}

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
