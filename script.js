// console.log('Add validation!')

// class Name {
//     constructor(name){
//         this.name=name;
//     }
//     nameValidate(){
//             let input = document.getElementById('name')
//             let field = document.getElementById('name-field')
//             if (input.value === '') {
//               markInvalid(field, ['Name is required.'])
//             } else {
//               markValid(field)
//             }
//           }
// }


// class field{
//     this.input
//     this.valid
// }

class Validation {
  constructor (test, errorMsg) {
    this.test = this.test
    this.errorMsg = errorMsg || 'is invalid.'
  }

  validate (value) {
    return this.test(value)
  }
}

class Field {
  constructor (inputDiv, validations) {
  this.inputDiv = inputDiv
  this.validations =validations || []  
  }
  clearErrorMsgs () {
    for (let msg of this.inputDiv.querySelectorAll('.error-msg')){
      msg.remove
    }
  }
  addErrorMsgs () {
    let fieldName = this.inputDiv.querySelector('label').innerText
    for (let msg of errorMsgs) {
      const msgNode = document.createElement('p')
      msgNode.classList.add('input-hint', 'text-danger', 'error-msg')
      msgNode.innerText = `${fieldName} ${msg}`
      this.inputDiv.appendChild(msgNode)
    }
  }
  markValid () {
    this.clearErrorMsgs()
    this.inputDiv.classList.add('input-valid')
    this.inputDiv.classList.remove('input-invalid')
  }
  markInvalid () {
    this.clearErrorMsgs()
    this.inputDiv.classList.add('input-invalid')
    this.inputDiv.classList.remove('input-valid')
  }
  getValue () {
    const input = this.inputDiv.querySelector('input, select, textarea')
    const value = input.value
    return value
  }
  validate () {
    const value = this.getValue()
    const errorMsgs = []
    for (let validation of this.validations){
      if (!validation.validate(value)) {
        errorMsgs.push(validation.errorMsg)
      }
    }
    if (errorMsgs.length === 0) {
      this.markValid()
    }
    else {
      this.markInvalid()
      this.addErrorMsgs(errorMsgs)
    }
    return errorMsgs.length === 0
  }
}

class Form {
  constructor (domNode, fields) {
    this.domNode = domNode
    this.fields = fields
  }
  validate () {
    let valid = true
    for (let field of this.fields) {
      const fieldIsValid = field.validate()
      if(!fieldIsValid) {
        valid = false
      }
    }
    return valid
  }
}

class Parking {
  constructor (name){
    this.name = name
  }
}



const presenceValidation = new Validation(value => !!value, 'must not be blank.')
const nowOrFutureValidation = new Validation (function(dateStrtoTest) {
  // Date needed for parking form
  // if (!dateStrToTest){
  //   return true
  let dateToTest = new Date(dateStrtoTest)
  let now =new Date()
  now.setUTCHours(0,0,0,0)
  dateToTest.setUTCHours(0,0,0,0)

  return dateToTest >= now
  }, 'must be today or in the future.')
//need to verify lenght and pass length check value
//where can white space be trimmed?
  // const lengthValidation = new Validation(value =>, )

let nameField = new Field(document.querySelector('#name-field'), [presenceValidation])

// let nameField = new Field(document.querySelector('name'), [presenceValidation])

//other fields


document.querySelector('#parking-form').addEventListener('submit', (event) =>{
  event.preventDefault()


form.validate('#parking-form', 'nameField')

})