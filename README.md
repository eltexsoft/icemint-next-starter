# Icemint Next Starter

Hello Icemint team. This is the starter kit bootstraped with [Next.js](https://github.com/zeit/next.js/) for
server-rendered or statically-exported React apps, [Redux](https://github.com/reactjs/redux/) for state
management, [Flow](https://github.com/facebook/flow) for static types, [PostCSS](https://github.com/postcss/postcss) for styles, [ESLint](https://github.com/eslint/eslint), [Stylelint](https://github.com/stylelint/stylelint), [Prettier](https://github.com/prettier/prettier) for linting and format your code with
config-standard.

### Installation
Clone repo:
``
git clone https://github.com/romannmk/paper.git
cd icemint-next-starter
``

Make it your own:
``
rm -rf .git && git init 
``
> :information_source: This re-initializes the repo. 

Install the dependencies:
``
yarn install
``

### Development Workflow
Start a live-reload development server:
``
yarn dev
``

Generate a production build:
``
yarn build
``

Start the production server
``
yarn start
``

Run Flow
``
yarn flow
``

Linting
``
yarn eslint
``
``
yarn stylelint
``

> :information_source: For linting install the plugin for your editor.

> :information_source: For linting via console need install --global ESLint and Stylelint  

### Contribution
I'm open to contributions & suggestions in making this a lot better :hand:

### License
MIT
