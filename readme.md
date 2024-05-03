# Cypress for QA
## Introduction
This page contains guide on using Cypress for UI and API testing for the first time.

Bellow considering example of Windows 10 with preintallled: 
- NodeJS v18.14.2 
- Chrome Version 124.0.6367.119
- Visual Studio Code 1.77.3 (no additional plugins required)

Run commands listed bellow in CMD in the location of project. 

## Option 1: Use this repository as template
1. Clone repository using GitBash:
```
git clone https://github.com/TsypliakAlexandr/Cypress-Simple-Example.git
```
2. Intall dependencies:
```
npm install
```

## Option 2: Create Cypress project from scratch
1. Create new NodeJS project:
```
npm init
```
2. Install Cypress:
```
npm install cypress --save-dev
```
## The demo
1. Open Cypress in browser to run your tests:
```
npx cypress open
```
2. Choose E2E testing option 
3. Choose Chrome as browser
4. Use Chrome UI of Cypress, go to Specs run independent case for UI and API 
5. Open folder with repository using Visual Studio Code, find tests implementation in "cypress\e2e" folder

## References
- [Handling variables in Cypress](https://docs.cypress.io/guides/core-concepts/variables-and-aliases)
- [Interacting with web UI elements in Cypress](https://docs.cypress.io/api/commands/get)
- [Interacting with API via Cypress](https://docs.cypress.io/api/commands/request)