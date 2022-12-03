//routes mahasiswa
const express = require ('express')
const router = express.Router ()
const Mahasiswa = require('../models/Mahasiswa')

//creat data mahasiswa
router.post('/', async(reqres) => {
    //tampung input data
    const mahasiswaPost = new Mahasiswa ({
        nama: reqres.body.nama,
        alamat: reqres.body.alamat
    })

    try{
        //simpan data ke mongo db
        const mahasiswa = await mahasiswaPost.save()
        //response sucess
        res.json(mahasiswa)
    }catch (error){
        //response error
        res.json({
            message: error
        })

    }
})
module.exports = router