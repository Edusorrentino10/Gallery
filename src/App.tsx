import { useState, useEffect, FormEvent } from 'react';
import { Area, Container, Header, PhotoList, ScreenWarning, UploadForm } from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Lottie from 'react-lottie';
import * as animationLoading from './animations/animationLoading.json';
import * as animationNoPhotos from './animations/animationNoPhotos.json';


const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file.size === 0) {
      toast.error('Foto não inserida.')
    }

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        toast.error('Tipo de foto não permitida.');
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
        toast.success('Foto adicionada com sucesso.');
        return false;
      }
    }
  }

  const defaultOptionsAnimationLoading = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const defaultOptionsAnimationNoPhotos = {
    loop: true,
    autoplay: true,
    animationData: animationNoPhotos,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }


  return (
    <Container>
      <Area>
        <Header>Galeria de Fotos</Header>

        <UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          {
            !uploading &&
            <input type="submit" value="Enviar" />
          }
          {
            uploading &&
            <input type="submit" value="Enviando..." disabled />
          }
        </UploadForm>

        {loading &&
          <ScreenWarning>
            <Lottie
              options={defaultOptionsAnimationLoading}
              width={330}
              height={330}
            />
          </ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <PhotoList>
            {photos.map((item, index) => (
              <PhotoItem setLoading={setLoading} setPhotos={setPhotos} key={index} item={item} />
            ))}
          </PhotoList>
        }

        {!loading && photos.length === 0 &&
          <ScreenWarning>
            <Lottie
              options={defaultOptionsAnimationNoPhotos}
              width={280}
              height={280}
            />
            <div className="NoPhotos">
              <div>⚠️</div>
              <div>Não há fotos cadastradas.</div>
            </div>
          </ScreenWarning>
        }

      </Area>
      <ToastContainer autoClose={3000} />
    </Container >
  );
}

export default App;
