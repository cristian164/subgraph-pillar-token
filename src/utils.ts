type Token @entity {
	id: ID!
	tokenSupplies: [TokenSupply!]! @derivedFrom(field: "token")
}

type TokenSupply @entity {
	id: ID!
	totalSupply: BigDecimal!
	timestamp: BigInt!
	token: Token!
}

type Transfer @entity {
	id: ID!
	from: String!
	to: String!
	amount: BigDecimal!
	timestamp: BigInt!
}

type Balance @entity {
	id: ID!
	amount: BigDecimal!
}

type _LastTokenSupply @entity {
	id: ID!
	_totalSupply: BigDecimal!
}