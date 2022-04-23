import { Container, FooterImg, NameImg, RemovePhoto } from "./styles";
import { GoTrashcan } from 'react-icons/go';
import { Photo } from '../../types/Photo';
import * as Photos from '../../services/photos';

type PhotoItemProps = {
  item: Photo;
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const PhotoItem = ({ item, setPhotos, setLoading }: PhotoItemProps) => {

  const handleRemovePhoto = async () => {
    await Photos.deletePhoto(item);
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
}

  return (
    <Container>
      <img src={item.url} alt={item.name} />
      <FooterImg>
        <NameImg>{item.name}</NameImg>
        <RemovePhoto onClick={handleRemovePhoto}><GoTrashcan/></RemovePhoto>
      </FooterImg>
    </Container>
  )
}
