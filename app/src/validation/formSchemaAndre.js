import * as yup from 'yup';

const formSchema = yup.object().shape({
    todo: yup
        .string()
        .min(1, "Task is Required")
        .required('Task is Required'),
    // description: yup
    //     .string()
    //     .min(1, "Description is Required")
    //     .required('Description is Required'),
})

// 

export default formSchema