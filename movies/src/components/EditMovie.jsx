import { useState, useEffect } from "react";

import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { editMovie, getMovie } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

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

const EditMovie = () => {
  const [movie, setMovie] = useState(defaultValue);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadMovieDetails();
  }, []);

  const loadMovieDetails = async () => {
    const response = await getMovie(id);
    setMovie(response.data);
  };
  const onValueChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const editMovieDetails = async () => {
    await editMovie(movie, id);
    navigate("/");
  };
  return (
    <Container>
      <Typography variant="h4">Editar Pelicula</Typography>
      <FormControl>
        <InputLabel>ID</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="id" value={movie.id} />
      </FormControl>
      <FormControl>
        <InputLabel>Titulo</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="title"
          value={movie.title}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Año</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="year"
          value={movie.year}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Tiempo</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="time"
          value={movie.time}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Lenguaje</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="language"
          value={movie.language}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Fecha de lanzamiento</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="release"
          value={movie.release}
        />
      </FormControl>
      <FormControl>
        <InputLabel>País</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="country"
          value={movie.country}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editMovieDetails()}>
          EDITAR PELICULA
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditMovie;
