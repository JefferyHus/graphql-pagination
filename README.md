# GraphQL Pagination

Hey there! Glad you are here and welcome to `GraphQL Pagination` tutorial. The goal of this tutorial is to guide you through setting up your pagination using `graphql`.

### What's GeaphQL

__GraphQL__ according to official documentation, is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

### Pagination

Now that you have your blog up and running, you notice that you are querying all your posts. This is not efficient, especially if you go over a 100 blog post. Your SQL query will grow by time and spend then more time to execute.

To solve the problem, by default as someone who knows SQL well, you will probably think of paginating. The way you do it is by adding two arguments to your SQL query `offset` and `limit`. You are greatly correct about what you are thinking right now, and yes you are again correct, you can do this in your graphql code base.

Lets imagine that you have this schema:

```
type Post {
  title: String,
  content: String
}
```

You query to get all posts will mostly look something like this:

```
type Query {
  posts: [Post]
}
```

To add pagination to your query you will have to add the arguments you thought of before, then your query will be like this:

```
type Query {
  posts(limit: Int, offset: Int): [Post]
}
```