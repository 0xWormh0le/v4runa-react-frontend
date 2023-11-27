This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Development Flow

Here are the steps of the process you need to follow in order to integrate new code or a new feature into the project:

1. Transition the status of the card that describes the feature you will be working on in our JIRA project to be In Progress.
2. Create a local branch to get started using git: git checkout -b <feature|bug|task>/<jira-number>-<short-description>. For instance, this could be a branch name: feature/96-add-navigation-sidebar.
   - The first part indicates whether it is new feature, bug or documentation, while the second part it is just the JIRA card number followed by some short description.
3. Develop the new feature while doing atomic commits to your local branch using git commit.
4. After you are done, rebase your branch against the remote develop so your new commits are applied on top of any changes that occurred. As you rebase, you'll need to locally fix the conflicts on your branch for each commit applied.
5. Before creating the Pull Request, you need to make sure the tests pass. Git hooks should be employed to enforce this.
   - npm test
6. Now you are ready to create a new Pull Request with your changes:
   - Push your changes to origin using git push -u origin <your-branch-name>
   - Then go to https://github.com/Varunatech/iCCR/compare?expand=1 and select your branch on the compare: dropdown. You'll be using develop as the base branch. Press View pull request after that.
   - If you see a green sign "Able to merge", go to the next step. If you see a red sign "Can't automatically merge", you will need to resolve the conflicts in your branch with the destination branch. See: https://github.com/genome/docs/wiki/How-do-I-fix-my-pull-request-if-it-cannot-be-automatically-merged%3F
   - Add a small comment with your changes, and add the Reviewers using the column on the right. Finally, press the button to create the PR.
7. After this happens, a new message will be automatically posted to the #frontend channel in Slack. Moreover, the reviewers will be notified by email. Notice the develop branch is set as a protected branch in Github so you'll need at least one approval before you can merge.
8. Your code will be reviewed, you can update the branch with new changes after you get some feedback.
9. After the Pull Request is approved, merge it using the UI on Github (you can also remove the branch directly from the same page, which is also convenient). Your code will land to the develop branch (and eventually deployed into the staging environment). Delete the feature branch after successful merge.
10. Finally, remember to transition your JIRA card to Done.

## Coding Conventions

### Project folder structure

- `components/` contains the commonly used components through the app.
- `hocs/` contains [Higher Order Components](https://reactjs.org/docs/higher-order-components.html).
- `icons/` contains svg icon components.
- `routes/` contains the page route components and sub components used within their routes only.
  - `routes/<RouteComponent>/components` contains the sub components used within this route only.
  - `routes/<RouteComponent>/routes` contains the sub route components that belongs to this route path.
  - `routes/<RouteComponent>/index.js` contains the route definition if it has sub routes or exports the main component for this route in the above components folder which is located in the same level.
- `store/` contains redux store modules including actions, sagas, reducers, API call modules.
- `styles/` contains the global SCSS variables definition and bootstrap variable overrides.
- `utils/` contains utility and helper functions.

### Component folder structure

Each component folder should contain the following files.

- `<ComponentName>.js`: Main component definition file.
- `<ComponentName>.scss`: contains SCSS definition.
- `<ComponentName>.test.js`: contains unit tests for this component.
- `index.js`: exports the component as default.
- Other svg assets that belongs to this component can also reside in this folder.

### Styling components

1. Use [BEM](http://getbem.com/) methodology to style components.
2. Define SCSS variables in `styles/twbs-overrides/_variables.scss` if you're overriding bootstraps theme variable, in `styles/_variables.scss` if not.
3. Avoid using constants for colors, fonts, sizes, etc.
4. Utilize customized [Bootstrap's SCSS variables](https://github.com/twbs/bootstrap/blob/master/scss/_variables.scss) as many as possible as well as pre-defined utiliti classes.

### Writing Components

1. Write functional components rather than using classes.
2. Use [react hooks](https://reactjs.org/docs/hooks-intro.html) whenever possible.
3. `import` orders in component definition file should be in alphabetical order.
4. Group and sort `import`s by external modules first, and then by local modules.
5. In any case, `import React ...` should come in the very first line.
6. Use destructuring of component props wherever possible. (e.g. const { prop1, prop2, ...otherProps } = props)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
