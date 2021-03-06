File System Output for Écoule
=============================
An [Écoule][ecoule-core] transform output that creates a folder structure, and writes files to it, from a given Écoule transformer output.

[ecoule-core]: https://github.com/gausby/ecoule

This outputter can be used to write files to a folder that is being served by a static file server.

This project uses the [node-mkdirp][mkdirp] module, made by [Substack][substack].

[substack]: https://github.com/substack
[mkdirp]: https://github.com/substack/node-mkdirp

## Usage
Attach it as an output of an Écoule data transformer. It takes one configuration option:

  * `basedir` The directory the output should be written to. Default: none, an error is thrown if this is not assigned.

Options should get passed in as an Object.


## Development
The project scaffold includes unit test framework, and other QA tools, but they are not set up yet. This might happen eventually.


## License
The MIT License (MIT)

Copyright (c) 2013 Martin Gausby

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
