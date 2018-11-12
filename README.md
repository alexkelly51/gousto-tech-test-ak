## I started by
using the ```create-react app```

## I then added in
 - ```axios``` for the api call
 - ```lodash``` to use some of their functions
 - ```react-flexbox-grid``` to get the categories to flow on to more than one row


 ## The setup
 I used the app component to pull in the api data with axios and render the title and pass data to the other components.

 I built a component to display the categories and change the className of the active category.

The other component is to display the items associated with the selected category or a 'no items' message when there are no items.

Then there is a final component which shows the description of an item when it is selected.

I added a little bit of formatting in css and the gousto logo.


 ## I still need to work on:
  1. Loading the item list for each category into separate routes based on id so the back and forward browser buttons work

  2. Adding in the search box to filter the items

  3. Understand the toggle function so can un-bold categories and items if I click on them again, rather than using id to assign the active class

  4. Use JS to hide/ show the item descriptions rather than hacking this with css

  5. Building the tests for the app - I know these should be built first, but as this is a new language for me I wanted to crack on with learning and building before tackling learning about testing.

  :+1:

## To build in development use

```yarn install``` and then ```yarn start``` to open in localhost:3000
