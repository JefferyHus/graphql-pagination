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

