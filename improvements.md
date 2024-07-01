## Changes

v.8 (current)
- add postman documentation
- add inline command to launch in readme

[v.7](https://github.com/JulienGrach/cassation/commit/6b961bb69b9f21831749cd902831a643c4046773)
- fix bug: find item didn't send 404 on missing item

[v.6](https://github.com/JulienGrach/cassation/commit/a51b7cf7006e0486983dd8c702d4cebfd6694eeb)
- add mongodb docker
- replace file system storage by mongodb storage (essentially items.service.js)

[v.5](https://github.com/JulienGrach/cassation/commit/e921c72c9e46b67f89c6d4fa855f9bfb97771f29)
- fix technical issue: .vscode setting removed to project (introduced on v.2)
- add changes on "improvements" markdown

[v.4](https://github.com/JulienGrach/cassation/commit/ee627c2e34bed8cfb4c728f28df612d104db40b9)
- add improvements markdown to write improvement documentation
- theorical performance improve due readFile is now async
- update item route check for item data integrity

[v.3](https://github.com/JulienGrach/cassation/commit/6f56b9c98060c6eca762ceefe7d2d904485c5463)
- improve /items route: allow a query string to filter by isActive key

[v.2](https://github.com/JulienGrach/cassation/commit/ebfd793ce4aecba79c0ae328fe06e6c81dd0ef1a)
- fix /items returning list of existing items
- introduce technical issue: .vscode setting added to project

[v.1](https://github.com/JulienGrach/cassation/commit/7a2d49f1bdbf807e373da62f2be5541c8d66aee5)
- fix compilation issue (variable name itemsFilename)
- fix env variable PORT

## RoadMap

- Server is actually using http and should use https. - <span style="color:red">SECURITY</span>
- Cors politic is open for all access: is it a thinking choice ? - <span style="color:red">SECURITY</span>
- ~~Param id doesn't work due it return promise~~ - <span style="color:yellow">BUG</span>
- ~~Prefer use an async method to read an OS file to avoid waste time~~ - <span style="color:blue">TECHNICAL</span>
- ~~Create / Update / Delete should change the state (will be with the mongo implementation)~~ - <span style="color:green">IMPROVEMENT</span>
- ~~Create item doesn't create an item with isActive key.~~ - <span style="color:green">IMPROVEMENT</span>
- Create item doesn't allow to be configured (items.controller.js/createItem => never use the itemData parameter of service function) - <span style="color:green">IMPROVEMENT ? (check lifecycle goal)</span>
- ~~Update item allow anything to be added. Controller should secure the data integrity.~~ - <span style="color:red">SECURITY</span>
- At the first read, errors handlers should be ok but I stay a little bit confused between server errors to send user and app errors to throw sigterm. Both of them handle flagged errors and unknown errors ... Maybe we can try to write a dedicated system isolated from server or app file. - <span style="color:blue">TECHNICAL</span>
- Add a system to secure mongodb integrity (as mongoose or whatever to check types) - <span style="color:blue">TECHNICAL</span>
- Add typescript - <span style="color:blue">TECHNICAL</span>
