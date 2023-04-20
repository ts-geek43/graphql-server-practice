var { graphql, buildSchema } = require("graphql");
var { graphqlHTTP } = require("express-graphql");

// Construct a schema, using GraphQL schema language

const fs = require("fs");
const path = require("path");

var schemaData = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf-8"
);
var schema = buildSchema(schemaData);

const express = require("express");

const app = express();

let usersData = require("./users.json");
const { access } = require("fs/promises");

let fakeDB = [
  { id: 1, name: "Manish", salary: "112900/-", nameType: "male" },
  { id: 2, name: "Aayush", salary: "112900/-", nameType: "male" },
  {
    id: 3,
    name: "Jenish",
    salary: "112900/-",
    extraTime: 12,
    nameType: "male",
  },
  {
    id: 4,
    name: "Divya",
    salary: "112900/-",
    extraTime: 11,
    bonus: 72,
    nameType: "unisex",
  },
  {
    id: 5,
    name: "Helina",
    salary: "112900/-",
    bonus: 54,
    nameType: "female",
  },
];

// The rootValue provides a resolver function for each API endpoint
const rootValue = {
  hello: () => {
    return "Hello world!";
  },
  email: () => {
    return "M@gmail.com";
  },
  age: () => {
    return 2.4;
  },
  manish: () => {
    return {
      profile: {
        name: "Manish Prajapati",
        email: "mmprajapaty@gmail.com",
        age: 21,
        field: "Information Technology",
        experience: 0.133,
      },
      language: [
        "C Programming",
        "Cpp Programming Language",
        "MongoDB",
        "GraphQL",
      ],
    };
  },
  users: (props) => {
    return usersData.filter((user) => user.id == props.id);
  },
  updateUser: (props) => {
    usersData = usersData.map((user) => {
      if (user.id == props.id) {
        return { ...user, name: props.input.name, salary: props.input.salary };
      } else {
        return user;
      }
    });

    return usersData;
  },
  createUser: (props) => {
    usersData = [...usersData, { id: props.id, name: props.name }];
    return usersData;
  },
  createUserMutate: (props) => {
    usersData = [...usersData, { id: props.id, name: props.name }];
    return `Data added ID:${props.id} having name: ${props.name}`;
  },
  displayUsers: () => {
    return usersData;
  },
  createEmployee: (props) => {
    fakeDB = [
      ...fakeDB,
      {
        id: fakeDB[fakeDB.length - 1].id + 1,
        name: props.input.name,
        salary: props.input.salary,
      },
    ];
    return fakeDB;
  },
  employees: (props) => {
    if (props.nameType) {
      return fakeDB.filter((employee) => employee.nameType == props.nameType);
    }
    return fakeDB;
  },
  updateEmployee: (props) => {
    fakeDB = fakeDB.map((employee) => {
      if (employee.id == props.id) {
        return {
          ...employee,
          name: props.input.name,
          salary: props.input.salary,
        };
      } else {
        return employee;
      }
    });
    return fakeDB;
  },
  deleteEmployee: (props) => {
    fakeDB = fakeDB.filter((employee) => employee.id != props.id);
    return fakeDB;
  },
};

// app.get("/graphql", (req, res) => {
//   return res.send("Namaste Queries!");
// });

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: "{ hello, email }",
  rootValue,
}).then((response) => {
  console.log(response);
});

// app.use(
//   "/",

//   graphqlHTTP({
//     schema: schema,
//     graphiql: false,
//     rootValue: rootValue,
//   })
// );

app.use(
  "/",

  graphqlHTTP({
    schema: schema,
    graphiql: false,
    rootValue: rootValue,
  }),
  function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  }
);

let portNumber = 30000;

console.log(`Server is running at http://localhost:${portNumber}`);

app.listen(portNumber);
