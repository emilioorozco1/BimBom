import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm} from 'react-hook-form';
import { signIn } from '../store/user';
import UserFormLayout from './UserFormLayout';
import { AppInput } from '../components/AppInput';
import { AppButton } from '../theme';


let SignIn = (props) => {
    let dispatch = useDispatch();
    
    const { register, handleSubmit } = useForm();

    let onSubmit = (data) =>{
        dispatch(
            signIn(
                { credentials: data }
            )
        )
    }

    return (
        <UserFormLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AppInput type="email" label="Email" name="email" register={register} />
          <AppInput type="password" label="Password" name="password"  register={register} />
          <AppButton type="submit"> Login </AppButton>
        </form>
        </UserFormLayout>
      );
}

export default SignIn;