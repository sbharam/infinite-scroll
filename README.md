# RedditInfoApp Project Summary

Used the Reddit API to query r/aww and implement infinite scrolling with a list of results. On initial page load, the app will automatically retrieve the first 25 records.
When you scroll to the end of the list, load 25 more records. Each list item display the title, thumbnail if available, and the original subreddit name. Clicking the title should navigate to the original reddit post.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Installation and running instructions

Clone project code to your local by running below command using Git Bash
- git clone https://github.com/sbharam/infinite-scroll.git 

Once clone successful, go to root directory of project & run below command using windows command prompt 
- npm install

After npm install, run below command on same windows command prompt 
 - ng serve or npm start. Once project build sucessful then navigate to `http://localhost:4200/`.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
