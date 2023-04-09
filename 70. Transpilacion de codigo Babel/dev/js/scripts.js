//npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/register gulp gulp-babel gulp-concat gulp-plumber gulp-uglify --save-dev

/* 

npm init -y - crea el archivo package.json

npm install -g gulp - para instalar gulp
 */

const numbers = [1, 2, 3, 4, "percy", 33];

const printNumbers = () => {
  console.log(...numbers);
};
