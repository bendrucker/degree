# degree [![Build Status](https://travis-ci.org/bendrucker/degree.svg?branch=master)](https://travis-ci.org/bendrucker/degree)

> Development server for virtual-dom/observable components

## Install

```
$ npm install --global degree
```


## CLI

```sh
$ degree component.js
#=> auto-opens browser with component mounted
```

Other options are passed to [budo](https://github.com/mattdesl/budo):

```sh
$ degree component.js --port 8000
```

## API

#### `degree(entries, [options])` -> `emitter`

Returns the EventEmitter from [budo](https://github.com/mattdesl/budo)'s API.

##### entries

*Required*  
Type: `string` / `array[string]`

A path to an entry file, or multiple entries.

##### options

###### foo

Options to pass to [budo](https://github.com/mattdesl/budo).


## License

MIT © [Ben Drucker](http://bendrucker.me)
