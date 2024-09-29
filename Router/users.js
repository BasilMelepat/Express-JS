const express = require('express');
const router = express.Router();

let users = [
    {"id":1,"first_name":"Lyon","last_name":"Enever","email":"lenever0@flickr.com","password":"hE3?Q="},
    {"id":2,"first_name":"Angil","last_name":"Mountfort","email":"amountfort1@princeton.edu","password":"rF4}C/Zj"},
    {"id":3,"first_name":"Christi","last_name":"Bellward","email":"cbellward2@bloglovin.com","password":"nL4#g"},
    {"id":4,"first_name":"Kristopher","last_name":"Ioselev","email":"kioselev3@creativecommons.org","password":"dL1)O?"},
    {"id":5,"first_name":"Haslett","last_name":"Feaster","email":"hfeaster4@columbia.edu","password":"pB2`"},
    {"id":6,"first_name":"Carissa","last_name":"Mosdall","email":"cmosdall5@google.nl","password":"qG5,"},
    {"id":7,"first_name":"Dieter","last_name":"Ellacott","email":"dellacott6@about.com","password":"bV8<iJ"},
    {"id":8,"first_name":"Aguistin","last_name":"Featherstonhaugh","email":"afeatherstonhaugh7@google.cn","password":"xE1`Q"},
    {"id":9,"first_name":"Rockwell","last_name":"Woof","email":"rwoof8@ft.com","password":"gD2~"},
    {"id":10,"first_name":"Caro","last_name":"Dye","email":"cdye9@artisteer.com","password":"tK0@|nx"},
    {"id":11,"first_name":"Zia","last_name":"Grierson","email":"zgriersona@lycos.com","password":"yP0="},
    {"id":12,"first_name":"Sonia","last_name":"Flude","email":"sfludeb@illinois.edu","password":"hE5|~aYb"},
    {"id":13,"first_name":"Anatollo","last_name":"Stean","email":"asteanc@mediafire.com","password":"hP2_DAA"},
    {"id":14,"first_name":"Alasdair","last_name":"Ivashkin","email":"aivashkind@ed.gov","password":"vW2#KC"},
    {"id":15,"first_name":"Egor","last_name":"Gorch","email":"egorche@cbsnews.com","password":"lA7!k'e,"},
    {"id":16,"first_name":"Penny","last_name":"Beden","email":"pbedenf@theglobeandmail.com","password":"wY6'}6E"},
    {"id":17,"first_name":"Murielle","last_name":"Kordt","email":"mkordtg@who.int","password":"nS2.DW"},
    {"id":18,"first_name":"Hatty","last_name":"Revelle","email":"hrevelleh@constantcontact.com","password":"tD6_)u"},
    {"id":19,"first_name":"Filmer","last_name":"Rawlings","email":"frawlingsi@mac.com","password":"dQ4\\`"},
    {"id":20,"first_name":"Melba","last_name":"Timmins","email":"mtimminsj@sciencedirect.com","password":"vH3,Q"}
];

// GET /users
router.get('/', (req, res) => {
    res.json(users);
  });
  
  // GET /users/:id
  router.get('users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  
  // POST /users
  router.post('users/', (req, res) => {
    const newUser = {
      id: users.length + 1,
      ...req.body
    };
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
  // PUT /users/:id
  router.put('users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
      users[index] = { ...users[index], ...req.body };
      res.json(users[index]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  
  module.exports = router;