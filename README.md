# Fastify Plugin React Template

## Description
Plugin template for plugin development with react app or component exposed using webpack federation

## Installation
 1. clone this repo
    ``` 
    git clone git@gitlab.local.alea.pro:adm-3/templates/fastify-plugin-react-template.git
    ```

 2. Remove the remote and url and set the new one
    ```
    git remote remove origin
    ```
    and
    ```
    git remote add origin <new-git-remote-url>
    ```

    or (in 1 command)
    ```
    git remote set-url origin <net-git-remote-url>
    ```

 3. In the `package.json` file edit the `name`, `version` and `description` properties


 4. In `webpack.config.js` file edit the object properties for the _ModuleFederationPlugin_
  
 5. Develop!!

## Usage
If you have ideas for releases in the future, it is a good idea to list them in the README.

 - Rename name & version in `package.json`
 - In `webpack.config.js` file edit the object properties for the _ModuleFederationPlugin_
 - run `npm link` inside the plugin folder
 - Navigate to the project that is used to test the plugin
 - `npm link <plugin-name>`
 - Done!

### TODO:

 - [ ] : add css (node-sass) loader && uncomment `bootstrap.css` in `src/services/gui/app/index.tsx`
 - [ ] : review and fix dependencies + npm commands
 - [x] : Implement basic skeleton base app

## Roadmap