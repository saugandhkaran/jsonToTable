# Productsup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## External dependencies used
ngx-infinite-scroll - to implement infinite scrolling

## State mangement used
Based on the size and complexity of the project, I used @Input and @Output for reactiveness and interaction between components.
A service datastore manages all the data. So that data can be accessed in the child components as needed.
