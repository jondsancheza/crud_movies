import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { getMovies, deleteMovie } from "../service/api";

import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #ffffff;
    font-size: 20px;
  }
`;

const TBody =  styled(TableRow)`
  & > td{
    font-size: 20px;
  }
`;
const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    let response = await getMovies();
    setMovies(response.data);
  };

  const deleteMovieDetails = async (id) => {
    await deleteMovie(id);
    getAllMovies();
  }
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Titulo</TableCell>
          <TableCell>Año</TableCell>
          <TableCell>Tiempo</TableCell>
          <TableCell>Lenguaje</TableCell>
          <TableCell>Fecha de lanzamiento</TableCell>
          <TableCell>Pais</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {movies.map((movie) => (
          <TBody key={movie._id}>
            <TableCell>{movie.id}</TableCell>
            <TableCell>{movie.title}</TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell>{movie.time}</TableCell>
            <TableCell>{movie.language}</TableCell>
            <TableCell>{movie.release}</TableCell>
            <TableCell>{movie.country}</TableCell>
            <TableCell>
                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${movie._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteMovieDetails(movie._id)}>Delete</Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllMovies;
