# streamlabs-project

Yo, welcome to the project.

Quick overview

- I used the native Drag-and-Drop + Canvas APIs to draw multiple rectangles and 2 images onto a 16/9 responsive canvas.
- I wrapped the logic in a React component and a few hooks for convenient access to state and to scale the UX.
- Even though all the code is the same and included here in this repo, I ran into problems porting the logic out of my local environment.

📽&nbsp;&nbsp;[Loom Video overview](https://www.loom.com/share/3aa99629e00149398ef619f4bca00341)

💻&nbsp;&nbsp;[CodeSandbox](https://codesandbox.io/s/github/likethemammal/streamlabs-project/tree/main/?file=/src/index.tsx)

🤔&nbsp;&nbsp;My [Thought Process](ThoughtProcess.md) as I went along.

### Timeline

- About 10 mins reading and taking notes on the problem
- About 10 mins researching
- About 30 mins thinking about the problem
- About 2 hours coding a solution in Vanilla JS + partial React.
- About 45 mins moving it to React state management
- About 45 mins refactoring and polishing
- 4+ hours debugging environment issues, trying to figure out how to reproduce in a sharable context

### Question Answers

1. How long did it take you to complete this assignment?
    - ~4 hours to implement, 4+ hours debugging

2. What about this assignment did you find most challenging?
    - Dealing with some of the bugs that come with a responsive canvas + drag and drop + device pixel ratio.

3. What about this assignment did you find unclear?
    - When the Technical Considerations mentioned not using a "rendering" Canvas library it wasnt clear what the limits on "rendering" were. The example of Fabric.js made it more obvious, but I decided to keep things low-level like the instructions suggested.

4. Do you feel like this assignment has an appropriate level of difficulty?
    - Yes, but I would say most ppl dont use the Canvas API often.


### Install

To run this repo

```sh

npm install;
npm run start;

```


