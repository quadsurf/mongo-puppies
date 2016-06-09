## Intro to Mongo with Express

### Background

Your task is to build an application that allows the user to see a list of puppies as well as add and see individual puppies.

You will use MongoDB to store and retrieve your puppies.

## Routes

You'll need the following `puppies` routes:

| VERB  | ROUTE  | ACTION  | INFO  |
|---|---|---|---|---|
|GET       | /puppies          |puppies#index    |display a list of all puppies|
|GET       | /puppies/new      |puppies#new      |return an HTML form for creating a new puppy|
|POST      | /puppies          |puppies#create   |create a new puppy|
|GET       | /puppies/:id      |puppies#show     |display a specific puppy|
|GET       | /puppies/:id/edit |puppies#edit     |return an HTML form for editing a puppy|
|PATCH/PUT | /puppies/:id      |puppies#update   |update a specific puppy|
|DELETE    | /puppies/:id      |puppies#destroy  |delete a specific puppy|

## Getting started

Start your node application by using the same steps we did in class:

- fork and clone this repository
- run `npm install` to install dependencies

When you're done - give this puppy a high five!

![http://cutepuppyclub.com/wp-content/uploads/2015/05/648b42e4-ef9e-41e2-9844-f02c61cbe1cc.jpg](http://cutepuppyclub.com/wp-content/uploads/2015/05/648b42e4-ef9e-41e2-9844-f02c61cbe1cc.jpg)
