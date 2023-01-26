import express from 'express';
import { addMovie, getMovies, getMovie, editMovie, deleteMovie} from '../controller/user-controller.js';

const router = express.Router();

router.post('/add',addMovie);
router.get('', getMovies);
router.get('/:id', getMovie);
router.put('/:id', editMovie);
router.delete('/:id', deleteMovie)

export default router;