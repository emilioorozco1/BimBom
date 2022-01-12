import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signUp } from "../store/user";
import UserFormLayout from "./UserFormLayout";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../theme";
import { useNavigate } from "react-router-dom";

let SignUp = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  let onSubmit = async (data) => {
    await dispatch(signUp(
        { credentials: data }
        )
    )
    navigate("/videos");
  };

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput type="text" label="Username" name="username" register={register} />
        <AppInput type="email" label="Email" name="email" register={register} />
        <AppInput type="password" label="Password" name="password" register={register}/>
        <AppButton type="submit"> Create account </AppButton>
      </form>
    </UserFormLayout>
  );
};

export default SignUp;
