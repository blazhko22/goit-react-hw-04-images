import axios from 'axios';

export default function pictures(pictureName, page = 1) {
  return axios.get(
    `https://pixabay.com/api/?q=${pictureName}&page=${page}&key=24810210-2291bc5d9ffb621f951621db6&image_type=photo&orientation=horizontal&per_page=12`
  );
}
