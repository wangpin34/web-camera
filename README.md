# webcam
It's a camera based on web technologies. You can take picture without any pre installed camara applications.

## Development
This assumes nodejs and npm are installed at your local machine.

Here is the detailed step about how to begin development.
1. Install dependencies
```
npm install
```
2. Start it
```
npm run dev
```
It will launch the dev server at port 8080. And you still have to chance to change it to any port when 8080 is used by other processes.

Then you can open http://localhost:8080 in any modern browser to see the app.

3. Build & Publish
```
npm run build
```

To deploy the app at any remote server, you need to build source code. This is not like the command used in 'Start it' which has complicated runtime for development.

After the command gets executed, several new files are generated under www folder.

```
git add www && git commit -m 'Update resouces'
git subtree push --prefix www origin gh-pages
```
Above commands deploys build files to branch gh-pages.






