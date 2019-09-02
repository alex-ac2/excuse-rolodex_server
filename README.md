# Excuse-Rolodex (Server)

#### Sample GraphQL Request

Create Excuse: 
``` js
mutation {
  updateExcuse(caption: 'Need to drive my brother to work', category: "family", userId: 22) {
  	id
	  userId
    category
  }
}
```

Update Excuse: (change category)
``` js
mutation {
  updateExcuse(id: 4, category: "medical", userId: 22) {
  	id
	  userId
    category
  }
}
```
