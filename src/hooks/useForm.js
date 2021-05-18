// write your custom hook here to control your checkout form
import {useState} from 'react';

const useForm = (initialValues) =>{

    const [values, setValues] = useState(initialValues);
     const handleChange = event =>{

        setValues({
            ...values,[event.target.name]:event.target.value
        });
     }
     return([values, handleChange]);
}
export default useForm