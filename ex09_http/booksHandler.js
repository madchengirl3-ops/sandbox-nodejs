export const booksHandler = (req, res) => {

  const {method, url} = req;

  console.log('url == ', url);
      const urlSplitted = url.split('?');
      const urlString = urlSplitted[0];
      const qweryString = urlSplitted[1];

      const urlArr = urlString.split('/');

      //console.log('urlArr', urlArr.length);


      let id = null;
      if(urlArr.length === 4) {
        const id = +urlArr[urlArr.length-1];


  switch (method) {
    case 'POST':

    res.writeHead(201, {'Content-Type': 'application/json'});
  res.end(`{
    "id": 1,
    "name":"Преступление и наказание",
    "author":"Ф. М. Достоевский",
    "description":"социально-психологический и социально-философский роман"}`);
      return;
    case 'GET':
      if (id) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(`{
         "id": 1,
         "name":"Преступление и наказание",
         "author":"Ф. М. Достоевский",
         "description":"социально-психологический и социально-философский роман"}`);
      } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(`[{
    "id": 1,
    "name":"Преступление и наказание",
    "author":"Ф. М. Достоевский",
    "description":"социально-психологический и социально-философский роман"}]`);
      }

    res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(`[{
    "id": 1,
    "name":"Преступление и наказание",
    "author":"Ф. М. Достоевский",
    "description":"социально-психологический и социально-философский роман"}]`);

      return;
    case 'PATCH':
    case 'PUT':
    res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(`{
    "id": 1,
    "name":"Преступление и наказание!",
    "author":"Ф. М. Достоевский",
    "description":"социально-психологический и социально-философский роман"}`);
      return;
    case 'DELETE':
      res.writeHead(204);
  res.end(null);
      return;
  }

  res.writeHead(500, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(
    {
      status: "error", 
      message: "Method not imlemented"
    }));
 
};
};