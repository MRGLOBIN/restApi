const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const {_} = require('ajv')
const ajv = new Ajv()

addFormats(ajv) // adding formats to ajv

ajv.addKeyword({
  keyword: 'passMatch',
  type: 'object',
  schemaType: 'boolean',
  error: {
    message: 'mm'
  },
  code(context) {
    // const {data, schema} =  context
    const password = data.password
    const confirm = data.passwordConfirmation
    const op =  _`===`
    context.fail(_`${password} !== ${confirm}`)
  },
})

const createUserSchema = {
  type: 'object',
  passMatch: true,
  properties: {
    name: { type: 'string' },
    password: { type: 'string', minLength: 3},
    passwordConfirmation: { type: 'string', minLength: 3 },
    email: { type: 'string', format: 'email' },
  },
}

const data = {
  name: 'hello world',
  password: 'ztm hello',
  passwordConfirmation: 'ztm hello',
  email: 'xyz@gmail.com',
}

const validate = ajv.compile(createUserSchema)
const isvalid = validate(data)
console.log(isvalid)
console.log(validate.errors)

