export const initialForm={
    name:'',
    email:'',
    gender:'male',
    phoneNumber:'',
    password:''   
};


export const validationState={
    name:{
      required:true,
      pattern:/^[a-zA-Z0-9\s]+$/,
      patternMessage:"Name is not alphanumeric",
      requiredError:"Name Error",
      status:false
    },
    email:{
      required:true,
      pattern:/@+/,
      patternMessage:"Email must contain @",
      requiredError:'Email Error',
      status:false
    },
    phoneNumber:{
      required:true,
      patten:/^[0-9]+$/,
      patternMessage:"Phone Number must contain only numbers",
      requiredError:"Phone Number Error",
      status:false
    },
    password:{
      required:true,
      pattern:/^[a-zA-Z]{6,}$/,
      patternMessage:"Password must contain atleast 6 letters",
      requiredError:"Password Error",
      status:false
    }
};