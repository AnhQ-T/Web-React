import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is Required"),
  // email: yup
  //   .string()
  //   .email("Email must be valid")
  //   .required("Email is required"),
  password: yup    
    .string()
    .min(3, "Password must be at least 4 characters")
    .required(),
  // verifyPassword: yup
  //   .string()
  //   .required()
  //   .label('Confirm password')
  //   .test('passwords-match', 'Passwords must match ya fool', function(value) {
  //     return this.parent.password === value;
  //   }),
})

export default formSchema