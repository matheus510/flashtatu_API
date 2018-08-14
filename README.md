# Flashtatu 0.0.2

### Used technologies
<table>
  <thead>
    <tr>
      <th align="center" width="80">
        <a href="http://standardjs.com">
          <img style="max-width:90px;" title="JavaScript Style Guide - Standard Style" src="https://cdn.rawgit.com/standard/standard/master/badge.svg">
        </a>
      </th>
      <th align="center" width="80">
        <a href="https://github.com/expressjs/express">
          <img style="max-width:90px;" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg">
        </a>
      </th>
      <th align="center" width="80">
        <a href="https://github.com/babel/babel-loader">
          <img style="max-width:90px;" title="babel-loader" src="https://worldvectorlogo.com/logos/babel-10.svg">
        </a>
      </th>
      <th align="center" width="80">
        <a href="https://github.com/webpack/webpack">
          <img style="max-width:90px;" src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png">
        </a>
      </th>
      <th align="center" width="80">
        <a href="https://github.com/facebook/jest">
          <img style="max-width:90px;" src="https://camo.githubusercontent.com/f6414ee20933d5fb8b06dc32ed38c8aa175da559/687474703a2f2f64702e68616e6c6f6e2e696f2f3331337933753244307033382f6a6573742e706e67">
        </a>
      </th>
      <th align="center" width="80">
        <a href="//www.docker.com">
          <img style="max-width:90px;" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38771/preview.svg">
        </a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Standard Eslint Config</td>
      <td align="center">Express Js</td>
      <td align="center">Babel Transpiler</td>
      <td align="center">Webpack</td>
      <td align="center">Jest</td>
      <td align="center">Docker</td>
    </tr>
  </tbody>
</table>


### Introduction

This is a API that will be further used on Flashtatu platform. It will manages all bussiness logic and data persistence. Ideally, it will be based on SOLID principles, trying to follow [node best practices](https://github.com/i0natan/nodebestpractices) towards componentization.

The main focus of this version is to apply all best practices that were left behind on the first prototype. ES6, automated tests, precommit checks (husky).

### Start up

Supported Node version: ```v10.8.0```

After cloning this repository, you will have to install all the dependencies:
```sh
$ npm install
```
To run the development enviroment (nodemon && babel):
```sh
$ npm run dev
```
For building (Webpack):
```sh
$ npm run build
```
For testing (Jest):
```
$ npm run test
```



