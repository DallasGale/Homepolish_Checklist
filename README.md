Homepolish Frontend Challenge
----

This challenge is for candidates already involved in the Homepolish interview process. For current openings and to apply to an open position, visit our [jobs page](https://www.homepolish.com/jobs).

## Methodology

This challenge is an attempt to replicate a real world project that a frontend engineer would encounter at Homepolish. The final product that you produce will be a small, isolated portion of a real set of features of the Homepolish web app. You get to see if the type of work makes sense for you and we as Homepolish get to see a semi-real representation of what your work would look like on our team.

Thanks for taking the time to go through this process!

**Important:** The work that you produce for this challenge is yours. Despite this being a real project that we have undertaken in the past, we have no reason or intention to use this work on the official web app. Do with it as you wish.

**Important:** Try to timebox your work to 3 hours. You might not finish and that's ok. Just do as much as you can.

## What you're building

Homepolish has 2 primary types of users: clients and designers. Throughout the design process, clients and designers can use a checklist tool to outline tasks as well as items to be purchased for the project. You will be building a limited set of features for this checklist using React.

![The checklist](https://user-images.githubusercontent.com/3035355/32299865-bdf1e776-bf1c-11e7-9013-51c7d6522ff9.png)

### Features

* Task list with list items which are `not_started`
* Task list with list items which are `complete`
* Button on the `not_started` list item to transition a task from `not_started` to `complete`
* An alert is shown when a task transitions from `not_started` to `complete`, like this:

![Alert](https://user-images.githubusercontent.com/3035355/32300670-3f739ea4-bf20-11e7-8e9c-e995e4a7b199.png)

* Hover state for the transition button defined above, which looks like this:

![Hover state](https://user-images.githubusercontent.com/3035355/32300433-1fce9776-bf1f-11e7-9cf1-747f14c2cd31.gif)

### Requirements

* Use whatever libraries and tools you are familiar with, aside from those already setup in this repo
* Build in any behavior that you think makes sense which is not defined in the feature set above. If you don't have time for everything, that's ok. :warning: Document what you weren't able to finish in `UNFINISHED.md` :warning:
* For the alerts, avoid a third party alert library. We are interested in the choices that you make in setting up this behavior.

### Starting point

![Starting point](https://user-images.githubusercontent.com/3035355/32295218-36c83312-bf0e-11e7-802b-e1f910a60ff3.png)

## Getting started

1. Clone the repo
2. `npm install && npm start` (or `yarn` commands if you prefer)
3. `http://localhost:3000`

## Tests

`npm test` runs your tests in "watch" mode [[docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#command-line-interface)].

## Submission

**Important:** Push your finished work to a **private** repository. Bitbucket is free for this and an ideal place to push your code. When you're done, please give the following emails access to your solution:

[Emails to add to private repo access](https://github.com/Homepolish/frontend-challenge/wiki/Emails-to-add-to-private-repo-access)

## Tips

* Try as best as you can to match the design. While the font family wont match exactly as a premium font was used in the mockup, the other elements can all be created with CSS.
* Several patterns have been established already throughout the code. Try to pick up and follow them as much as you can.
* We are using `styled-components` rather than standard CSS. We are interested in seeing how you can pick this up and apply it to the CSS paradigms that you already know. An example styled component [has been setup for you](https://github.com/Homepolish/frontend-challenge/blob/35b8767bfdbeefc8c797d76479131c4a624fe4c2/src/components/checklist.js#L4-L9). Styled components allow you to [pass state and generate styles based on that state ](https://www.styled-components.com/docs/basics#passed-props) in addition to allowing for some of the [SASS syntax that you might already know](https://www.styled-components.com/docs/faqs#can-i-nest-rules).
* `styled-components` adds vendor prefixes already. Regardless, don't focus on browser support for this project.
* Don't worry about media queries or adapting the layout. It is outside the scope of this project.
* Mock data has [already been setup](https://github.com/Homepolish/frontend-challenge/blob/master/src/__mocks__/tasks.js) for you and the checklist component has [access to it as a prop](https://github.com/Homepolish/frontend-challenge/blob/35b8767bfdbeefc8c797d76479131c4a624fe4c2/src/components/checklist.js#L11). Assume that this will be coming from an API somewhere in a real world scenario, but what's important now is building the UI based on the data.
