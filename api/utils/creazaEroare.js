const creazaEroare = (status, mesaj) => {
    const err = new Error();
    err.status =status;
    err.message=mesaj;

    return err;
};

export default creazaEroare;