# Run the test runner (Jest) in a terminal:
yarn test --watchAll

# Start the component explorer on port 6006:
yarn storybook

# Run the frontend app proper on port 3000:
yarn start





With the Storyshots addon a snapshot test is created for each of the stories. Use it by adding the following development dependencies:

yarn add -D @storybook/addon-storyshots react-test-renderer
