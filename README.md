# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Docsearch
builds search index to search docs. Install docker: https://docs.docker.com/engine/install/ubuntu/

Make sure to disable contextual search in docusaurus.config.js

Create an algolia account, put appId, apiKey, indexName in docusaurus.config.js. Need to have appId because we're not using algolia's free search/crawl

`sudo docker pull algolia/docsearch-scraper`

`sudo apt install jq`

`sudo docker run -it --env-file=.env -e "CONFIG=$(cat docsearch_config.json | jq -r tostring)" algolia/docsearch-scraper`