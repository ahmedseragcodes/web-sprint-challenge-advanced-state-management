# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Passing props without prop drilling, unnecessarily delivering props to components that won't be using them 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store = where all state is stored 

actions = tell our reducer via dispatch what to do with state

reducers = basically the machine that processes state from the store and actions/details on what to do from actions, its taking everything we give it and producing a simplified or "reduced" result


3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Allows us to integrate actions in a sequential logical order that changes depending on the code its being used in and the data being received from the API that's normally integrated 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

Now that I've gotten a lot of practice with Redux and the store, that's definitely my favorite method. Its likely that way because I'm just more comfortable with it. But connect and useReducer do seem a little less ordered and more messy right now. 