# GraphQL Pagination

Hey there! Glad you are here and welcome to `GraphQL Pagination` tutorial. The goal of this tutorial is to guide you through setting up your pagination using `graphql`.

## Offset Pagination

Now that you have your blog up and running, you notice that you are querying all your posts. This is not efficient, especially if you go over a 100 blog posts. Your SQL query will grow by time and spend then more time to execute.

To solve the problem, by default as someone who knows SQL well, you will probably think of paginating. The way you do it is by adding two arguments to your SQL query `offset` and `limit`. You are greatly correct about what you are thinking right now. Yes you are again correct, you can do this in your graphql code base.

Allow me to show you an example of fetching 10 blog posts from all your posts starting from the 11th one. Your query will look like this:

```javascript
query {
  posts(limit: 10, offset: 10) {
    title,
    content
  }
}
```

Until now everything seems to be working, this type of pagination works great if you have either a static or small data. It results into a good user experience for quickly fetching the next page data.

But, this approach have its downsides and issues that needs to be addressed.

### Performance

As mentioned before, in small datasets, the offset approach is good for you and will not break the user experience.

But as the data grows in your database and you are trying to fetch the farthest of the results :weary: it will take longer than you can imagine (You may :cry:).

But how? (you ask). Let's break it down easily, take this query as an example:

```javascript
query {
  posts(limit: 10, offset: 10000) {
    title,
    content
  }
}
```

The query is fetching 10 posts with an offset of 10K, in a first glance you think that's it,your database engine will directly understand the offset and start querying from that row.

Well ! That won't happen because the way a `relational` database engine works, is that it will still have to compute all the skipped rows inside the server; therefore a large OFFSET might be inefficient.

You see?! It's bad right, just like if you want to start reading a book from a certain page but you still have to go over every page and count it yourself without the use of an index.

Don't worry, we got your back with a better solution :sunglasses:

# Cursor pagination (a.k.a Relay-style/keyset)

This approach tend to set a pointer to a specific record in your datatable. For it to work at its finest, the cursor must be unique and sequential. What this does, is that you will always fetch data after a certain row instead of relying in the positioning of rows inside your table.

Let's have an example to understand this more:

```javascript
query {
  posts(limit: 10, publisherId: 1, cursor: 1580259485) {
    title,
    content
  }
}
```

The query will skip all the 24th rows and returns the next 10 results in your dataset after the value of your `cursor`. **The `cursor` here refers to the `createdAt` timestamp.**

Looking at your resolver, it will look like this:

*P.S: We are using Sequelize as our ORM framework.*

```javascript
{
  posts(parent, { limit, publisherId, cursor }) {
    return Posts.findAll({
      where: {
        publisherId,
        createdAt: {
          [Op.gt]: cursor
        }
      },
      limit
    })
  }
}
```

