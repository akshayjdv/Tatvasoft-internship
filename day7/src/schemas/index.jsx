import * as yup from 'yup'

export const signUpSchema = yup.object({
    firstName:yup.string().min(3).max(30).required('please enter your firstName'),
    lastName:yup.string().min(3).max(30).required('please enter your lastName'),
    email: yup.string().email().required('please enter your email'),
    password:yup.string().min(4).required('please enter your password'),
    confirmPassword:yup.string().min(4).required('please enter your password').oneOf([yup.ref('password'),null],"password must match"),
});

export const loginSchema = yup.object({
    username : yup.string().min(3).max(30).required('please enter your username'),
    password:yup.string().min(4).required('please enter your password'),
})



