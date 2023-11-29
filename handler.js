const {execSync} = require('child_process');
const {writeFileSync} = require('fs');

module.exports.handler = () => { 
    console.log("startingggg");
    
  writeFileSync('/tmp/hello.txt', Buffer.from('Hello World!'));
  console.log("centre");

  execSync(`
  cd /tmp
  libreoffice7.5 --headless --invisible --nodefault --view --nolockcheck --nologo --norestore --convert-to pdf --outdir /tmp --debug ./hello.txt
  `);
};