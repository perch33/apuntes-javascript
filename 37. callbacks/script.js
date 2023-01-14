//Un callback es una función que se ejecuta a través de otra función
//Los callbacks no son asíncronos, es decir se ejecutan por orden

/* const getUser = (id, cb) => {
  const user = {
    name: "percy",
    id: id,
  };
  if (id == 2) {
    cb("el usuario no existe");
  } else {
    cb(null, user);
  }
};

getUser(1, (error, user) => {
  if (error) {
    return console.log(error);
  } else {
    console.log(`user name is ${user.name}`);
  }
}); */


const users = [
  {
    id: 1,
    name: "Dorian",
  },
  {
    id: 2,
    name: "Laura",
  },
  {
    id: 3,
    name: "Carlos",
  },
];

const emails = [
  {
    id: 1,
    email: "dorian@gmail.com",
  },
  {
    id: 2,
    email: "laura@gmail.com",
  },
];

const getUser = (id, cb) => {
  const user = users.find((user) => user.id == id);
  if (user) {
    cb("no existe usuario");
  } else {
    cb(null, user);
  }
};

getUser(1);

