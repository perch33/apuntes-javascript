/* const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dorian')
        }, 1500)
    })
}
const sayHello = async () => {
    const name = await getName()
    return `Hello ${name}`
}
sayHello().then(res=>console.log(res)) */

const users = [
  { id: 1, name: "Dorian" },
  { id: 2, name: "Laura" },
  { id: 3, name: "Carlos" },
];
const emails = [
  { id: 1, email: "dorian@gmail.com" },
  { id: 2, email: "laura@gmail.com" },
];
