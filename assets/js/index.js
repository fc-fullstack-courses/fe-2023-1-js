const obj = {
  display: 'flex',
  justifyContent: 'center',
  lineHeight: 1.5,
};

const vukladach = {
  name : 'Kyrylo',
  height: 3.5,
  weight: 1500,
  isMale: true,
  pc: {
    cpu : {
      manufacturer: 'AMD',
      model: 'Ryzen 2700x'
    },
    ram: 16 
  },
  password: 'admin',
  email: 'test@test.test'
}

const phone = {
  color: 'red',
  price: 15000,
  manufacturer: 'Somebody',
  call: function (somebody) {
    console.log('calling '+ somebody)
  },
}