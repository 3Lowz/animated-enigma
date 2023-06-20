# Fastify Plugin React Template

## Description
Plugin template for plugin development with react app or component exposed using webpack federation

## Installation
 1. clone this repo
    > git clone git@gitlab.local.alea.pro:adm-3/templates/fastify-plugin-react-template.git

 2. Remove the remote and url and set the new one
 
    > git remote remove origin && git remote add origin <new-git-remote-url>

    or (in 1 command)

    > git remote set-url origin <new-git-remote-url>

 3. In the `package.json` file edit the `name`, `version` and `description` properties

 4. In `webpack.config.js` file edit the object properties for the _ModuleFederationPlugin_
      (TODO: edit me after dynamic import has been implemented)
  
 5. Develop!!

## Usage
If you have ideas for releases in the future, it is a good idea to list them in the README.

 - Rename name & version in `package.json`
 - In `webpack.config.js` file edit the object properties for the _ModuleFederationPlugin_
 - run `npm link` inside the plugin folder
 - Navigate to the project that is used to test the plugin
 - `npm link <plugin-name>`
 - Done!


## App Scaffolding:

We need to have a development HOC layer in order to separate the plugin development, from the functionality exposed. 

```
├── App.css                         //
├── App.tsx                         // Entry point for App
├── bootstrap.tsx                   // bootstrap entry for federation
├── index.tsx                       // index.tsx
├── Routes.tsx                      // Routes entry point for App
└── components                      // App components
    ├── dashboard                   // Isoletad Funcionality Component Page
    │   ├── Dashboard.routes.tsx    // Component Page Routes
    │   ├── Dashboard.service.tsx   // TODO: Component Page Service
    │   ├── Dashboard.tsx           // Main Component
    │   ├── Header.dashboard.tsx    // Header for component
    │   ├── index.tsx               // exporting default Routes
    │   ├── Main.dashboard.tsx      // Subcomponent
    │   ├── Page.dashboard.tsx      // Page component
    │   ├── SideMenu.dashboard.tsx  // Subcomponent
    │   └── Slave.dashboard.tsx     // Subcomponent
    ├── Header.tsx                  // Internal developing header
    ├── NotFound.tsx                // Internal developing notFound page
    ├── Page.tsx                    // Internal developing Outlet renderer
    └── Subroute.tsx                // Internal developing test component

```


### TODO:

 - [ ] : add css (node-sass) loader && uncomment `bootstrap.css` in `app/index.tsx`
 - [x] : review and fix dependencies + npm commands
 - [x] : Implement basic skeleton base app
 - [ ] : write proper webpack configs for development / production
 - [ ] : configure separated `tsconfig.json` for plugin and app 
 - [ ] : considering using a separated `package.json` and `tsconfig.json` for app
 - [ ] : fix webpack when returning array of configs

## Roadmap