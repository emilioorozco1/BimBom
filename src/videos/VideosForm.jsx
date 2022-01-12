import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createVideo } from '../store/videos';
import { AppInput ,Fieldset} from '../components/AppInput';
import { AppButton, CenteredContainer, SmallContainer as SmallContainerTemplate } from '../theme';
import styled from 'styled-components';

let SmallContainer = styled(SmallContainerTemplate)`
  text-align: center;
`;

let VideosForm = (props) =>{
    let { register, handleSubmit } = useForm();

    let dispatch = useDispatch();

    let onSubmit = async(video) => {
        let formData = new FormData();

        formData.append('title', video.title);
        formData.append('video', video.video[0]);

        dispatch(
            createVideo(formData)
        )
    }
    return(
        <CenteredContainer>
            <SmallContainer>
        <form onSubmit={ handleSubmit(onSubmit)}>
            <input type="text"  {...register('title')} placeholder="Title" />

            <Fieldset>
                <label>Video file: </label>
            <input type="file"  {...register('video')} id=""/>
            </Fieldset>
            <button type="submit" small> Upload </button>    
        </form>
        </SmallContainer>
        </CenteredContainer>
    )

    
}

export default VideosForm;