# Widgets for Twitch Content Creators

## Description

This application is built on top of [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository and React.js frontend (using Vite). It is a simple application that allows you to create widgets for Twitch.tv.

## Available Twitch chat commands

| Command       | Description                          |
| ------------- | ------------------------------------ |
| `!confetti`   | Send confetti, ideal for celebration |
| `!zumbido`    | Send zumbido, ideal for celebration  |

## Widgets available

> **Note:** I am assuming you're running server on port 3000.

|    Widget     |                Description                 |
| :-----------: | :----------------------------------------: |
|     Chat      |           http://localhost:3000            |
|   Confetti    |   http://localhost:3000/widget/confetti    |
|   Zumbido     |   http://localhost:3000/widget/zumbido     |

## Socket Events available

| Event name      | Direction | Description                                 |
| --------------- | --------- | ------------------------------------------- |
| `confetti`      | Sub       | Triggers when confetti is sent, emits ovoid |
| `zumbido`       | Sub       | Triggers when zumbido is sent, emits ovoid  |

## Web application

Application is available at http://localhost:3000 and can be accessed by any browser, the following routes will be available:

- `/`: Home page
- `/widget/confetti`: Confetti widget
- `/widget/zumbido`: Zumbido widget

## Installation

For better development experience I'm using [pnpm](https://pnpm.js.org/) as the package manager for the project.

This server will be running on port 3000, if you want to change it you can do it by editing the client/src/constants.js with the localhost:<PORT>... and when starting the app make sure you're using PORT environment variable. `PORT=3000 pnpm start:prod`

> Is required to setup the environments with the proper Operating Systems Variables, that's why I am providing the `.env.sample` file so you can easily setup the environment variables, by just renaming it to `.env` and adding the proper values.

```bash
$ pnpm install && cd client && pnpm install
```

## Build client & server

```bash
$ pnpm run build
```

## Running the app

```bash
# development the server
$ pnpm run start

# watch mode & development the client
$ cd client && pnpm run dev

# watch mode server
$ pnpm run start:dev

# production mode (client & server)
$ pnpm run start:prod
```

## Stay in touch

- Author - [Ruslan Gonzalez](https://github.com/ruslanguns)
- Twitter - [@ruslangonzalez](https://twitter.com/ruslanguns)
- Twitch - [@rusgunx](https://twitch.tv/rusgunx)
