import React, { useState, useEffect } from 'react';
import Searchbar from '../Searchbar';
import getApi from '../../API/api';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Button from '../Button';
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import s from './Render.module.css';


function Render() {
  const [ images, setImages ] = useState([]);
  const [ name, setName ] = useState('');
  const [ page, setPage ] = useState(1);
  const [ showModal, setShowModal ] = useState(false);
  const [ modalImage, setModalImage ] = useState('');
  const [ status, setStatus ] = useState("idle");
  const [ error, setError ] = useState('');
  const [ loadMore, setLoadMore ] = useState(false);
  
  console.log(error);

  const requestImage = (name, page) => {
    const value = getApi(name, page)
    
    value.then((res) => {
      const pictures = res.data;
      
      if (pictures.total === 0) {
        setLoadMore(false);
        toast.error("Could not find images with that name");
      }
      function nameUseEffect() {
        setImages((prev) => [...prev, ...pictures.hits]);
        setPage((prev) => prev + 1);
        setLoadMore(true);
      }
      function namePage() {
        setImages(pictures.hits);
        setPage((prev) => prev + 1);
        setStatus("resolved");
        setLoadMore(true);
      }
       page ? nameUseEffect() : namePage();

        if (res.data.hits.length < 12) {
          setLoadMore(false);
      }
    }).catch((error) => setError({ status: "rejected", error }));
  }
  
  useEffect(() => {  
    if (name) {
      setStatus("pending")
      requestImage(name)
    } 
  }, [name]);

  const clickLoadMore = () => {
    requestImage(name, page)
  };
  
  const toglleModal = (e) => {
    setShowModal(( showModal ) => ({ showModal: !showModal }));
    if (!showModal) {
      if (e) {
        filtredLIst(e.target.parentNode.id);
      }
    }
  };
  const filtredLIst = (id) => {
    let value = images.find((item) => item.id === Number(id));
    setModalImage( value.largeImageURL );
  };
  const findPicture = (pictureName) => {
    if (pictureName !== name && pictureName !== ' ') {
      setName(pictureName);
      setPage(1);
    }
  };

  return (
    <div className={s.render}>
      <Searchbar onSubmit={findPicture}/>
      <div>
        <div>
          {status === "idle" && <p>please enter name picture</p>}
          {status === "pending" && (
            <Oval
              height="100"
              width="100"
              color="grey"
              ariaLabel="loading"
            />
          )}
          {status === "resolved" && (
            <ImageGallery pictures={images} open={toglleModal} />
          )}
          {loadMore && <Button load={clickLoadMore} />}
          {showModal && <Modal src={modalImage} setShowModal={setShowModal}/>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Render;
