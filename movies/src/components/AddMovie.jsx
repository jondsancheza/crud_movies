import { useState } from "react";

import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { addMovie } from "../service/api";
import { useNavigate } from "react-router-dom";


const Container = styled(FormGroup)`
  width: 50%;
  margin: 3% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  id: "",
  title: "",
  year: "",
  time: "",
  language: "",
  release: "",
  country: "",
};

const AddMovie = () => {
  const [movie, setMovie] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const addMovieDetails = async () =>{
    await addMovie(movie);
    navigate('/');
  }
  return (
    <Container>
      <Typography variant="h4">Agregar Pelicula</Typography>
      <FormControl>
        <InputLabel>ID</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="id" />
      </FormControl>
      <FormControl>
        <InputLabel>Titulo</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="title" />
      </FormControl>
      <FormControl>
        <InputLabel>Año</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="year" />
      </FormControl>
      <FormControl>
        <InputLabel>Tiempo</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="time" />
      </FormControl>
      <FormControl>
        <InputLabel>Lenguaje</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="language" />
      </FormControl>
      <FormControl>
        <InputLabel>Fecha de lanzamiento</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="release" />
      </FormControl>
      <FormControl>
        <InputLabel>País</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="country" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addMovieDetails()}>AGREGAR PELICULA</Button>
      </FormControl>
    </Container>
  );
};

export default AddMovie;
